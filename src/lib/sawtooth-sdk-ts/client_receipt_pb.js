/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var transaction_receipt_pb = require('./transaction_receipt_pb.js');
goog.exportSymbol('proto.ClientReceiptGetRequest', null, global);
goog.exportSymbol('proto.ClientReceiptGetResponse', null, global);
goog.exportSymbol('proto.ClientReceiptGetResponse.Status', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClientReceiptGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ClientReceiptGetRequest.repeatedFields_, null);
};
goog.inherits(proto.ClientReceiptGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ClientReceiptGetRequest.displayName = 'proto.ClientReceiptGetRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ClientReceiptGetRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClientReceiptGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ClientReceiptGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClientReceiptGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientReceiptGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionIdsList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientReceiptGetRequest}
 */
proto.ClientReceiptGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClientReceiptGetRequest;
  return proto.ClientReceiptGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientReceiptGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientReceiptGetRequest}
 */
proto.ClientReceiptGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTransactionIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClientReceiptGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClientReceiptGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientReceiptGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientReceiptGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string transaction_ids = 1;
 * @return {!Array<string>}
 */
proto.ClientReceiptGetRequest.prototype.getTransactionIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.ClientReceiptGetRequest.prototype.setTransactionIdsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.ClientReceiptGetRequest.prototype.addTransactionIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.ClientReceiptGetRequest.prototype.clearTransactionIdsList = function() {
  this.setTransactionIdsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClientReceiptGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ClientReceiptGetResponse.repeatedFields_, null);
};
goog.inherits(proto.ClientReceiptGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ClientReceiptGetResponse.displayName = 'proto.ClientReceiptGetResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ClientReceiptGetResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClientReceiptGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ClientReceiptGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClientReceiptGetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientReceiptGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    receiptsList: jspb.Message.toObjectList(msg.getReceiptsList(),
    transaction_receipt_pb.TransactionReceipt.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientReceiptGetResponse}
 */
proto.ClientReceiptGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClientReceiptGetResponse;
  return proto.ClientReceiptGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientReceiptGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientReceiptGetResponse}
 */
proto.ClientReceiptGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ClientReceiptGetResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new transaction_receipt_pb.TransactionReceipt;
      reader.readMessage(value,transaction_receipt_pb.TransactionReceipt.deserializeBinaryFromReader);
      msg.addReceipts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClientReceiptGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClientReceiptGetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientReceiptGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientReceiptGetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReceiptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      transaction_receipt_pb.TransactionReceipt.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ClientReceiptGetResponse.Status = {
  STATUS_UNSET: 0,
  OK: 1,
  INTERNAL_ERROR: 2,
  NO_RESOURCE: 5,
  INVALID_ID: 8
};

/**
 * optional Status status = 1;
 * @return {!proto.ClientReceiptGetResponse.Status}
 */
proto.ClientReceiptGetResponse.prototype.getStatus = function() {
  return /** @type {!proto.ClientReceiptGetResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.ClientReceiptGetResponse.Status} value */
proto.ClientReceiptGetResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated TransactionReceipt receipts = 2;
 * @return {!Array<!proto.TransactionReceipt>}
 */
proto.ClientReceiptGetResponse.prototype.getReceiptsList = function() {
  return /** @type{!Array<!proto.TransactionReceipt>} */ (
    jspb.Message.getRepeatedWrapperField(this, transaction_receipt_pb.TransactionReceipt, 2));
};


/** @param {!Array<!proto.TransactionReceipt>} value */
proto.ClientReceiptGetResponse.prototype.setReceiptsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.TransactionReceipt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.TransactionReceipt}
 */
proto.ClientReceiptGetResponse.prototype.addReceipts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.TransactionReceipt, opt_index);
};


proto.ClientReceiptGetResponse.prototype.clearReceiptsList = function() {
  this.setReceiptsList([]);
};


goog.object.extend(exports, proto);
