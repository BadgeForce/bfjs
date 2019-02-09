import { Credential } from '../generated/credentials_pb';
import { Template } from '../generated/credential-templates/template_pb';

/**
 *  Wrapper class for state query responses that has deserialization utility methods
 *
 * @export
 * @class QueryResults
 */
export class QueryResults {

  constructor(public data: any) { }

  /**
   * Deserialize state query results into an array of credentials
   *
   * @returns {ReadonlyArray < Credential >}
   * @memberof QueryResults
   */
  toCredentials(): ReadonlyArray<Credential> {
    return this
      .data
      .data
      .map(entry => {
        const bytes: Uint8Array = new Uint8Array(Buffer.from(entry.data, 'base64'));
        return Credential.deserializeBinary(bytes);
      });
  }

  /**
 * Deserialize state query results into an array of templates
 *
 * @returns {ReadonlyArray < Template >}
 * @memberof QueryResults
 */
  toTemplates(): ReadonlyArray<Template> {
    return this
      .data
      .data
      .map(entry => {
        const bytes: Uint8Array = new Uint8Array(Buffer.from(entry.data, 'base64'));
        return Template.deserializeBinary(bytes);
      });
  }

  /**
   * get state query data how it was passed
   *
   * @returns {*}
   * @memberof QueryResults
   */
  raw(): any { return this.data; }
};