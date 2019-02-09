"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-submodule-imports
const signing_1 = require("sawtooth-sdk/signing");
// tslint:disable-next-line:no-submodule-imports
const secp256k1_1 = require("sawtooth-sdk/signing/secp256k1");
/**
 *
 *
 * @export
 * @class Secp256k1Signer
 */
class Secp256k1Signer {
    /**
     *Creates an instance of Secp256k1Signer.
     * @param {string} privateKeyHex hex encoded private key string
     * @memberof Secp256k1Signer
     */
    constructor(privateKeyHex) {
        this.context = signing_1.createContext('secp256k1');
        const privateKeyBuff = Buffer.from(privateKeyHex, 'hex');
        const privateKey = new secp256k1_1.Secp256k1PrivateKey(privateKeyBuff);
        this.signer = new signing_1.CryptoFactory(this.context).newSigner(privateKey);
        this.publickeyHex = this
            .signer
            .getPublicKey()
            .asHex();
        this.publickeyBytes = this
            .signer
            .getPublicKey()
            .asBytes();
    }
    get publickeyAsHex() { return this.publickeyHex; }
    get publickeyAsBytes() { return this.publickeyBytes; }
    /**
     * Signs a payload
     *
     * @param {Uint8Array} payload
     * @returns {string}
     * @memberof Secp256k1Signer
     */
    sign(payload) {
        return this
            .signer
            .sign(payload);
    }
}
exports.Secp256k1Signer = Secp256k1Signer;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21tb24vc2lnbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQWdEO0FBQ2hELGtEQUFrRTtBQUNsRSxnREFBZ0Q7QUFDaEQsOERBQW1FO0FBRW5FOzs7OztHQUtHO0FBQ0gsTUFBYSxlQUFlO0lBTTFCOzs7O09BSUc7SUFDSCxZQUFZLGFBQXNCO1FBVmxDLFlBQU8sR0FBRyx1QkFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBV25DLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pELE1BQU0sVUFBVSxHQUFHLElBQUksK0JBQW1CLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHVCQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUk7YUFDckIsTUFBTTthQUNOLFlBQVksRUFBRTthQUNkLEtBQUssRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJO2FBQ3ZCLE1BQU07YUFDTixZQUFZLEVBQUU7YUFDZCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxJQUFJLGNBQWMsS0FBYSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQSxDQUFDO0lBQ3pELElBQUksZ0JBQWdCLEtBQWEsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUEsQ0FBQztJQUU3RDs7Ozs7O09BTUc7SUFDSCxJQUFJLENBQUMsT0FBb0I7UUFDdkIsT0FBTyxJQUFJO2FBQ1IsTUFBTTthQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUF4Q0QsMENBd0NDO0FBQUEsQ0FBQyJ9