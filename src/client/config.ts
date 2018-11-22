import { Signer } from '../signer';

export class Config {
  constructor(public uri : string, public signer : Signer) {}
}
