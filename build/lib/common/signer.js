"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-submodule-imports
const signing_1 = require("sawtooth-sdk/signing");
// tslint:disable-next-line:no-submodule-imports
const secp256k1_1 = require("sawtooth-sdk/signing/secp256k1");
const crypto_1 = require("crypto");
const CONTEXT = signing_1.createContext('secp256k1');
/**
 * Creates proof of integrity hash of Data
 *
 * @param {Data} data
 * @returns {string}
 */
exports.computePOIHash = (data) => crypto_1.createHash('md5').update(data.serializeBinary()).digest('hex');
/**
 * Verifies a signature created with the Secp256k1 context
 *
 * @param {string} signature signature
 * @param {string} message message that was signed hex encoded
 * @param {Buffer} publicKeyBytes public key bytes of the corresponding signing key used to create the signature
 * @returns {boolean}
 */
exports.verifySignature = (signature, message, publicKeyBytes) => CONTEXT.verify(signature, message, new secp256k1_1.Secp256k1PublicKey(publicKeyBytes));
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
        this.privateKeyHex = privateKeyHex;
        this.context = CONTEXT;
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
    /**
     * Verifies a signature created with the Secp256k1 context
     *
     * @param {string} signature signature
     * @param {string} message message that was signed hex encoded
     * @returns {boolean}
     * @memberof Secp256k1Signer
     */
    verifySignature(signature, message) {
        return exports.verifySignature(signature, message, this.publickeyBytes);
    }
}
exports.Secp256k1Signer = Secp256k1Signer;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb21tb24vc2lnbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQWdEO0FBQ2hELGtEQUFvRTtBQUVwRSxnREFBZ0Q7QUFDaEQsOERBQXlGO0FBQ3pGLG1DQUFvQztBQUVwQyxNQUFNLE9BQU8sR0FBRyx1QkFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBTTNDOzs7OztHQUtHO0FBQ1UsUUFBQSxjQUFjLEdBQUcsQ0FBQyxJQUF3QixFQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFbkk7Ozs7Ozs7R0FPRztBQUNVLFFBQUEsZUFBZSxHQUFHLENBQUMsU0FBaUIsRUFBRSxPQUFlLEVBQUUsY0FBc0IsRUFBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksOEJBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNuTDs7Ozs7R0FLRztBQUNILE1BQWEsZUFBZTtJQU0xQjs7OztPQUlHO0lBQ0gsWUFBbUIsYUFBcUI7UUFBckIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFWeEMsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQVdoQixNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxNQUFNLFVBQVUsR0FBRyxJQUFJLCtCQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSx1QkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJO2FBQ3JCLE1BQU07YUFDTixZQUFZLEVBQUU7YUFDZCxLQUFLLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSTthQUN2QixNQUFNO2FBQ04sWUFBWSxFQUFFO2FBQ2QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBSSxjQUFjLEtBQWEsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMxRCxJQUFJLGdCQUFnQixLQUFhLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFOUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSSxDQUFDLE9BQW1CO1FBQ3RCLE9BQU8sSUFBSTthQUNSLE1BQU07YUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxlQUFlLENBQUMsU0FBaUIsRUFBRSxPQUFlO1FBQ2hELE9BQU8sdUJBQWUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBRUY7QUFyREQsMENBcURDO0FBQUEsQ0FBQyJ9