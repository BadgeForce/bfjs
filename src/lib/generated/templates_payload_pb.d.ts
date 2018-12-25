// package: credential_template_engine_pb
// file: templates_payload.proto

import * as jspb from "google-protobuf";

export class RPCRequest extends jspb.Message {
  getMethod(): Method;
  setMethod(value: Method): void;

  getParams(): string;
  setParams(value: string): void;

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
    method: Method,
    params: string,
  }
}

export enum Method {
  CREATE = 0,
  UPDATE = 1,
  DELETE = 2,
}

