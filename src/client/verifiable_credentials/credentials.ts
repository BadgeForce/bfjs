import { getTemplateAddress, FAMILY_NAME, FAMILY_VERSION } from './namespace';
import { Method, RPCRequest } from '../../generated/templates_payload_pb';
import { TransactionHeader } from '../../sawtooth-sdk-ts/transaction_pb';
import { createHash } from 'crypto';
import { RestClient } from '../rest_client';
import { TransactionData } from '../transaction_utils';
import { Signer } from '../../signer';
import { Config } from '../config';

export class TemplateDelParams {
  address : string;
  constructor(public name : string, public owner : string, public version : string) {
    this.address = getTemplateAddress(owner, name, version);
  }
}

export class CredentialTemplatesClient extends RestClient {
  constructor(config : Config) {
    super(config);
  }

  create(name : string, owner : string, version : string, data : string) : Promise < Object > {
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
    const transactionData = new TransactionData(transactionHeader, req);
    return super.submitSingleBatch(transactionData);
  }

  delete(...params : TemplateDelParams[]) : Promise < Object > {
    return this._delete(params.map(p => p.address));
  }

  _delete(addresses : string[]) : Promise < Object > {
    const req: RPCRequest = new RPCRequest();
    req.setMethod(Method.DELETE);
    req.setParams(JSON.stringify({ addresses }));
    const transactionHeader: TransactionHeader = new TransactionHeader();
    transactionHeader.setFamilyName(FAMILY_NAME);
    transactionHeader.setFamilyVersion(FAMILY_VERSION);
    transactionHeader.setInputsList(addresses);
    transactionHeader.setOutputsList(addresses);
    transactionHeader.setPayloadSha512(createHash('sha512').update(req.serializeBinary()).digest('hex'));
    const transactionData = new TransactionData(transactionHeader, req);
    return super.submitSingleBatch(transactionData);
  }
}
