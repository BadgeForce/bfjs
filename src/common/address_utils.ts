import { createHash } from 'crypto';

export class AddressBuilder {
  address : string;
  constructor(prefix : string) {
    this.address = this
            .address
            .concat(prefix);
  }

  append(data : string, start : number, end : number) : AddressBuilder {
    const hash: string = createHash('sha512')
            .update(data)
            .digest('hex')
            .substring(start, end);

    this.address = this
            .address
            .concat(hash);
    return this;
  }
    // tslint:disable-next-line:block-spacing
  build() : string {return this.address; }
}
