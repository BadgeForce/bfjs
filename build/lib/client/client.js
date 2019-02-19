"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
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
 *
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
    /**
     * Get all templates owned by a specific issuer
     *
     * @param {string} issuer issuer public key
     * @returns {Promise < ReadonlyArray<Template> >}
     * @memberof Client
     */
    async getTemplatesByIssuer(issuer) {
        const stateAddress = new common_1.AddressBuilder(credential_templates_1.TEMPLATES_PREFIX).append(issuer, 0, 30).build();
        try {
            const results = await this.stateQuery(stateAddress);
            return results.toTemplates();
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Get template by name
     *
     * @param {string} name template name
     * @returns {Promise Template}
     * @memberof Client
     */
    async getTemplateByName(name) {
        const stateAddress = new common_1.AddressBuilder("")
            .append(name, 0, 30)
            .build();
        console.log(credential_templates_1.TEMPLATES_PREFIX.padEnd(36, "0").length);
        console.log(credential_templates_1.TEMPLATES_PREFIX.padEnd(36, "0"));
        try {
            const results = await this.stateQuery(stateAddress);
            return results.toTemplates()[0];
        }
        catch (error) {
            throw error;
        }
    }
}
exports.Client = Client;
;
// 37e3be15cc7e0c0df46ded3d6a959c1ef8173dd88fa948027e93dcb027300e5bc71091
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jbGllbnQvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBQzVELGtFQUFnRjtBQUNoRixzRUFBaUU7QUFDakUscUNBQWtDO0FBQ2xDLHVDQUF1QztBQUN2QyxpQ0FBcUQ7QUFHckQ7Ozs7Ozs7R0FPRztBQUNILE1BQWEsTUFBTyxTQUFRLGlCQUFVO0lBcUJwQzs7Ozs7T0FLRztJQUNILFlBQTRCLEdBQVcsRUFBa0IsYUFBcUI7UUFDNUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQURBLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBa0Isa0JBQWEsR0FBYixhQUFhLENBQVE7UUFSdkUsb0JBQWUsR0FBc0IsRUFBRSxDQUFDO1FBVTdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSwwQ0FBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksNkNBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakgsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGNBQWMsQ0FBQyxXQUE0QjtRQUNoRCxJQUFJO2FBQ0QsZUFBZTthQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxlQUFlO1FBQzFCLE1BQU0sWUFBWSxHQUFHLElBQUk7YUFDdEIsZUFBZTthQUNmLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBSSxNQUFNLEtBQXNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRTVEOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFjO1FBQ3ZDLE1BQU0sWUFBWSxHQUFHLElBQUksdUJBQWMsQ0FBQyx1Q0FBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXhGLElBQUk7WUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEQsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sS0FBSyxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQVk7UUFDbEMsTUFBTSxZQUFZLEdBQUcsSUFBSSx1QkFBYyxDQUFDLEVBQUUsQ0FBQzthQUN4QyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDbkIsS0FBSyxFQUFFLENBQUM7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDN0MsSUFBSTtZQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwRCxPQUFPLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUM7U0FDYjtJQUNILENBQUM7Q0FDRjtBQXRHRCx3QkFzR0M7QUFBQSxDQUFDO0FBRUYseUVBQXlFIn0=