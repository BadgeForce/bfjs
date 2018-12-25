import { getCredentialAddress, FAMILY_NAME, FAMILY_VERSION } from './namespace';
import { Method, RPCRequest } from '../generated/credentials_payload_pb';
import { TransactionHeader } from '../sawtooth-sdk-ts/transaction_pb';
import { createHash } from 'crypto';
import { TransactionData, Client } from '../client';
import { Credential, Template } from '../generated/credentials_pb';
import { Secp256k1Signer } from '../common';

export class VerifiableCredential {
  private _credential: Credential;
  private _address: string;
  constructor(name: string, expiration: number, issuedAt: number, recipientPub: string, templateOwner: string, templateName: string, templateVersion: string, signer: Secp256k1Signer) {
    const template = new Template();
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

    this._address = getCredentialAddress(this._credential.getRecipientPublicKey(), this._credential.getIssuerPublicKey(), this.credential.getName());
  }

  get credential(): Credential { return this._credential }
  get stateAddress(): string { return this._address }
  get bytes(): Uint8Array { return this._credential.serializeBinary() }
}

export class CredentialTransactor {
  constructor(public singerPublicKey: string, public transactionStore: (t: TransactionData) => Client) { }

  issue(credential: VerifiableCredential): Client {

    const request: RPCRequest = new RPCRequest();
    request.setMethod(Method.ISSUE);
    request.setParams(JSON.stringify({ credential_pb: Buffer.from(credential.bytes).toString('hex') }));

    const data = Object.freeze({
      header: this.getHeader(credential.stateAddress, request),
      request
    });

    return this.transactionStore(data);
  }

  revoke(addresses: string[]): Client {
    const request: RPCRequest = new RPCRequest();
    request.setMethod(Method.REVOKE);
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
  getHeader(stateAuthorization: any, request: RPCRequest): TransactionHeader {
    const txHeader: TransactionHeader = new TransactionHeader();
    txHeader.setFamilyName(FAMILY_NAME);
    txHeader.setFamilyVersion(FAMILY_VERSION);
    txHeader.setInputsList(stateAuthorization.map(a => a));
    txHeader.setOutputsList(stateAuthorization.map(a => a));
    txHeader.setPayloadSha512(createHash('sha512').update(request.serializeBinary()).digest('hex'));
    txHeader.setSignerPublicKey(this.singerPublicKey);
    return txHeader;
  }

}
