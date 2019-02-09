import { createHash } from 'crypto';
import { AddressBuilder } from '../common';
import { Version } from '../generated/credential-templates/template_pb';

export const FAMILY_NAME: string = 'credential-templates';
export const FAMILY_VERSION: string = '1.0';

export const TEMPLATES_PREFIX: string = createHash('sha512')
    .update('credential:templates')
    .digest('hex')
    .substring(0, 6);

export const getTemplateAddress = (owner: string, name: string, version: Version): string => {
    const semantic_version = `${version.getMajor()}.${version.getMinor()}.${version.getPatch()}`;
    return new AddressBuilder(TEMPLATES_PREFIX)
        .append(owner, 0, 30)
        .append(name, 0, 30)
        .append(semantic_version, 0, 4)
        .build();
};
