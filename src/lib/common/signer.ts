// tslint:disable-next-line:no-submodule-imports
import { createContext, CryptoFactory } from 'sawtooth-sdk/signing';

// tslint:disable-next-line:no-submodule-imports
import { Secp256k1PrivateKey, Secp256k1PublicKey } from 'sawtooth-sdk/signing/secp256k1';
import { createHash } from 'crypto';

const CONTEXT = createContext('secp256k1');

export interface BinarySerializable {
  serializeBinary(): Uint8Array
}

/**
 * Creates proof of integrity hash of Data
 *
 * @param {Data} data
 * @returns {string}
 */
export const computePOIHash = (data: BinarySerializable): string => createHash('md5').update(data.serializeBinary()).digest('hex');

/**
 * Verifies a signature created with the Secp256k1 context
 *
 * @param {string} signature signature
 * @param {string} message message that was signed hex encoded
 * @param {Buffer} publicKeyBytes public key bytes of the corresponding signing key used to create the signature  
 * @returns {boolean}
 */
export const verifySignature = (signature: string, message: Buffer, publicKeyBytes: Buffer): boolean => CONTEXT.verify(signature, message, new Secp256k1PublicKey(publicKeyBytes));
/**
 *
 *
 * @export
 * @class Secp256k1Signer
 */
export class Secp256k1Signer {
  context = CONTEXT;
  public readonly signer: any;
  public readonly publickeyHex: string;
  public readonly publickeyBytes: Buffer;

  /**
   *Creates an instance of Secp256k1Signer.
   * @param {string} privateKeyHex hex encoded private key string
   * @memberof Secp256k1Signer
   */
  constructor(public privateKeyHex: string) {
    const privateKeyBuff = Buffer.from(privateKeyHex, 'hex');
    const privateKey = new Secp256k1PrivateKey(privateKeyBuff);
    this.signer = new CryptoFactory(this.context).newSigner(privateKey);
    this.publickeyHex = this
      .signer
      .getPublicKey()
      .asHex();
    this.publickeyBytes = this
      .signer
      .getPublicKey()
      .asBytes();
  }

  get publickeyAsHex(): string { return this.publickeyHex; }
  get publickeyAsBytes(): Buffer { return this.publickeyBytes; }

  /**
   * Signs a payload
   *
   * @param {Uint8Array} payload
   * @returns {string}
   * @memberof Secp256k1Signer
   */
  sign(payload: Uint8Array): string {
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
  verifySignature(signature: string, message: Buffer): boolean {
    return verifySignature(signature, message, this.publickeyBytes);
  }

};