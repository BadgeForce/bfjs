import { Secp256k1Signer, AddressBuilder } from '../common';
import { TemplatesTransactor, TEMPLATES_PREFIX } from '../credential_templates';
import { CredentialTransactor } from '../verifiable_credentials';
import { Config } from './config';
// import {Subscriber} from './events';
import { RestClient, TransactionData } from './rest';
import { Template } from '../generated/credential-templates/template_pb';

/**
 *
 *
 * @export
 * @class Client
 * @extends {RestClient}
 *
 */
export class Client extends RestClient {

  /**
   *
   *
   * @type {Config} configuration
   * @memberof Client
   */
  public readonly config: Config;

  /**
   *
   *
   * @type {TemplatesTransactor} handles template transactions
   * @memberof Client
   */
  public readonly templates: TemplatesTransactor;
  public readonly credentials: CredentialTransactor;

  public transactionList: TransactionData[] = [];

  /**
   * Creates an instance of Client.
   * @param {string} uri REST API endpoint
   * @param {string} privateKeyHex hex encoded private key string
   * @memberof Client
   */
  constructor(public readonly uri: string, public readonly privateKeyHex: string) {
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
  public putTransaction(transaction: TransactionData): Client {
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
  public async submitNextBatch(): Promise<any> {
    const transactions = this
      .transactionList
      .map(t => t);
    this.transactionList.length = 0;
    return this.submitBatches(transactions);
  }

  get signer(): Secp256k1Signer { return this.config.signer; }

  /**
   * Get all templates owned by a specific issuer
   *
   * @param {string} issuer issuer public key
   * @returns {Promise < ReadonlyArray<Template> >}
   * @memberof Client
   */
  async getTemplatesByIssuer(issuer: string): Promise<ReadonlyArray<Template>> {
    const stateAddress = new AddressBuilder(TEMPLATES_PREFIX).append(issuer, 0, 30).build();

    try {
      const results = await this.stateQuery(stateAddress);
      return results.toTemplates();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get template by name
   *
   * @param {string} name template name
   * @returns {Promise Template}
   * @memberof Client
   */
  async getTemplateByName(name: string): Promise<Template> {
    const stateAddress = new AddressBuilder("")
      .append(name, 0, 30)
      .build();
    console.log(TEMPLATES_PREFIX.padEnd(36, "0").length)
    console.log(TEMPLATES_PREFIX.padEnd(36, "0"))
    try {
      const results = await this.stateQuery(stateAddress);
      return results.toTemplates()[0];
    } catch (error) {
      throw error;
    }
  }
};

// 37e3be15cc7e0c0df46ded3d6a959c1ef8173dd88fa948027e93dcb027300e5bc71091
