"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const namespace_1 = require("./namespace");
const credentials_payload_pb_1 = require("../generated/credentials_payload_pb");
const transaction_pb_1 = require("../sawtooth-sdk-ts/transaction_pb");
const crypto_1 = require("crypto");
const credentials_pb_1 = require("../generated/credentials_pb");
class VerifiableCredential {
    constructor(name, expiration, issuedAt, recipientPub, templateOwner, templateName, templateVersion, signer) {
        const template = new credentials_pb_1.Template();
        template.setName(templateName);
        template.setOwner(templateOwner);
        template.setVersion(templateVersion);
        this._credential.setName(name);
        this._credential.setExpiration(expiration);
        this._credential.setIssuedAt(issuedAt);
        this._credential.setRecipientPublicKey(recipientPub);
        this._credential.setTemplate(template);
        this._credential.setIssuerPublicKey(signer.publickeyAsHex);
        this._credential.setSignature(signer.sign(template.serializeBinary()));
        this._address = namespace_1.getCredentialAddress(this._credential.getRecipientPublicKey(), this._credential.getIssuerPublicKey(), this.credential.getName());
    }
    get credential() { return this._credential; }
    get stateAddress() { return this._address; }
    get bytes() { return this._credential.serializeBinary(); }
}
exports.VerifiableCredential = VerifiableCredential;
class CredentialTransactor {
    constructor(singerPublicKey, transactionStore) {
        this.singerPublicKey = singerPublicKey;
        this.transactionStore = transactionStore;
    }
    issue(credential) {
        const request = new credentials_payload_pb_1.RPCRequest();
        request.setMethod(credentials_payload_pb_1.Method.ISSUE);
        request.setParams(JSON.stringify({ credential_pb: Buffer.from(credential.bytes).toString('hex') }));
        const data = Object.freeze({
            header: this.getHeader([credential.stateAddress], request),
            request
        });
        return this.transactionStore(data);
    }
    revoke(addresses) {
        const request = new credentials_payload_pb_1.RPCRequest();
        request.setMethod(credentials_payload_pb_1.Method.REVOKE);
        request.setParams(JSON.stringify({ addresses }));
        const data = Object.freeze({
            header: this.getHeader(addresses, request),
            request
        });
        return this.transactionStore(data);
    }
    /**
    * Get TransactionHeader object
    *
    * @param {*} stateAuthorization
    * @param {RPCRequest} request
    * @returns {TransactionHeader}
    * @memberof EarningsTransactor
    */
    getHeader(stateAuthorization, request) {
        const txHeader = new transaction_pb_1.TransactionHeader();
        txHeader.setFamilyName(namespace_1.FAMILY_NAME);
        txHeader.setFamilyVersion(namespace_1.FAMILY_VERSION);
        txHeader.setInputsList(stateAuthorization.map(a => a));
        txHeader.setOutputsList(stateAuthorization.map(a => a));
        txHeader.setPayloadSha512(crypto_1.createHash('sha512').update(request.serializeBinary()).digest('hex'));
        txHeader.setSignerPublicKey(this.singerPublicKey);
        return txHeader;
    }
}
exports.CredentialTransactor = CredentialTransactor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3ZlcmlmaWFibGVfY3JlZGVudGlhbHMvY3JlZGVudGlhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBZ0Y7QUFDaEYsZ0ZBQXlFO0FBQ3pFLHNFQUFzRTtBQUN0RSxtQ0FBb0M7QUFFcEMsZ0VBQW1FO0FBR25FLE1BQWEsb0JBQW9CO0lBRy9CLFlBQVksSUFBWSxFQUFFLFVBQWtCLEVBQUUsUUFBZ0IsRUFBRSxZQUFvQixFQUFFLGFBQXFCLEVBQUUsWUFBb0IsRUFBRSxlQUF1QixFQUFFLE1BQXVCO1FBQ2pMLE1BQU0sUUFBUSxHQUFHLElBQUkseUJBQVEsRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqQyxRQUFRLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FB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