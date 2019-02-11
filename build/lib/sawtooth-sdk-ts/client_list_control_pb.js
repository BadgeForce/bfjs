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
goog.exportSymbol('proto.ClientPagingControls', null, global);
goog.exportSymbol('proto.ClientPagingResponse', null, global);
goog.exportSymbol('proto.ClientSortControls', null, global);
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
proto.ClientPagingControls = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClientPagingControls, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.ClientPagingControls.displayName = 'proto.ClientPagingControls';
}
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
    proto.ClientPagingControls.prototype.toObject = function (opt_includeInstance) {
        return proto.ClientPagingControls.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.ClientPagingControls} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.ClientPagingControls.toObject = function (includeInstance, msg) {
        var f, obj = {
            start: jspb.Message.getFieldWithDefault(msg, 1, ""),
            limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ClientPagingControls}
 */
proto.ClientPagingControls.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.ClientPagingControls;
    return proto.ClientPagingControls.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientPagingControls} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientPagingControls}
 */
proto.ClientPagingControls.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setStart(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setLimit(value);
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
proto.ClientPagingControls.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.ClientPagingControls.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientPagingControls} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPagingControls.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getStart();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getLimit();
    if (f !== 0) {
        writer.writeInt32(2, f);
    }
};
/**
 * optional string start = 1;
 * @return {string}
 */
proto.ClientPagingControls.prototype.getStart = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.ClientPagingControls.prototype.setStart = function (value) {
    jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * optional int32 limit = 2;
 * @return {number}
 */
proto.ClientPagingControls.prototype.getLimit = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};
/** @param {number} value */
proto.ClientPagingControls.prototype.setLimit = function (value) {
    jspb.Message.setProto3IntField(this, 2, value);
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
proto.ClientPagingResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClientPagingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.ClientPagingResponse.displayName = 'proto.ClientPagingResponse';
}
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
    proto.ClientPagingResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.ClientPagingResponse.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.ClientPagingResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.ClientPagingResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            next: jspb.Message.getFieldWithDefault(msg, 1, ""),
            start: jspb.Message.getFieldWithDefault(msg, 2, ""),
            limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ClientPagingResponse}
 */
proto.ClientPagingResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.ClientPagingResponse;
    return proto.ClientPagingResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientPagingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientPagingResponse}
 */
proto.ClientPagingResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setNext(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setStart(value);
                break;
            case 3:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setLimit(value);
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
proto.ClientPagingResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.ClientPagingResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientPagingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPagingResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getNext();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getStart();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getLimit();
    if (f !== 0) {
        writer.writeInt32(3, f);
    }
};
/**
 * optional string next = 1;
 * @return {string}
 */
proto.ClientPagingResponse.prototype.getNext = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.ClientPagingResponse.prototype.setNext = function (value) {
    jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * optional string start = 2;
 * @return {string}
 */
proto.ClientPagingResponse.prototype.getStart = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.ClientPagingResponse.prototype.setStart = function (value) {
    jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional int32 limit = 3;
 * @return {number}
 */
proto.ClientPagingResponse.prototype.getLimit = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};
/** @param {number} value */
proto.ClientPagingResponse.prototype.setLimit = function (value) {
    jspb.Message.setProto3IntField(this, 3, value);
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
proto.ClientSortControls = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.ClientSortControls.repeatedFields_, null);
};
goog.inherits(proto.ClientSortControls, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.ClientSortControls.displayName = 'proto.ClientSortControls';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ClientSortControls.repeatedFields_ = [1];
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
    proto.ClientSortControls.prototype.toObject = function (opt_includeInstance) {
        return proto.ClientSortControls.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.ClientSortControls} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.ClientSortControls.toObject = function (includeInstance, msg) {
        var f, obj = {
            keysList: jspb.Message.getRepeatedField(msg, 1),
            reverse: jspb.Message.getFieldWithDefault(msg, 2, false)
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
 * @return {!proto.ClientSortControls}
 */
proto.ClientSortControls.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.ClientSortControls;
    return proto.ClientSortControls.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientSortControls} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientSortControls}
 */
proto.ClientSortControls.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.addKeys(value);
                break;
            case 2:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setReverse(value);
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
proto.ClientSortControls.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.ClientSortControls.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientSortControls} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientSortControls.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getKeysList();
    if (f.length > 0) {
        writer.writeRepeatedString(1, f);
    }
    f = message.getReverse();
    if (f) {
        writer.writeBool(2, f);
    }
};
/**
 * repeated string keys = 1;
 * @return {!Array<string>}
 */
proto.ClientSortControls.prototype.getKeysList = function () {
    return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};
/** @param {!Array<string>} value */
proto.ClientSortControls.prototype.setKeysList = function (value) {
    jspb.Message.setField(this, 1, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.ClientSortControls.prototype.addKeys = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};
proto.ClientSortControls.prototype.clearKeysList = function () {
    this.setKeysList([]);
};
/**
 * optional bool reverse = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.ClientSortControls.prototype.getReverse = function () {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};
/** @param {boolean} value */
proto.ClientSortControls.prototype.setReverse = function (value) {
    jspb.Message.setProto3BooleanField(this, 2, value);
};
goog.object.extend(exports, proto);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50X2xpc3RfY29udHJvbF9wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2F3dG9vdGgtc2RrLXRzL2NsaWVudF9saXN0X2NvbnRyb2xfcGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsaUNBQWlDO0FBRWpDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztBQUV2QyxJQUFJLENBQUMsWUFBWSxDQUFDLDRCQUE0QixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCxJQUFJLENBQUMsWUFBWSxDQUFDLDRCQUE0QixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUU1RDs7Ozs7Ozs7O0dBU0c7QUFDSCxLQUFLLENBQUMsb0JBQW9CLEdBQUcsVUFBUyxRQUFRO0lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUM7QUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEQsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO0lBQzNCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsNEJBQTRCLENBQUM7Q0FDdkU7QUFHRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUU7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