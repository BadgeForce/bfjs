import { RestClient } from './rest_client';
import { TransactionData } from './transaction_utils';
import { CredentialTemplatesClient } from './credential_templates';
import { Config } from './config';

class Client {
  credentialTemplates : CredentialTemplatesClient;
  constructor(public config : Config) {
    this.credentialTemplates = new CredentialTemplatesClient(config);
  }
}

export { RestClient, TransactionData, Config, Client };
