import { AddressBuilder } from '../common';
import { TransactionHeader, Transaction } from '../sawtooth-sdk-ts/transaction_pb';
import { RPCRequest } from '../generated/templates_payload_pb';
import { Signer } from '../signer';
import { RPCTransaction, TransactionData } from './transaction_utils';
import { Config } from './config';
import axios from 'axios';

export class RestClient {
  constructor(public config : Config) {}
  submitSingleBatch(transactionData : TransactionData) : void {
    const rpcTransaction: RPCTransaction = new RPCTransaction(this.config.signer);
    const transaction: Transaction = new Transaction();
    transactionData
      .header
      .setBatcherPublicKey(this.config.signer.publickeyHex);
    transactionData
      .header
      .setSignerPublicKey(this.config.signer.publickeyHex);

    transaction.setHeader(transactionData.header.serializeBinary());
    transaction.setHeaderSignature(this.config.signer.sign(transactionData.header.serializeBinary()));
    transaction.setPayload(transactionData.request.serializeBinary());

    const batchListBytes: Uint8Array = rpcTransaction
      .transaction(transactionData.header, transactionData.request.serializeBinary())
      .done();
    this.submitBatchList(batchListBytes);
  }

  private submitBatchList(batchListBytes : Uint8Array) : void {
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
