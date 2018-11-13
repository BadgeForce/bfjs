import { getTemplateAddress, FAMILY_NAME, FAMILY_VERSION } from './namespace';
import { Method, RPCRequest } from '../generated/templates_payload_pb';
import { TransactionHeader } from '../sawtooth-sdk-ts/transaction/transaction_pb';
import { createHash } from 'crypto';

export class CredentialTemplateTransactions {
  static create(name : string, owner : string, version : string, data : string, callback : Function) : void {
    const template: Object = {
      name,
      owner,
      version,
      data,
    };
    const address: string = getTemplateAddress(owner, name, version);
    const req: RPCRequest = new RPCRequest();
    req.setMethod(Method.CREATE);
    req.setParams(JSON.stringify(template));

    const transactionHeader: TransactionHeader = new TransactionHeader();
    transactionHeader.setFamilyName(FAMILY_NAME);
    transactionHeader.setFamilyVersion(FAMILY_VERSION);
    transactionHeader.addInputs(address);
    transactionHeader.addOutputs(address);
    transactionHeader.setPayloadSha512(createHash('sha512').update(req.serializeBinary()).digest('hex'));
    callback(transactionHeader, req);
  }

  static delete(addresses : string[], callback : Function) : void {
    const req: RPCRequest = new RPCRequest();
    req.setMethod(Method.DELETE);
    req.setParams(JSON.stringify({ addresses }));
    const transactionHeader: TransactionHeader = new TransactionHeader();
    transactionHeader.setFamilyName(FAMILY_NAME);
    transactionHeader.setFamilyVersion(FAMILY_VERSION);
    transactionHeader.setInputsList(addresses);
    transactionHeader.setOutputsList(addresses);
    transactionHeader.setPayloadSha512(createHash('sha512').update(req.serializeBinary()).digest('hex'));
    callback(transactionHeader, req);
  }
}
