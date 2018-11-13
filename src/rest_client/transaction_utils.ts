// tslint:disable-next-line:max-line-length
import { TransactionList, Transaction, TransactionHeader } from '../sawtooth-sdk-ts/transaction/transaction_pb';
import { BatchList, BatchHeader, Batch } from '../sawtooth-sdk-ts/batch/batch_pb';
import { Signer } from './signer';

export class RPCTransaction {
  transactions : TransactionList;
  batches : BatchList;
  signer : Signer;

  constructor(signer : Signer) {
    this.signer = signer;
  }

    // tslint:disable-next-line:max-line-length
  transaction(transactionHeader : TransactionHeader, transactionPayload : Uint8Array) : RPCTransaction {
    const signature = this
            .signer
            .sign(transactionHeader.serializeBinary());

    const transaction: Transaction = new Transaction();
    transaction.setHeader(transactionHeader.serializeBinary());
    transaction.setHeaderSignature(signature);
    transaction.setPayload(transactionPayload);

    this
            .transactions
            .addTransactions(transaction);
    return this;
  }

  done() : Uint8Array {
    const batchHeader: BatchHeader = new BatchHeader();

    batchHeader.setSignerPublicKey(this.signer.publickeyHex);
    const transactionIDS: string[] = this
            .transactions
            .getTransactionsList()
            .map(t => t.getHeaderSignature());
    batchHeader.setTransactionIdsList(transactionIDS);

    const signature: string = this
            .signer
            .sign(batchHeader.serializeBinary());
    const batch: Batch = new Batch();
    batch.addTransactions(this.transactions);
    batch.setHeader(batchHeader.serializeBinary());
    batch.setHeaderSignature(signature);

    const batchList: BatchList = new BatchList();
    batchList.addBatches(batch);
    return batchList.serializeBinary();
  }
}
