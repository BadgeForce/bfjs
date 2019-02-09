"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credentials_pb_1 = require("../generated/credentials_pb");
const template_pb_1 = require("../generated/credential-templates/template_pb");
/**
 *  Wrapper class for state query responses that has deserialization utility methods
 *
 * @export
 * @class QueryResults
 */
class QueryResults {
    constructor(data) {
        this.data = data;
    }
    /**
     * Deserialize state query results into an array of credentials
     *
     * @returns {ReadonlyArray < Credential >}
     * @memberof QueryResults
     */
    toCredentials() {
        return this
            .data
            .data
            .map(entry => {
            const bytes = new Uint8Array(Buffer.from(entry.data, 'base64'));
            return credentials_pb_1.Credential.deserializeBinary(bytes);
        });
    }
    /**
   * Deserialize state query results into an array of templates
   *
   * @returns {ReadonlyArray < Template >}
   * @memberof QueryResults
   */
    toTemplates() {
        return this
            .data
            .data
            .map(entry => {
            const bytes = new Uint8Array(Buffer.from(entry.data, 'base64'));
            return template_pb_1.Template.deserializeBinary(bytes);
        });
    }
    /**
     * get state query data how it was passed
     *
     * @returns {*}
     * @memberof QueryResults
     */
    raw() { return this.data; }
}
exports.QueryResults = QueryResults;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRUFBeUQ7QUFDekQsK0VBQXlFO0FBRXpFOzs7OztHQUtHO0FBQ0gsTUFBYSxZQUFZO0lBRXZCLFlBQW1CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUksQ0FBQztJQUVqQzs7Ozs7T0FLRztJQUNILGFBQWE7UUFDWCxPQUFPLElBQUk7YUFDUixJQUFJO2FBQ0osSUFBSTthQUNKLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNYLE1BQU0sS0FBSyxHQUFlLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sMkJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7S0FLQztJQUNELFdBQVc7UUFDVCxPQUFPLElBQUk7YUFDUixJQUFJO2FBQ0osSUFBSTthQUNKLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNYLE1BQU0sS0FBSyxHQUFlLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sc0JBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEdBQUcsS0FBVSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQ2pDO0FBM0NELG9DQTJDQztBQUFBLENBQUMifQ==