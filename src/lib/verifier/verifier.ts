import { Template } from "../generated/credential-templates/template_pb";
import { computePOIHash, verifySignature } from "../common";
import moment = require("moment");

export const ErrInvalidProofOfIntegrityHash = (expected: string, computed: string): string => {
    return `Invalid proof of integrity hash expected: ${expected} computed: ${computed}`;
}

export const ErrInvalidSignature = (testPub: string, testSig: string): string => {
    return `Signature verification failed publickey used: ${testPub} signature: ${testSig}`;
}

export const ErrIssuerPubMismatch = (expected: string, provided: string): string => {
    return `Publickey of issuer mismatch expected: ${expected} provided: ${provided}`;
}

export const ErrExpired = (expiredAt: number): string => {
    return `Expiration date passed expiration: ${moment(new Date(expiredAt)).format('L')}`;
}

/**
 *  Contains boolean denoting verification success and optional error message if one arises
 *
 * @export
 * @class VerificationResult
 */
export class VerificationResult {
    constructor(public isVerified: boolean, public errMsg?: string) {}

    get error(): Error {
        return new Error(this.errMsg || "");
    }

    get ok(): boolean {
        return this.isVerified;
    }
}

/**
 *  Verifies template data and ownership
 * @param {Template} template template to verify
 * @param {string} issuerPub public key of the issuer who owns this template
 * @export
 */
export const verifyTemplate = (template: Template, issuerPub: string): VerificationResult => {
    const expectedPOI: string = computePOIHash(template.getData());
    const actualPOI: string = template.getVerification().getProofOfIntegrityHash();
    if(expectedPOI != actualPOI) return new VerificationResult(false, ErrInvalidProofOfIntegrityHash(expectedPOI, actualPOI));

    const signature: string = template.getVerification().getSignature();
    const expectedIssuerPub: string = template.getData().getIssuerPub();
    if(expectedIssuerPub != issuerPub) return new VerificationResult(false, ErrIssuerPubMismatch(expectedIssuerPub, issuerPub));
    if(!verifySignature(signature, 
        Buffer.from(expectedPOI, 'hex'), 
        Buffer.from(expectedIssuerPub, 'hex'))) return new VerificationResult(false, ErrInvalidSignature(expectedIssuerPub, signature));

    return new VerificationResult(true);
}