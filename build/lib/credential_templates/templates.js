"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const namespace_1 = require("./namespace");
const template_pb_1 = require("../generated/credential-templates/template_pb");
const payload_pb_1 = require("../generated/credential-templates/payload_pb");
const transaction_pb_1 = require("../sawtooth-sdk-ts/transaction_pb");
const crypto_1 = require("crypto");
const common_1 = require("../common");
const struct_pb_1 = require("google-protobuf/google/protobuf/struct_pb");
const moment = require('moment');
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
    constructor(issuer, name, description, type, version, coreData) {
        this.issuer = issuer;
        this.name = name;
        this.description = description;
        this.type = type;
        this.version = version;
        this.coreData = coreData;
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
        data.setCoreData(struct_pb_1.Struct.fromJavaScript(coreData));
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
    static toJSON(credTemplate) {
        const data = credTemplate.getData();
        const json = {
            "state-address": namespace_1.getTemplateAddress(credTemplate.getData().getIssuerPub(), data.getName(), credTemplate.getData().getVersion()),
            "name": data.getName(),
            "issuer-publickey": data.getIssuerPub(),
            "description": data.getDescription(),
            "type": data.getType(),
            "created-at": moment(new Date(data.getCreatedAt())).format('L'),
            'version': `${data.getVersion().getMajor()}.${data.getVersion().getMinor()}.${data.getVersion().getPatch()}`,
        };
        data.getCoreData().getFieldsMap().forEach((entry, key) => {
            json[key] = common_1.extractValueType(entry);
        });
        return json;
    }
    ;
}
exports.CredentialTemplate = CredentialTemplate;
/**
 * Handles Credential Template Transactions
 *
 * @export
 * @class TemplatesTransactor
 *
 */
class TemplatesTransactor {
    constructor(singerPublicKey, transactionStore) {
        this.singerPublicKey = singerPublicKey;
        this.transactionStore = transactionStore;
    }
    /**
     * Creates a transaction to create a new Credential Template, transaction can be submitted with next batch.
     * @memberof Client
     * @param credentialTemplate template to create
     * ### Example (commonjs)
     * ```js
     * const { badgeforcejs } = require('bfjs');
     *
     * const client = new badgeforcejs.Client('http://127.0.0.1:8008',
     *  "e3ddee618d8a8864481e71021e42ed46c3ab410ab1ad7cdf0ff31f6d61739275");
     *
     * const templateVersion = new badgeforcejs.Templates.CredentialTemplateVersion(1, 0, 0);
     * const template = new badgeforcejs.Templates.CredentialTemplate(client.signer, name, description, type, templateVersion);
     *
     * client.templates.create(template).submitNextBatch().then(console.log).catch(console.log);
     * // =>
     * ```
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jcmVkZW50aWFsX3RlbXBsYXRlcy90ZW1wbGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEU7QUFDOUUsK0VBQXNHO0FBQ3RHLDZFQUEwRjtBQUMxRixzRUFBc0U7QUFDdEUsbUNBQW9DO0FBRXBDLHNDQUE0RTtBQUM1RSx5RUFBd0U7QUFDeEUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLE1BQWEseUJBQXlCO0lBRXBDLFlBQW1CLEtBQWEsRUFBUyxLQUFhLEVBQVMsS0FBYTtRQUF6RCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFEcEUsWUFBTyxHQUFZLElBQUkscUJBQU8sRUFBRSxDQUFDO1FBRXZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQVhELDhEQVdDO0FBRUQsTUFBYSxrQkFBa0I7SUFJN0IsWUFBbUIsTUFBdUIsRUFBUyxJQUFZLEVBQVMsV0FBbUIsRUFBUyxJQUFZLEVBQVMsT0FBa0MsRUFBUyxRQUFlO1FBQWhLLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQTJCO1FBQVMsYUFB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