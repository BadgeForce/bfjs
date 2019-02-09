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
goog.exportSymbol('proto.ClientPeersGetRequest', null, global);
goog.exportSymbol('proto.ClientPeersGetResponse', null, global);
goog.exportSymbol('proto.ClientPeersGetResponse.Status', null, global);
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
proto.ClientPeersGetRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClientPeersGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.ClientPeersGetRequest.displayName = 'proto.ClientPeersGetRequest';
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
    proto.ClientPeersGetRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.ClientPeersGetRequest.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.ClientPeersGetRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.ClientPeersGetRequest.toObject = function (includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientPeersGetRequest}
 */
proto.ClientPeersGetRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.ClientPeersGetRequest;
    return proto.ClientPeersGetRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientPeersGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientPeersGetRequest}
 */
proto.ClientPeersGetRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
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
proto.ClientPeersGetRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.ClientPeersGetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientPeersGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPeersGetRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
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
proto.ClientPeersGetResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.ClientPeersGetResponse.repeatedFields_, null);
};
goog.inherits(proto.ClientPeersGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.ClientPeersGetResponse.displayName = 'proto.ClientPeersGetResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ClientPeersGetResponse.repeatedFields_ = [2];
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
    proto.ClientPeersGetResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.ClientPeersGetResponse.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.ClientPeersGetResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.ClientPeersGetResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            status: jspb.Message.getFieldWithDefault(msg, 1, 0),
            peersList: jspb.Message.getRepeatedField(msg, 2)
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
 * @return {!proto.ClientPeersGetResponse}
 */
proto.ClientPeersGetResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.ClientPeersGetResponse;
    return proto.ClientPeersGetResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientPeersGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientPeersGetResponse}
 */
proto.ClientPeersGetResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {!proto.ClientPeersGetResponse.Status} */ (reader.readEnum());
                msg.setStatus(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.addPeers(value);
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
proto.ClientPeersGetResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.ClientPeersGetResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientPeersGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPeersGetResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getStatus();
    if (f !== 0.0) {
        writer.writeEnum(1, f);
    }
    f = message.getPeersList();
    if (f.length > 0) {
        writer.writeRepeatedString(2, f);
    }
};
/**
 * @enum {number}
 */
proto.ClientPeersGetResponse.Status = {
    STATUS_UNSET: 0,
    OK: 1,
    ERROR: 2
};
/**
 * optional Status status = 1;
 * @return {!proto.ClientPeersGetResponse.Status}
 */
proto.ClientPeersGetResponse.prototype.getStatus = function () {
    return /** @type {!proto.ClientPeersGetResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/** @param {!proto.ClientPeersGetResponse.Status} value */
proto.ClientPeersGetResponse.prototype.setStatus = function (value) {
    jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * repeated string peers = 2;
 * @return {!Array<string>}
 */
proto.ClientPeersGetResponse.prototype.getPeersList = function () {
    return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};
/** @param {!Array<string>} value */
proto.ClientPeersGetResponse.prototype.setPeersList = function (value) {
    jspb.Message.setField(this, 2, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.ClientPeersGetResponse.prototype.addPeers = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};
proto.ClientPeersGetResponse.prototype.clearPeersList = function () {
    this.setPeersList([]);
};
goog.object.extend(exports, proto);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50X3BlZXJzX3BiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zYXd0b290aC1zZGstdHMvY2xpZW50X3BlZXJzX3BiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNILGlDQUFpQztBQUVqQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7QUFFdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFdkU7Ozs7Ozs7OztHQVNHO0FBQ0gsS0FBSyxDQUFDLHFCQUFxQixHQUFHLFVBQVMsUUFBUTtJQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDO0FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtJQUMzQixLQUFLLENBQUMscUJBQXFCLENBQUMsV0FBVyxHQUFHLDZCQUE2QixDQUFDO0NBQ3pFO0FBR0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFO0lBQ3JDOzs7Ozs7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