"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-submodule-imports
const signing_1 = require("sawtooth-sdk/signing");
// tslint:disable-next-line:no-submodule-imports
const secp256k1_1 = require("sawtooth-sdk/signing/secp256k1");
const crypto_1 = require("crypto");
/**
 * Creates proof of integrity hash of Data
 *
 * @param {Data} data
 * @returns {string}
 */
exports.computePOIHash = (data) => crypto_1.createHash('md5').update(data.serializeBinary()).digest('hex');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21tb24vc2lnbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQWdEO0FBQ2hELGtEQUFvRTtBQUVwRSxnREFBZ0Q7QUFDaEQsOERBQXFFO0FBQ3JFLG1DQUFvQztBQUdwQzs7Ozs7R0FLRztBQUNVLFFBQUEsY0FBYyxHQUFHLENBQUMsSUFBVSxFQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFckg7Ozs7O0dBS0c7QUFDSCxNQUFhLGVBQWU7SUFNMUI7Ozs7T0FJRztJQUNILFlBQVksYUFBcUI7UUFWakMsWUFBTyxHQUFHLHVCQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFXbkMsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekQsTUFBTSxVQUFVLEdBQUcsSUFBSSwrQkFBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksdUJBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTthQUNyQixNQUFNO2FBQ04sWUFBWSxFQUFFO2FBQ2QsS0FBSyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUk7YUFDdkIsTUFBTTthQUNOLFlBQVksRUFBRTthQUNkLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQUksY0FBYyxLQUFhLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDMUQsSUFBSSxnQkFBZ0IsS0FBYSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRTlEOzs7Ozs7T0FNRztJQUNILElBQUksQ0FBQyxPQUFtQjtRQUN0QixPQUFPLElBQUk7YUFDUixNQUFNO2FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQXhDRCwwQ0F3Q0M7QUFBQSxDQUFDIn0=