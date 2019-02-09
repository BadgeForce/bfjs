"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const namespace_1 = require("./namespace");
const template_pb_1 = require("../generated/credential-templates/template_pb");
const payload_pb_1 = require("../generated/credential-templates/payload_pb");
const transaction_pb_1 = require("../sawtooth-sdk-ts/transaction_pb");
const crypto_1 = require("crypto");
const common_1 = require("../common");
class CredentialTemplateVersion {
    constructor(major, minor, patch) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        this.version = new template_pb_1.Version();
        this.version.setMajor(major);
        this.version.setMinor(minor);
        this.version.setPatch(patch);
    }
    getVersion() {
        return this.version;
    }
}
exports.CredentialTemplateVersion = CredentialTemplateVersion;
class CredentialTemplate {
    constructor(issuer, name, description, type, version) {
        this.issuer = issuer;
        this.name = name;
        this.description = description;
        this.type = type;
        this.version = version;
        this.address = "";
        this.credTemplate = new template_pb_1.Template();
        const issuerPub = issuer.publickeyAsHex;
        this.address = namespace_1.getTemplateAddress(issuerPub, name, version.getVersion());
        const data = new template_pb_1.Data();
        data.setVersion(version.getVersion());
        data.setCreatedAt(Date.now());
        data.setType(type);
        data.setDescription(description);
        data.setName(name);
        data.setIssuerPub(issuerPub);
        const poiHash = common_1.computePOIHash(data);
        const sig = issuer.sign(new Uint8Array(Buffer.from(poiHash, 'hex')));
        const verification = new template_pb_1.Verification();
        verification.setProofOfIntegrityHash(poiHash);
        verification.setSignature(sig);
        this.credTemplate.setData(data);
        this.credTemplate.setVerification(verification);
    }
    get stateAddress() { return this.address; }
    get template() { return this.credTemplate; }
}
exports.CredentialTemplate = CredentialTemplate;
class TemplatesTransactor {
    constructor(singerPublicKey, transactionStore) {
        this.singerPublicKey = singerPublicKey;
        this.transactionStore = transactionStore;
    }
    create(credentialTemplate) {
        const create = new payload_pb_1.Create();
        create.setParams(credentialTemplate.template);
        const request = new payload_pb_1.RPCRequest();
        request.setCreate(create);
        const data = Object.freeze({
            header: this.getHeader([credentialTemplate.stateAddress], request),
            request
        });
        return this.transactionStore(data);
    }
    delete(addresses) {
        const del = new payload_pb_1.Delete();
        del.setAddressesList(addresses);
        const request = new payload_pb_1.RPCRequest();
        request.setDelete(del);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jcmVkZW50aWFsX3RlbXBsYXRlcy90ZW1wbGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEU7QUFDOUUsK0VBQXNHO0FBQ3RHLDZFQUEwRjtBQUMxRixzRUFBc0U7QUFDdEUsbUNBQW9DO0FBRXBDLHNDQUE0RDtBQUU1RCxNQUFhLHlCQUF5QjtJQUVwQyxZQUFtQixLQUFhLEVBQVMsS0FBYSxFQUFTLEtBQWE7UUFBekQsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRHBFLFlBQU8sR0FBWSxJQUFJLHFCQUFPLEVBQUUsQ0FBQztRQUV2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFYRCw4REFXQztBQUVELE1BQWEsa0JBQWtCO0lBSTdCLFlBQW1CLE1BQXVCLEVBQVMsSUFBWSxFQUFTLFdBQW1CLEVBQVMsSUFBWSxFQUFTLE9BQWtDO1FBQXhJLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQTJCO1FBSG5KLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsaUJBQVksR0FBYSxJQUFJLHNCQUFRLEVBQUUsQ0FBQztRQUc5QyxNQUFN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