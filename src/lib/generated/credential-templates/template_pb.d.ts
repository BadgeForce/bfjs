// package: template_pb
// file: template.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Template extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): Data | undefined;
  setData(value?: Data): void;

  hasVerification(): boolean;
  clearVerification(): void;
  getVerification(): Verification | undefined;
  setVerification(value?: Verification): void;

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
    data?: Data.AsObject,
    verification?: Verification.AsObject,
  }
}

export class Data extends jspb.Message {
  getIssuerPub(): string;
  setIssuerPub(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): string;
  setType(value: string): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): Version | undefined;
  setVersion(value?: Version): void;

  hasCoreData(): boolean;
  clearCoreData(): void;
  getCoreData(): google_protobuf_struct_pb.Struct | undefined;
  setCoreData(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Data.AsObject;
  static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Data;
  static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
  export type AsObject = {
    issuerPub: string,
    name: string,
    description: string,
    type: string,
    createdAt: number,
    version?: Version.AsObject,
    coreData?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Version extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): void;

  getMinor(): number;
  setMinor(value: number): void;

  getPatch(): number;
  setPatch(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    major: number,
    minor: number,
    patch: number,
  }
}

export class Verification extends jspb.Message {
  getSignature(): string;
  setSignature(value: string): void;

  getProofOfIntegrityHash(): string;
  setProofOfIntegrityHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Verification.AsObject;
  static toObject(includeInstance: boolean, msg: Verification): Verification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Verification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Verification;
  static deserializeBinaryFromReader(message: Verification, reader: jspb.BinaryReader): Verification;
}

export namespace Verification {
  export type AsObject = {
    signature: string,
    proofOfIntegrityHash: string,
  }
}

