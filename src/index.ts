import * as client from './lib/client';
import * as utils from './lib/common';
import * as credentials from './lib/verifiable_credentials';
import * as templates from './lib/credential_templates';

import * as CredentialsPayload_pb from './lib/generated/credentials_payload_pb';
import * as TemplatesPayload_pb from './lib/generated/templates_payload_pb';
import * as Credentials_pb from './lib/generated/credentials_pb';

export module badgeforcejs {
    export const Config = client.Config;
    export const Client = client.Client;
    export const Signer = utils.Secp256k1Signer;
    export const AddressBuilder = utils.AddressBuilder;
    export const Credentials = credentials;
    export const Templates = templates;

    export const Protos = {
        CredentialsPayload_pb,
        TemplatesPayload_pb,
        Credentials_pb
    };
}