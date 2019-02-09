import { getTemplateAddress, FAMILY_NAME, FAMILY_VERSION } from './namespace';
import { Version, Template, Data, Verification } from '../generated/credential-templates/template_pb';
import { RPCRequest, Create, Delete } from '../generated/credential-templates/payload_pb';
import { TransactionHeader } from '../sawtooth-sdk-ts/transaction_pb';
import { createHash } from 'crypto';
import { TransactionData, Client } from '../client';
import { Secp256k1Signer, computePOIHash } from '../common';

export class CredentialTemplateVersion {
  private version: Version = new Version();
  constructor(public major: number, public minor: number, public patch: number) {
    this.version.setMajor(major);
    this.version.setMinor(minor);
    this.version.setPatch(patch);
  }

  getVersion(): Version {
    return this.version;
  }
}

export class CredentialTemplate {
  private address: string = "";
  private credTemplate: Template = new Template();

  constructor(public issuer: Secp256k1Signer, public name: string, public description: string, public type: string, public version: CredentialTemplateVersion) {
    const issuerPub = issuer.publickeyAsHex;

    this.address = getTemplateAddress(issuerPub, name, version.getVersion());

    const data: Data = new Data();
    data.setVersion(version.getVersion());
    data.setCreatedAt(Date.now());
    data.setType(type);
    data.setDescription(description);
    data.setName(name);
    data.setIssuerPub(issuerPub);

    const poiHash = computePOIHash(data);
    const sig = issuer.sign(new Uint8Array(Buffer.from(poiHash, 'hex')));
    const verification: Verification = new Verification();
    verification.setProofOfIntegrityHash(poiHash);
    verification.setSignature(sig);

    this.credTemplate.setData(data);
    this.credTemplate.setVerification(verification);
  }

  get stateAddress(): string { return this.address }

  get template(): Template { return this.credTemplate }

}

export class TemplatesTransactor {
  constructor(public singerPublicKey: string, public transactionStore: (t: TransactionData) => Client) { }

  create(credentialTemplate: CredentialTemplate): Client {
    const create: Create = new Create();
    create.setParams(credentialTemplate.template);
    
    const request: RPCRequest = new RPCRequest();
    request.setCreate(create);

    const data = Object.freeze({
      header: this.getHeader([credentialTemplate.stateAddress], request),
      request
    });
    return this.transactionStore(data);
  }

  delete(addresses: string[]): Client {
    const del: Delete = new Delete();
    del.setAddressesList(addresses);

    const request: RPCRequest = new RPCRequest();
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
  getHeader(stateAuthorization: Array<string>, request: RPCRequest): TransactionHeader {
    const txHeader: TransactionHeader = new TransactionHeader();
    txHeader.setFamilyName(FAMILY_NAME);
    txHeader.setFamilyVersion(FAMILY_VERSION);
    txHeader.setInputsList(stateAuthorization);
    txHeader.setOutputsList(stateAuthorization);
    txHeader.setPayloadSha512(createHash('sha512').update(request.serializeBinary()).digest('hex'));
    txHeader.setSignerPublicKey(this.singerPublicKey);
    return txHeader;
  }

}
