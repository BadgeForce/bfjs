import credentials_pb from './generated/credentials_pb';

export class C {
  private x = 10;
  getX = () => this.x;
  setX = (newVal : number) => {
    this.x = newVal;
  }
}

export let x = new C();
export let y = {
  ...{
    some: 'value',
  },
};

const cred = new credentials_pb.Credential();
cred.setName('khalil');
console.log(cred.getName());
