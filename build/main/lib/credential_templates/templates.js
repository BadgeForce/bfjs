"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const namespace_1 = require("./namespace");
const templates_payload_pb_1 = require("../generated/templates_payload_pb");
const transaction_pb_1 = require("../sawtooth-sdk-ts/transaction_pb");
const crypto_1 = require("crypto");
class CredentialTemplate {
    constructor(name, owner, version, data) {
        this.name = name;
        this.owner = owner;
        this.version = version;
        this.data = data;
        this.address = "";
        this.address = namespace_1.getTemplateAddress(owner, name, version);
    }
    get stateAddress() { return this.address; }
    get jsonstr() {
        return JSON.stringify({
            name: this.name,
            owner: this.owner,
            version: this.version,
            data: this.data
        });
    }
}
exports.CredentialTemplate = CredentialTemplate;
class TemplatesTransactor {
    constructor(singerPublicKey, transactionStore) {
        this.singerPublicKey = singerPublicKey;
        this.transactionStore = transactionStore;
    }
    create(credentialTemplate) {
        const request = new templates_payload_pb_1.RPCRequest();
        request.setMethod(templates_payload_pb_1.Method.CREATE);
        request.setParams(credentialTemplate.jsonstr);
        const data = Object.freeze({
            header: this.getHeader([credentialTemplate.stateAddress], request),
            request
        });
        return this.transactionStore(data);
    }
    delete(addresses) {
        const request = new templates_payload_pb_1.RPCRequest();
        request.setMethod(templates_payload_pb_1.Method.DELETE);
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
        txHeader.setInputsList(stateAuthorization);
        txHeader.setOutputsList(stateAuthorization);
        txHeader.setPayloadSha512(crypto_1.createHash('sha512').update(request.serializeBinary()).digest('hex'));
        txHeader.setSignerPublicKey(this.singerPublicKey);
        return txHeader;
    }
}
exports.TemplatesTransactor = TemplatesTransactor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jcmVkZW50aWFsX3RlbXBsYXRlcy90ZW1wbGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEU7QUFDOUUsNEVBQXVFO0FBQ3ZFLHNFQUFzRTtBQUN0RSxtQ0FBb0M7QUFHcEMsTUFBYSxrQkFBa0I7SUFFN0IsWUFBbUIsSUFBWSxFQUFTLEtBQWEsRUFBUyxPQUFlLEVBQVMsSUFBWTtRQUEvRSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBRDFGLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyw4QkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUFJLFlBQVksS0FBYSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDO0lBRWxELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFoQkQsZ0RBZ0JDO0FBRUQsTUFBYSxtQkFBbUI7SUFDOUIsWUFBbUIsZUFBdUIsRUFBUyxnQkFBZ0Q7UUFBaEYsb0JBQWUsR0FBZixlQUFlLENBQVE7UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdDO0lBQUksQ0FBQztJQUV4RyxNQUFNLENBQUMsa0JBQXNDO1FBQzNDLE1BQU0sT0FBTyxHQUFlLElBQUksaUNBQVUsRUFBRSxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxTQUFTLENBQUMsNkJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxPQUFPLENBQUM7WUFDbEUsT0FBTztTQUNSLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBbUI7UUFDeEIsTUFBTSxPQUFPLEdBQWUsSUFBSSxpQ0FBVSxFQUFFLENBQUM7UUFDN0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyw2QkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7WUFDMUMsT0FBTztTQUNSLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7OztNQU9FO0lBQ0YsU0FBUyxDQUFDLGtCQUFpQyxFQUFFLE9BQW1CO1FBQzlELE1BQU0sUUFBUSxHQUFzQixJQUFJLGtDQUFpQixFQUFFLENBQUM7UUFDNUQsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBVyxDQUFDLENBQUM7UUFDcEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDBCQUFjLENBQUMsQ0FBQztRQUMxQyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDM0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FFRjtBQTdDRCxrREE2Q0MifQ==