"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signer_1 = require("../common/signer");
/**
 *
 *
 * @export
 * @class Config
 */
class Config {
    /**
     *Creates an instance of Config.
     * @param {string} uri
     * @param {string} privateKeyHex
     * @memberof Config
     */
    constructor(uri, privateKeyHex) {
        this.uri = uri;
        this.signer = new signer_1.Secp256k1Signer(privateKeyHex);
    }
}
exports.Config = Config;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jbGllbnQvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWlEO0FBRWpEOzs7OztHQUtHO0FBQ0gsTUFBYSxNQUFNO0lBRWpCOzs7OztPQUtHO0lBQ0gsWUFBNEIsR0FBWSxFQUFFLGFBQXNCO1FBQXBDLFFBQUcsR0FBSCxHQUFHLENBQVM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHdCQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDbEQsQ0FBQztDQUNGO0FBWEQsd0JBV0M7QUFBQSxDQUFDIn0=