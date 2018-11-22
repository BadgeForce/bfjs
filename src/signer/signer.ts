import { createContext, CryptoFactory } from 'sawtooth-sdk/signing';
import { Secp256k1PrivateKey, Secp256k1PublicKey } from 'sawtooth-sdk/signing/secp256k1';

export class Signer {
  context = createContext('secp256k1');
  signer : any;
  constructor(privateKeyHex : string) {
    const privateKeyBuff = Buffer.from(privateKeyHex, 'hex');
    const privateKey = new Secp256k1PrivateKey(privateKeyBuff);
    this.signer = new CryptoFactory(this.context).newSigner(privateKey);
  }

  get publickeyHex() : string {
    return this
            .signer
            .getPublicKey()
            .asHex();
  }

  get publickeyBytes() : Buffer {
    return this
            .signer
            .getPublicKey()
            .asBytes();
  }

  sign(payload : Uint8Array) : string {
    return this
            .signer
            .sign(payload);
  }
}
