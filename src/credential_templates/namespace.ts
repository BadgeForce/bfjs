import { createHash } from 'crypto';
import { AddressBuilder } from '../common';

export const FAMILY_NAME : string = 'credential-templates';
export const FAMILY_VERSION : string = '1.0';

export const PREFIX : string = createHash('sha512')
    .update('credential:templates')
    .digest('hex')
    .substring(0, 6);

export const getTemplateAddress = (owner : string, name : string, version : string) : string => {
  return new AddressBuilder(PREFIX)
        .append(owner, 0, 30)
        .append(name, 0, 30)
        .append(version, 0, 4)
        .build();
};
