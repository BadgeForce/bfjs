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
    /**
     * Query the chain state
     *
     * @param {string} address state address for the query
     * @returns {Promise < QueryResults >}
     * @memberof RestClient
     */
    async stateQuery(address) {
        try {
            const response = await request
                .get(this.endpoints.state)
                .ok(res => res.status < 300)
                .set(this.HEADERS.contentType, this.HEADERS.applicationJSON)
                .query({ address });
            const results = new serializer_1.QueryResults(response.body);
            if (results.data.data.length == 0) {
                throw new Error(`No data found at state address: ${address}`);
            }
            return results;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3Jlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0RBQXNDO0FBQ3RDLDBEQUEwRTtBQUMxRSxzRUFBaUY7QUFDakYscUNBQWdDO0FBQ2hDLDZDQUEwQztBQUcxQzs7Ozs7R0FLRztBQUNILE1BQWEsYUFBYTtJQUl4Qjs7OztPQUlHO0lBQ0gsWUFBNEIsR0FBWTtRQUFaLFFBQUcsR0FBSCxHQUFHLENBQVM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsVUFBVTtZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUE7SUFDN0IsQ0FBQztDQUNGO0FBYkQsc0NBYUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQWEsZUFBZTtJQUMxQjs7Ozs7T0FLRztJQUNILFlBQXFCLE1BQTBCLEVBQVcsT0FBNEI7UUFBakUsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFBVyxZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUFHLENBQUM7Q0FDM0Y7QUFSRCwwQ0FRQztBQUVEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQWEsVUFBVTtJQVlyQjs7OztPQUlHO0lBQ0gsWUFBNEIsR0FBWSxFQUFXLGFBQXNCO1FBQTdDLFFBQUcsR0FBSCxHQUFHLENBQVM7UUFBVyxrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQVp6RSxZQUFPLEdBQVM7WUFDZCxlQUFlLEVBQUUsa0JBQWtCO1lBQ25DLHNCQUFzQixFQUFFLDBCQUEwQjtZQUNsRCxhQUFhLEVBQUUsZ0JBQWdCO1lBQy9CLFdBQVcsRUFBRSxjQUFjO1NBQzVCLENBQUM7UUFRQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FB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