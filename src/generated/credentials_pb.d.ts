// package: badgeforce_pb
// file: credentials.proto

import * as jspb from "google-protobuf";

export class Credential extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIssuerPublicKey(): string;
  setIssuerPublicKey(value: string): void;

  getRecipientPublicKey(): string;
  setRecipientPublicKey(value: string): void;

  getRevokationStatus(): boolean;
  setRevokationStatus(value: boolean): void;

  getProofOfIntegrityHash(): string;
  setProofOfIntegrityHash(value: string): void;

  getStorageHash(): string;
  setStorageHash(value: string): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): Template | undefined;
  setTemplate(value?: Template): void;

  getExpiration(): number;
  setExpiration(value: number): void;

  getIssuedAt(): number;
  setIssuedAt(value: number): void;

  getSignature(): string;
  setSignature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credential.AsObject;
  static toObject(includeInstance: boolean, msg: Credential): Credential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Credential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credential;
  static deserializeBinaryFromReader(message: Credential, reader: jspb.BinaryReader): Credential;
}

export namespace Credential {
  export type AsObject = {
    name: string,
    issuerPublicKey: string,
    recipientPublicKey: string,
    revokationStatus: boolean,
    proofOfIntegrityHash: string,
    storageHash: string,
    template?: Template.AsObject,
    expiration: number,
    issuedAt: number,
    signature: string,
  }
}

export class Template extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Template.AsObject;
  static toObject(includeInstance: boolean, msg: Template): Template.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Template, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Template;
  static deserializeBinaryFromReader(message: Template, reader: jspb.BinaryReader): Template;
}

export namespace Template {
  export type AsObject = {
    owner: string,
    name: string,
    version: string,
  }
}

