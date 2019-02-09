"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credential_templates_1 = require("../credential_templates");
const verifiable_credentials_1 = require("../verifiable_credentials");
const config_1 = require("./config");
// import {Subscriber} from './events';
const rest_1 = require("./rest");
/**
 *
 *
 * @export
 * @class Client
 * @extends {RestClient}
 */
class Client extends rest_1.RestClient {
    /**
     * Creates an instance of Client.
     * @param {string} uri REST API endpoint
     * @param {string} privateKeyHex hex encoded private key string
     * @memberof Client
     */
    constructor(uri, privateKeyHex) {
        super(uri, privateKeyHex);
        this.uri = uri;
        this.privateKeyHex = privateKeyHex;
        this.transactionList = [];
        this.config = new config_1.Config(uri, privateKeyHex);
        this.templates = new credential_templates_1.TemplatesTransactor(this.config.signer.publickeyAsHex, this.putTransaction.bind(this));
        this.credentials = new verifiable_credentials_1.CredentialTransactor(this.config.signer.publickeyAsHex, this.putTransaction.bind(this));
    }
    /**
     *
     *
     * @param {TransactionData} transaction
     * @returns {Client}
     * @memberof Client
     */
    putTransaction(transaction) {
        this
            .transactionList
            .push(transaction);
        return this;
    }
    /**
     * Submits all transactions currently in this.transactionList to the chain in a single batch. Transaction list is then emptied.
     *
     * @returns {Promise < any >}
     * @memberof Client
     */
    async submitNextBatch() {
        const transactions = this
            .transactionList
            .map(t => t);
        this.transactionList.length = 0;
        return this.submitBatches(transactions);
    }
    get signer() { return this.config.signer; }
}
exports.Client = Client;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jbGllbnQvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esa0VBQTREO0FBQzVELHNFQUFpRTtBQUNqRSxxQ0FBZ0M7QUFDaEMsdUNBQXVDO0FBQ3ZDLGlDQUFtRDtBQUVuRDs7Ozs7O0dBTUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxpQkFBVTtJQW9CcEM7Ozs7O09BS0c7SUFDSCxZQUE0QixHQUFZLEVBQWtCLGFBQXNCO1FBQzlFLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFEQSxRQUFHLEdBQUgsR0FBRyxDQUFTO1FBQWtCLGtCQUFhLEdBQWIsYUFBYSxDQUFTO1FBUnpFLG9CQUFlLEdBQXVCLEVBQUUsQ0FBQztRQVU5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksMENBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLDZDQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxjQUFjLENBQUMsV0FBNkI7UUFDakQsSUFBSTthQUNELGVBQWU7YUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsZUFBZTtRQUMxQixNQUFNLFlBQVksR0FBRyxJQUFJO2FBQ3RCLGVBQWU7YUFDZixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUksTUFBTSxLQUFzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztDQUM1RDtBQTlERCx3QkE4REM7QUFBQSxDQUFDIn0=