"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signing_1 = require("sawtooth-sdk/signing");
const secp256k1_1 = require("sawtooth-sdk/signing/secp256k1");
class Signer {
    constructor(privateKeyHex) {
        this.context = signing_1.createContext('secp256k1');
        console.log(privateKeyHex);
        const privateKeyBuff = Buffer.from(privateKeyHex, 'hex');
        const privateKey = new secp256k1_1.Secp256k1PrivateKey(privateKeyBuff);
        this.signer = new signing_1.CryptoFactory(this.context).newSigner(privateKey);
    }
    get publickeyHex() {
        return this
            .signer
            .getPublicKey()
            .asHex();
    }
    get publickeyBytes() {
        return this
            .signer
            .getPublicKey()
            .asBytes();
    }
    sign(payload) {
        return this
            .signer
            .sign(payload);
    }
}
exports.Signer = Signer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zaWduZXIvc2lnbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQW9FO0FBQ3BFLDhEQUFxRTtBQUVyRSxNQUFhLE1BQU07SUFHakIsWUFBWSxhQUFzQjtRQUZsQyxZQUFPLEdBQUcsdUJBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUduQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzFCLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pELE1BQU0sVUFBVSxHQUFHLElBQUksK0JBQW1CLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHVCQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJO2FBQ0YsTUFBTTthQUNOLFlBQVksRUFBRTthQUNkLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJO2FBQ0YsTUFBTTthQUNOLFlBQVksRUFBRTthQUNkLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBb0I7UUFDdkIsT0FBTyxJQUFJO2FBQ0YsTUFBTTthQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUE3QkQsd0JBNkJDIn0=