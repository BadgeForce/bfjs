import {Secp256k1Signer} from '../common';
import {TemplatesTransactor} from '../credential_templates';
import { CredentialTransactor } from '../verifiable_credentials';
import {Config} from './config';
// import {Subscriber} from './events';
import {RestClient, TransactionData} from './rest';

/**
 *
 *
 * @export
 * @class Client
 * @extends {RestClient}
 */
export class Client extends RestClient {

  /**
   *
   *
   * @type {Config} configuration
   * @memberof Client
   */
  public readonly config : Config;
  /**
   *
   *
   * @type {TemplatesTransactor} handles template transactions
   * @memberof Client
   */
  public readonly templates : TemplatesTransactor;
  public readonly credentials : CredentialTransactor;

  public transactionList : TransactionData[] = [];

  /**
   * Creates an instance of Client.
   * @param {string} uri REST API endpoint
   * @param {string} privateKeyHex hex encoded private key string
   * @memberof Client
   */
  constructor(public readonly uri : string, public readonly privateKeyHex : string) {
    super(uri, privateKeyHex);
    this.config = new Config(uri, privateKeyHex);
    this.templates = new TemplatesTransactor(this.config.signer.publickeyAsHex, this.putTransaction.bind(this));
    this.credentials = new CredentialTransactor(this.config.signer.publickeyAsHex, this.putTransaction.bind(this));
  }

  /**
   *
   *
   * @param {TransactionData} transaction
   * @returns {Client}
   * @memberof Client
   */
  public putTransaction(transaction : TransactionData) : Client {
    this
      .transactionList
      .push(transaction);
    return this;
  }

  /**
   * Submits all transactions currently in this.transactionList to the chain in a single batch. Transaction list is then emptied.
   *
   * @returns {Promise < any >}
   * @memberof Client
   */
  public async submitNextBatch() : Promise < any > {
    const transactions = this
      .transactionList
      .map(t => t);
    this.transactionList.length = 0;
    return this.submitBatches(transactions);
  }

  get signer() : Secp256k1Signer {return this.config.signer;}
};