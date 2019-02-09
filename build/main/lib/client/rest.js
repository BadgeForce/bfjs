"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("superagent"));
const batch_pb_1 = require("../sawtooth-sdk-ts/batch_pb");
const transaction_pb_1 = require("../sawtooth-sdk-ts/transaction_pb");
const config_1 = require("./config");
const serializer_1 = require("./serializer");
/**
 *
 *
 * @export
 * @class RestEndpoints
 */
class RestEndpoints {
    /**
     *Creates an instance of RestEndpoints.
     * @param {string} uri uri to the REST API
     * @memberof RestEndpoints
     */
    constructor(uri) {
        this.uri = uri;
        this.batches = `${uri}/batches`,
            this.state = `${uri}/state`;
    }
}
exports.RestEndpoints = RestEndpoints;
/**
 *
 *
 * @export
 * @class TransactionData
 */
class TransactionData {
    /**
     *  Creates an instance of TransactionData.
     * @param {TransactionHeader} header transaction header ready for signing and submission
     * @param {RPCRequest} request  rpc request ready for signing and submission
     * @memberof TransactionData
     */
    constructor(header, request) {
        this.header = header;
        this.request = request;
    }
}
exports.TransactionData = TransactionData;
/**
 * Create a new RestClient
 *
 * ### Example (es imports)
 * ```js
 * import { sha256 } from 'typescript-starter'
 * sha256('test')
 * // => '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
 * ```
 *
 * @export
 * @class TransactionData
 */
class RestClient {
    /**
     *  Creates an instance of RestClient.
     * @param {ClientConfig} config
     * @memberof RestClient
     */
    constructor(uri, privateKeyHex) {
        this.uri = uri;
        this.privateKeyHex = privateKeyHex;
        this.HEADERS = {
            applicationJSON: 'application/json',
            applicationOctetStream: 'application/octet-stream',
            contentLength: 'Content-Length',
            contentType: 'Content-Type'
        };
        this.endpoints = new RestEndpoints(uri);
        this.config = new config_1.Config(uri, privateKeyHex);
    }
    /**
     *  Submits an array of transactions as a batch the the chain
     *
     * @param {ReadonlyArray < TransactionData >} transactionData
     * @returns {Promise < any >}
     * @memberof RestClient
     */
    async submitBatches(transactionData) {
        try {
            const batchData = transactionData.map(data => {
                data
                    .header
                    .setBatcherPublicKey(this.config.signer.publickeyAsHex);
                const signature = this
                    .config
                    .signer
                    .sign(data.header.serializeBinary());
                const transaction = new transaction_pb_1.Transaction();
                transaction.setHeader(data.header.serializeBinary());
                transaction.setHeaderSignature(signature);
                transaction.setPayload(data.request.serializeBinary());
                return transaction;
            });
            const batchHeader = new batch_pb_1.BatchHeader();
            batchHeader.setTransactionIdsList(batchData.map(transaction => transaction.getHeaderSignature()));
            batchHeader.setSignerPublicKey(this.config.signer.publickeyAsHex);
            const batchHeaderSig = this
                .config
                .signer
                .sign(batchHeader.serializeBinary());
            const batch = new batch_pb_1.Batch();
            batch.setHeader(batchHeader.serializeBinary());
            batch.setHeaderSignature(batchHeaderSig);
            batch.setTransactionsList(batchData.map(transaction => transaction));
            const batchList = new batch_pb_1.BatchList();
            batchList.setBatchesList([batch]);
            return await this.submitBatchList(batchList);
        }
        catch (error) {
            return error;
        }
    }
    /**
     * Query the chain state
     *
     * @param {string} address state address for the query
     * @returns {Promise < any >}
     * @memberof RestClient
     */
    async stateQuery(address) {
        try {
            const response = await request
                .get(this.endpoints.state)
                .ok(res => res.status < 300)
                .set(this.HEADERS.contentType, this.HEADERS.applicationJSON)
                .query({ address });
            return new serializer_1.QueryResults(response.body);
        }
        catch (error) {
            throw error.response
                ? new Error(error.response.text)
                : error;
        }
    }
    /**
     * Submit a list of batches to the chain
     *
     * @param {BatchList} list
     * @returns {Promise < any >}
     * @memberof RestClient
     */
    async submitBatchList(list) {
        try {
            const data = list.serializeBinary();
            const response = await request
                .post(this.endpoints.batches)
                .ok(res => res.status < 300)
                .set(this.HEADERS.contentType, this.HEADERS.applicationOctetStream)
                .set(this.HEADERS.contentLength, `${data.length}`)
                .send(Buffer.from(data));
            return response.body;
        }
        catch (error) {
            throw error.response
                ? new Error(error.response.text)
                : error;
        }
    }
}
exports.RestClient = RestClient;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3Jlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0RBQXNDO0FBQ3RDLDBEQUEwRTtBQUMxRSxzRUFBaUY7QUFDakYscUNBQWdDO0FBQ2hDLDZDQUEwQztBQU0xQzs7Ozs7R0FLRztBQUNILE1BQWEsYUFBYTtJQUl4Qjs7OztPQUlHO0lBQ0gsWUFBNEIsR0FBWTtRQUFaLFFBQUcsR0FBSCxHQUFHLENBQVM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsVUFBVTtZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUE7SUFDN0IsQ0FBQztDQUNGO0FBYkQsc0NBYUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQWEsZUFBZTtJQUMxQjs7Ozs7T0FLRztJQUNILFlBQXFCLE1BQTBCLEVBQVcsT0FBb0I7UUFBekQsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFBVyxZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQUcsQ0FBQztDQUNuRjtBQVJELDBDQVFDO0FBRUQ7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBYSxVQUFVO0lBWXJCOzs7O09BSUc7SUFDSCxZQUE0QixHQUFZLEVBQVcsYUFBc0I7UUFBN0MsUUFBRyxHQUFILEdBQUcsQ0FBUztRQUFXLGtCQUFhLEdBQWIsYUFBYSxDQUFTO1FBWnpFLFlBQU8sR0FBUztZQUNkLGVBQWUsRUFBRSxrQkFBa0I7WUFDbkMsc0JBQXNCLEVBQUUsMEJBQTBCO1lBQ2xELGFBQWEsRUFBRSxnQkFBZ0I7WUFDL0IsV0FBVyxFQUFFLGNBQWM7U0FDNUIsQ0FBQztRQVFBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxHQUFHLEVBQUUsYUFBYSxD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