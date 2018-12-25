import { createHash } from 'crypto';
import { AddressBuilder } from '../common';

export const FAMILY_NAME : string = 'verifiable-credentials';
export const FAMILY_VERSION : string = '1.0';

export const PREFIX : string = createHash('sha512')
    .update('credential:verifiable:credential')
    .digest('hex')
    .substring(0, 6);

export const getCredentialAddress = (recipient : string, issuer : string, name : string) : string => {
  return new AddressBuilder(PREFIX)
        .append(recipient, 0, 25)
        .append(issuer, 0, 25)
        .append(name, 0, 14)
        .build();
};

