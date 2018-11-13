import { CredentialTemplates } from '../credential_templates';
import { AddressBuilder } from '../common';
import { TransactionHeader, Transaction } from '../sawtooth-sdk-ts/transaction/transaction_pb';
import { RPCRequest } from '../generated/templates_payload_pb';
import { Signer } from './signer';
import { RPCTransaction } from './transaction_utils';
import axios from 'axios';

export class BadgeForceClient {
  signer : Signer;

  submitSingleBatch(transactionHeader : TransactionHeader, request : RPCRequest) : void {
    const rpcTransaction: RPCTransaction = new RPCTransaction(this.signer);
    const transaction: Transaction = new Transaction();

    transactionHeader.setBatcherPublicKey(this.signer.publickeyHex);
    transactionHeader.setSignerPublicKey(this.signer.publickeyHex);

    transaction.setHeader(transactionHeader.serializeBinary());
    transaction.setHeaderSignature(this.signer.sign(transactionHeader.serializeBinary()));
    transaction.setPayload(request.serializeBinary());

    const batchListBytes: Uint8Array = rpcTransaction
            .transaction(transactionHeader, request.serializeBinary())
            .done();
    this.submit(batchListBytes);
  }

  submit(batchListBytes : Uint8Array) : void {
    const request: Object = {
      method: 'POST',
      url: 'http://127.0.0.1:8008/batches',
      data: batchListBytes,
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    };

    const response = axios(request);
  }
}
