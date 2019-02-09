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
        console.log(stateAddress);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jbGllbnQvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBQzVELGtFQUFnRjtBQUNoRixzRUFBaUU7QUFDakUscUNBQWtDO0FBQ2xDLHVDQUF1QztBQUN2QyxpQ0FBcUQ7QUFHckQ7Ozs7OztHQU1HO0FBQ0gsTUFBYSxNQUFPLFNBQVEsaUJBQVU7SUFxQnBDOzs7OztPQUtHO0lBQ0gsWUFBNEIsR0FBVyxFQUFrQixhQUFxQjtRQUM1RSxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBREEsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUFrQixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQVJ2RSxvQkFBZSxHQUFzQixFQUFFLENBQUM7UUFVN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDBDQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSw2Q0FBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksY0FBYyxDQUFDLFdBQTRCO1FBQ2hELElBQUk7YUFDRCxlQUFlO2FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLGVBQWU7UUFDMUIsTUFBTSxZQUFZLEdBQUcsSUFBSTthQUN0QixlQUFlO2FBQ2YsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLE1BQU0sS0FBc0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFNUQ7Ozs7OztPQU1HO0lBQ0gsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQWM7UUFDdkMsTUFBTSxZQUFZLEdBQUcsSUFBSSx1QkFBYyxDQUFDLHVDQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUV6QixJQUFJO1lBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BELE9BQU8sT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLEtBQUssQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFZO1FBQ2xDLE1BQU0sWUFBWSxHQUFHLElBQUksdUJBQWMsQ0FBQyxFQUFFLENBQUM7YUFDeEMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ25CLEtBQUssRUFBRSxDQUFDO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzdDLElBQUk7WUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEQsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sS0FBSyxDQUFDO1NBQ2I7SUFDSCxDQUFDO0NBQ0Y7QUF2R0Qsd0JBdUdDO0FBQUEsQ0FBQztBQUVGLHlFQUF5RSJ9