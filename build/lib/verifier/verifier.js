"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const moment = require("moment");
exports.ErrInvalidProofOfIntegrityHash = (expected, computed) => {
    return `Invalid proof of integrity hash expected: ${expected} computed: ${computed}`;
};
exports.ErrInvalidSignature = (testPub, testSig) => {
    return `Signature verification failed publickey used: ${testPub} signature: ${testSig}`;
};
exports.ErrIssuerPubMismatch = (expected, provided) => {
    return `Publickey of issuer mismatch expected: ${expected} provided: ${provided}`;
};
exports.ErrExpired = (expiredAt) => {
    return `Expiration date passed expiration: ${moment(new Date(expiredAt)).format('L')}`;
};
/**
 *  Contains boolean denoting verification success and optional error message if one arises
 *
 * @export
 * @class VerificationResult
 */
class VerificationResult {
    constructor(isVerified, errMsg) {
        this.isVerified = isVerified;
        this.errMsg = errMsg;
    }
    get error() {
        return new Error(this.errMsg || "");
    }
    get ok() {
        return this.isVerified;
    }
}
exports.VerificationResult = VerificationResult;
/**
 *  Verifies template data and ownership
 * @param {Template} template template to verify
 * @param {string} issuerPub public key of the issuer who owns this template
 * @export
 */
exports.verifyTemplate = (template, issuerPub) => {
    const expectedPOI = common_1.computePOIHash(template.getData());
    const actualPOI = template.getVerification().getProofOfIntegrityHash();
    if (expectedPOI != actualPOI)
        return new VerificationResult(false, exports.ErrInvalidProofOfIntegrityHash(expectedPOI, actualPOI));
    const signature = template.getVerification().getSignature();
    const expectedIssuerPub = template.getData().getIssuerPub();
    if (expectedIssuerPub != issuerPub)
        return new VerificationResult(false, exports.ErrIssuerPubMismatch(expectedIssuerPub, issuerPub));
    if (!common_1.verifySignature(signature, Buffer.from(expectedPOI, 'hex'), Buffer.from(expectedIssuerPub, 'hex')))
        return new VerificationResult(false, exports.ErrInvalidSignature(expectedIssuerPub, signature));
    return new VerificationResult(true);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3ZlcmlmaWVyL3ZlcmlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTREO0FBQzVELGlDQUFrQztBQUVyQixRQUFBLDhCQUE4QixHQUFHLENBQUMsUUFBZ0IsRUFBRSxRQUFnQixFQUFVLEVBQUU7SUFDekYsT0FBTyw2Q0FBNkMsUUFBUSxjQUFjLFFBQVEsRUFBRSxDQUFDO0FBQ3pGLENBQUMsQ0FBQTtBQUVZLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxPQUFlLEVBQUUsT0FBZSxFQUFVLEVBQUU7SUFDNUUsT0FBTyxpREFBaUQsT0FBTyxlQUFlLE9BQU8sRUFBRSxDQUFDO0FBQzVGLENBQUMsQ0FBQTtBQUVZLFFBQUEsb0JBQW9CLEdBQUcsQ0FBQyxRQUFnQixFQUFFLFFBQWdCLEVBQVUsRUFBRTtJQUMvRSxPQUFPLDBDQUEwQyxRQUFRLGNBQWMsUUFBUSxFQUFFLENBQUM7QUFDdEYsQ0FBQyxDQUFBO0FBRVksUUFBQSxVQUFVLEdBQUcsQ0FBQyxTQUFpQixFQUFVLEVBQUU7SUFDcEQsT0FBTyxzQ0FBc0MsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDM0YsQ0FBQyxDQUFBO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFhLGtCQUFrQjtJQUMzQixZQUFtQixVQUFtQixFQUFTLE1BQWU7UUFBM0MsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUFTLFdBQU0sR0FBTixNQUFNLENBQVM7SUFBRyxDQUFDO0lBRWxFLElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQVZELGdEQVVDO0FBRUQ7Ozs7O0dBS0c7QUFDVSxRQUFBLGNBQWMsR0FBRyxDQUFDLFFBQWtCLEVBQUUsU0FBaUIsRUFBc0IsRUFBRTtJQUN4RixNQUFNLFdBQVcsR0FBVyx1QkFBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELE1BQU0sU0FBUyxHQUFXLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQy9FLElBQUcsV0FBVyxJQUFJLFNBQVM7UUFBRSxPQUFPLElBQUksa0JBQWtCLENBQUMsS0FBSyxFQUFFLHNDQUE4QixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRTFILE1BQU0sU0FBUyxHQUFXLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwRSxNQUFNLGlCQUFpQixHQUFXLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwRSxJQUFHLGlCQUFpQixJQUFJLFNBQVM7UUFBRSxPQUFPLElBQUksa0JBQWtCLENBQUMsS0FBSyxFQUFFLDRCQUFvQixDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDNUgsSUFBRyxDQUFDLHdCQUFlLENBQUMsU0FBUyxFQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUFFLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsMkJBQW1CLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUVwSSxPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFBIn0=