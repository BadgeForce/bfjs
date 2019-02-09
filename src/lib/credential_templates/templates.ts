import { getTemplateAddress, FAMILY_NAME, FAMILY_VERSION } from './namespace';
import { Method, RPCRequest } from '../generated/templates_payload_pb';
import { TransactionHeader } from '../sawtooth-sdk-ts/transaction_pb';
import { createHash } from 'crypto';
import { TransactionData, Client } from '../client';

export class CredentialTemplate {
  private address: string = "";
  constructor(public name: string, public owner: string, public version: string, public data: string) {
    this.address = getTemplateAddress(owner, name, version);
  }

  get stateAddress(): string { return this.address }

  get jsonstr(): string {
    return JSON.stringify({
      name: this.name,
      owner: this.owner,
      version: this.version,
      data: this.data
    });
  }
}

export class TemplatesTransactor {
  constructor(public singerPublicKey: string, public transactionStore: (t: TransactionData) => Client) { }

  create(credentialTemplate: CredentialTemplate): Client {
    const request: RPCRequest = new RPCRequest();
    request.setMethod(Method.CREATE);
    request.setParams(credentialTemplate.jsonstr);
    const data = Object.freeze({
      header: this.getHeader([credentialTemplate.stateAddress], request),
      request
    });
    return this.transactionStore(data);
  }

  delete(addresses: string[]): Client {
    const request: RPCRequest = new RPCRequest();
    request.setMethod(Method.DELETE);
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
