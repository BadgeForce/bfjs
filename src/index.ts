import * as client from './lib/client';
import * as utils from './lib/common';
import * as credentials from './lib/verifiable_credentials';
import * as templates from './lib/credential_templates';
import * as verifier from './lib/verifier';

import * as Credentials_pb from './lib/generated/credentials_pb';
import * as CredentialsPayload_pb from './lib/generated/credentials_payload_pb';

import * as Template_pb from './lib/generated/credential-templates/template_pb';
import * as TemplatePayload_pb from './lib/generated/credential-templates/payload_pb';
import * as TemplatesTransactionRecpts_pb from './lib/generated/credential-templates/transaction_receipts_pb';

import * as Reader from './lib/file_reader';

export module badgeforcejs {
    export const Config = client.Config;
    export const Client = client.Client;
    export const Signer = utils.Secp256k1Signer;
    export const AddressBuilder = utils.AddressBuilder;
    export const Credentials = credentials;
    export const Templates = templates;
    export const Verifier = verifier;

    export const JSONValidator = Reader.Validator;
    export const JSONFileReader = Reader.FileReader;

    export const Protos = {
        CredentialsPayload_pb,
        Credentials_pb, 
        CredentialTemplates: {Template_pb, TemplatePayload_pb, TemplatesTransactionRecpts_pb}
    };
}
