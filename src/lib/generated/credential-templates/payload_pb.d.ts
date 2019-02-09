// package: template_pb
// file: payload.proto

import * as jspb from "google-protobuf";
import * as template_pb from "./template_pb";

export class RPCRequest extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): Create | undefined;
  setCreate(value?: Create): void;

  hasDelete(): boolean;
  clearDelete(): void;
  getDelete(): Delete | undefined;
  setDelete(value?: Delete): void;

  getMethodCase(): RPCRequest.MethodCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RPCRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RPCRequest): RPCRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RPCRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RPCRequest;
  static deserializeBinaryFromReader(message: RPCRequest, reader: jspb.BinaryReader): RPCRequest;
}

export namespace RPCRequest {
  export type AsObject = {
    create?: Create.AsObject,
    pb_delete?: Delete.AsObject,
  }

  export enum MethodCase {
    METHOD_NOT_SET = 0,
    CREATE = 1,
    DELETE = 2,
  }
}

export class Create extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): template_pb.Template | undefined;
  setParams(value?: template_pb.Template): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Create.AsObject;
  static toObject(includeInstance: boolean, msg: Create): Create.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Create, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Create;
  static deserializeBinaryFromReader(message: Create, reader: jspb.BinaryReader): Create;
}

export namespace Create {
  export type AsObject = {
    params?: template_pb.Template.AsObject,
  }
}

export class Delete extends jspb.Message {
  clearAddressesList(): void;
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): void;
  addAddresses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Delete.AsObject;
  static toObject(includeInstance: boolean, msg: Delete): Delete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Delete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Delete;
  static deserializeBinaryFromReader(message: Delete, reader: jspb.BinaryReader): Delete;
}

export namespace Delete {
  export type AsObject = {
    addressesList: Array<string>,
  }
}

export enum Method {
  CREATE = 0,
  UPDATE = 1,
  DELETE = 2,
}

