// package: template_pb
// file: transaction_receipts.proto

import * as jspb from "google-protobuf";
import * as template_pb from "./template_pb";
import * as payload_pb from "./payload_pb";

export class Receipt extends jspb.Message {
  getDate(): number;
  setDate(value: number): void;

  getStateAddress(): string;
  setStateAddress(value: string): void;

  getRpcMethod(): payload_pb.Method;
  setRpcMethod(value: payload_pb.Method): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): template_pb.Template | undefined;
  setTemplate(value?: template_pb.Template): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receipt.AsObject;
  static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receipt;
  static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt;
}

export namespace Receipt {
  export type AsObject = {
    date: number,
    stateAddress: string,
    rpcMethod: payload_pb.Method,
    template?: template_pb.Template.AsObject,
  }
}

