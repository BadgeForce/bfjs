"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credentials_pb_1 = require("../generated/credentials_pb");
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
     * get state query data how it was passed
     *
     * @returns {*}
     * @memberof QueryResults
     */
    raw() { return this.data; }
}
exports.QueryResults = QueryResults;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRUFBdUQ7QUFFdkQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFlBQVk7SUFFdkIsWUFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRWpDOzs7OztPQUtHO0lBQ0gsYUFBYTtRQUNYLE9BQU8sSUFBSTthQUNSLElBQUk7YUFDSixJQUFJO2FBQ0osR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1gsTUFBTSxLQUFLLEdBQWdCLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdFLE9BQU8sMkJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEdBQUcsS0FBVSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO0NBQ2hDO0FBM0JELG9DQTJCQztBQUFBLENBQUMifQ==