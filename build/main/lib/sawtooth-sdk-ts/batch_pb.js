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
var transaction_pb = require('./transaction_pb.js');
goog.exportSymbol('proto.Batch', null, global);
goog.exportSymbol('proto.BatchHeader', null, global);
goog.exportSymbol('proto.BatchList', null, global);
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
proto.BatchHeader = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.BatchHeader.repeatedFields_, null);
};
goog.inherits(proto.BatchHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.BatchHeader.displayName = 'proto.BatchHeader';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BatchHeader.repeatedFields_ = [2];
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
    proto.BatchHeader.prototype.toObject = function (opt_includeInstance) {
        return proto.BatchHeader.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.BatchHeader} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.BatchHeader.toObject = function (includeInstance, msg) {
        var f, obj = {
            signerPublicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
            transactionIdsList: jspb.Message.getRepeatedField(msg, 2)
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
 * @return {!proto.BatchHeader}
 */
proto.BatchHeader.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.BatchHeader;
    return proto.BatchHeader.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BatchHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BatchHeader}
 */
proto.BatchHeader.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setSignerPublicKey(value);
                break;
            case 2:
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
proto.BatchHeader.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.BatchHeader.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BatchHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BatchHeader.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSignerPublicKey();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getTransactionIdsList();
    if (f.length > 0) {
        writer.writeRepeatedString(2, f);
    }
};
/**
 * optional string signer_public_key = 1;
 * @return {string}
 */
proto.BatchHeader.prototype.getSignerPublicKey = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.BatchHeader.prototype.setSignerPublicKey = function (value) {
    jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * repeated string transaction_ids = 2;
 * @return {!Array<string>}
 */
proto.BatchHeader.prototype.getTransactionIdsList = function () {
    return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};
/** @param {!Array<string>} value */
proto.BatchHeader.prototype.setTransactionIdsList = function (value) {
    jspb.Message.setField(this, 2, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.BatchHeader.prototype.addTransactionIds = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};
proto.BatchHeader.prototype.clearTransactionIdsList = function () {
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
proto.Batch = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.Batch.repeatedFields_, null);
};
goog.inherits(proto.Batch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.Batch.displayName = 'proto.Batch';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Batch.repeatedFields_ = [3];
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
    proto.Batch.prototype.toObject = function (opt_includeInstance) {
        return proto.Batch.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.Batch} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.Batch.toObject = function (includeInstance, msg) {
        var f, obj = {
            header: msg.getHeader_asB64(),
            headerSignature: jspb.Message.getFieldWithDefault(msg, 2, ""),
            transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(), transaction_pb.Transaction.toObject, includeInstance),
            trace: jspb.Message.getFieldWithDefault(msg, 4, false)
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
 * @return {!proto.Batch}
 */
proto.Batch.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.Batch;
    return proto.Batch.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Batch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Batch}
 */
proto.Batch.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {!Uint8Array} */ (reader.readBytes());
                msg.setHeader(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setHeaderSignature(value);
                break;
            case 3:
                var value = new transaction_pb.Transaction;
                reader.readMessage(value, transaction_pb.Transaction.deserializeBinaryFromReader);
                msg.addTransactions(value);
                break;
            case 4:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setTrace(value);
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
proto.Batch.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.Batch.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Batch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Batch.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getHeader_asU8();
    if (f.length > 0) {
        writer.writeBytes(1, f);
    }
    f = message.getHeaderSignature();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getTransactionsList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(3, f, transaction_pb.Transaction.serializeBinaryToWriter);
    }
    f = message.getTrace();
    if (f) {
        writer.writeBool(4, f);
    }
};
/**
 * optional bytes header = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Batch.prototype.getHeader = function () {
    return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/**
 * optional bytes header = 1;
 * This is a type-conversion wrapper around `getHeader()`
 * @return {string}
 */
proto.Batch.prototype.getHeader_asB64 = function () {
    return /** @type {string} */ (jspb.Message.bytesAsB64(this.getHeader()));
};
/**
 * optional bytes header = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHeader()`
 * @return {!Uint8Array}
 */
proto.Batch.prototype.getHeader_asU8 = function () {
    return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getHeader()));
};
/** @param {!(string|Uint8Array)} value */
proto.Batch.prototype.setHeader = function (value) {
    jspb.Message.setProto3BytesField(this, 1, value);
};
/**
 * optional string header_signature = 2;
 * @return {string}
 */
proto.Batch.prototype.getHeaderSignature = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.Batch.prototype.setHeaderSignature = function (value) {
    jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated Transaction transactions = 3;
 * @return {!Array<!proto.Transaction>}
 */
proto.Batch.prototype.getTransactionsList = function () {
    return /** @type{!Array<!proto.Transaction>} */ (jspb.Message.getRepeatedWrapperField(this, transaction_pb.Transaction, 3));
};
/** @param {!Array<!proto.Transaction>} value */
proto.Batch.prototype.setTransactionsList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Transaction}
 */
proto.Batch.prototype.addTransactions = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Transaction, opt_index);
};
proto.Batch.prototype.clearTransactionsList = function () {
    this.setTransactionsList([]);
};
/**
 * optional bool trace = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Batch.prototype.getTrace = function () {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};
/** @param {boolean} value */
proto.Batch.prototype.setTrace = function (value) {
    jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.BatchList = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.BatchList.repeatedFields_, null);
};
goog.inherits(proto.BatchList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.BatchList.displayName = 'proto.BatchList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BatchList.repeatedFields_ = [1];
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
    proto.BatchList.prototype.toObject = function (opt_includeInstance) {
        return proto.BatchList.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.BatchList} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.BatchList.toObject = function (includeInstance, msg) {
        var f, obj = {
            batchesList: jspb.Message.toObjectList(msg.getBatchesList(), proto.Batch.toObject, includeInstance)
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
 * @return {!proto.BatchList}
 */
proto.BatchList.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.BatchList;
    return proto.BatchList.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BatchList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BatchList}
 */
proto.BatchList.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.Batch;
                reader.readMessage(value, proto.Batch.deserializeBinaryFromReader);
                msg.addBatches(value);
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
proto.BatchList.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.BatchList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BatchList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BatchList.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getBatchesList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.Batch.serializeBinaryToWriter);
    }
};
/**
 * repeated Batch batches = 1;
 * @return {!Array<!proto.Batch>}
 */
proto.BatchList.prototype.getBatchesList = function () {
    return /** @type{!Array<!proto.Batch>} */ (jspb.Message.getRepeatedWrapperField(this, proto.Batch, 1));
};
/** @param {!Array<!proto.Batch>} value */
proto.BatchList.prototype.setBatchesList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.Batch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Batch}
 */
proto.BatchList.prototype.addBatches = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Batch, opt_index);
};
proto.BatchList.prototype.clearBatchesList = function () {
    this.setBatchesList([]);
};
goog.object.extend(exports, proto);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0Y2hfcGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3Nhd3Rvb3RoLXNkay10cy9iYXRjaF9wYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxpQ0FBaUM7QUFFakMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO0FBRXZDLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVuRDs7Ozs7Ozs7O0dBU0c7QUFDSCxLQUFLLENBQUMsV0FBVyxHQUFHLFVBQVMsUUFBUTtJQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxRixDQUFDLENBQUM7QUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9DLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtJQUMzQixLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztDQUNyRDtBQUNEOzs7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