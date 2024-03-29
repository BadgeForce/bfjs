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
goog.exportSymbol('proto.badgeforce_pb.Method', null, global);
goog.exportSymbol('proto.badgeforce_pb.RPCRequest', null, global);
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
proto.badgeforce_pb.RPCRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.badgeforce_pb.RPCRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.badgeforce_pb.RPCRequest.displayName = 'proto.badgeforce_pb.RPCRequest';
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
    proto.badgeforce_pb.RPCRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.badgeforce_pb.RPCRequest.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.badgeforce_pb.RPCRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.badgeforce_pb.RPCRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            method: jspb.Message.getFieldWithDefault(msg, 1, 0),
            params: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.badgeforce_pb.RPCRequest}
 */
proto.badgeforce_pb.RPCRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.badgeforce_pb.RPCRequest;
    return proto.badgeforce_pb.RPCRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.badgeforce_pb.RPCRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.badgeforce_pb.RPCRequest}
 */
proto.badgeforce_pb.RPCRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {!proto.badgeforce_pb.Method} */ (reader.readEnum());
                msg.setMethod(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setParams(value);
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
proto.badgeforce_pb.RPCRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.badgeforce_pb.RPCRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.badgeforce_pb.RPCRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.badgeforce_pb.RPCRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getMethod();
    if (f !== 0.0) {
        writer.writeEnum(1, f);
    }
    f = message.getParams();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
};
/**
 * optional Method method = 1;
 * @return {!proto.badgeforce_pb.Method}
 */
proto.badgeforce_pb.RPCRequest.prototype.getMethod = function () {
    return /** @type {!proto.badgeforce_pb.Method} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/** @param {!proto.badgeforce_pb.Method} value */
proto.badgeforce_pb.RPCRequest.prototype.setMethod = function (value) {
    jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string params = 2;
 * @return {string}
 */
proto.badgeforce_pb.RPCRequest.prototype.getParams = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.badgeforce_pb.RPCRequest.prototype.setParams = function (value) {
    jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * @enum {number}
 */
proto.badgeforce_pb.Method = {
    ISSUE: 0,
    REVOKE: 1,
    DELETE: 2,
    UPDATE: 3
};
goog.object.extend(exports, proto.badgeforce_pb);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbHNfcGF5bG9hZF9wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZ2VuZXJhdGVkL2NyZWRlbnRpYWxzX3BheWxvYWRfcGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsaUNBQWlDO0FBRWpDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztBQUV2QyxJQUFJLENBQUMsWUFBWSxDQUFDLDRCQUE0QixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCxJQUFJLENBQUMsWUFBWSxDQUFDLGdDQUFnQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVsRTs7Ozs7Ozs7O0dBU0c7QUFDSCxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxVQUFTLFFBQVE7SUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQztBQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtJQUMzQixLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsZ0NBQWdDLENBQUM7Q0FDL0U7QUFHRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUU7SUFDckM7Ozs7Ozs7OztPQVNHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxV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