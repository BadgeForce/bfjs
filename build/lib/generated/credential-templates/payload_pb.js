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
var template_pb = require('./template_pb.js');
goog.exportSymbol('proto.template_pb.Create', null, global);
goog.exportSymbol('proto.template_pb.Delete', null, global);
goog.exportSymbol('proto.template_pb.Method', null, global);
goog.exportSymbol('proto.template_pb.RPCRequest', null, global);
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
proto.template_pb.RPCRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, proto.template_pb.RPCRequest.oneofGroups_);
};
goog.inherits(proto.template_pb.RPCRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.template_pb.RPCRequest.displayName = 'proto.template_pb.RPCRequest';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.template_pb.RPCRequest.oneofGroups_ = [[1, 2]];
/**
 * @enum {number}
 */
proto.template_pb.RPCRequest.MethodCase = {
    METHOD_NOT_SET: 0,
    CREATE: 1,
    DELETE: 2
};
/**
 * @return {proto.template_pb.RPCRequest.MethodCase}
 */
proto.template_pb.RPCRequest.prototype.getMethodCase = function () {
    return /** @type {proto.template_pb.RPCRequest.MethodCase} */ (jspb.Message.computeOneofCase(this, proto.template_pb.RPCRequest.oneofGroups_[0]));
};
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
    proto.template_pb.RPCRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.template_pb.RPCRequest.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.template_pb.RPCRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.template_pb.RPCRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            create: (f = msg.getCreate()) && proto.template_pb.Create.toObject(includeInstance, f),
            pb_delete: (f = msg.getDelete()) && proto.template_pb.Delete.toObject(includeInstance, f)
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
 * @return {!proto.template_pb.RPCRequest}
 */
proto.template_pb.RPCRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.template_pb.RPCRequest;
    return proto.template_pb.RPCRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.template_pb.RPCRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.template_pb.RPCRequest}
 */
proto.template_pb.RPCRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.template_pb.Create;
                reader.readMessage(value, proto.template_pb.Create.deserializeBinaryFromReader);
                msg.setCreate(value);
                break;
            case 2:
                var value = new proto.template_pb.Delete;
                reader.readMessage(value, proto.template_pb.Delete.deserializeBinaryFromReader);
                msg.setDelete(value);
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
proto.template_pb.RPCRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.template_pb.RPCRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.template_pb.RPCRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template_pb.RPCRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getCreate();
    if (f != null) {
        writer.writeMessage(1, f, proto.template_pb.Create.serializeBinaryToWriter);
    }
    f = message.getDelete();
    if (f != null) {
        writer.writeMessage(2, f, proto.template_pb.Delete.serializeBinaryToWriter);
    }
};
/**
 * optional Create create = 1;
 * @return {?proto.template_pb.Create}
 */
proto.template_pb.RPCRequest.prototype.getCreate = function () {
    return /** @type{?proto.template_pb.Create} */ (jspb.Message.getWrapperField(this, proto.template_pb.Create, 1));
};
/** @param {?proto.template_pb.Create|undefined} value */
proto.template_pb.RPCRequest.prototype.setCreate = function (value) {
    jspb.Message.setOneofWrapperField(this, 1, proto.template_pb.RPCRequest.oneofGroups_[0], value);
};
proto.template_pb.RPCRequest.prototype.clearCreate = function () {
    this.setCreate(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.template_pb.RPCRequest.prototype.hasCreate = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * optional Delete delete = 2;
 * @return {?proto.template_pb.Delete}
 */
proto.template_pb.RPCRequest.prototype.getDelete = function () {
    return /** @type{?proto.template_pb.Delete} */ (jspb.Message.getWrapperField(this, proto.template_pb.Delete, 2));
};
/** @param {?proto.template_pb.Delete|undefined} value */
proto.template_pb.RPCRequest.prototype.setDelete = function (value) {
    jspb.Message.setOneofWrapperField(this, 2, proto.template_pb.RPCRequest.oneofGroups_[0], value);
};
proto.template_pb.RPCRequest.prototype.clearDelete = function () {
    this.setDelete(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.template_pb.RPCRequest.prototype.hasDelete = function () {
    return jspb.Message.getField(this, 2) != null;
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
proto.template_pb.Create = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.template_pb.Create, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.template_pb.Create.displayName = 'proto.template_pb.Create';
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
    proto.template_pb.Create.prototype.toObject = function (opt_includeInstance) {
        return proto.template_pb.Create.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.template_pb.Create} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.template_pb.Create.toObject = function (includeInstance, msg) {
        var f, obj = {
            params: (f = msg.getParams()) && template_pb.Template.toObject(includeInstance, f)
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
 * @return {!proto.template_pb.Create}
 */
proto.template_pb.Create.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.template_pb.Create;
    return proto.template_pb.Create.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.template_pb.Create} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.template_pb.Create}
 */
proto.template_pb.Create.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new template_pb.Template;
                reader.readMessage(value, template_pb.Template.deserializeBinaryFromReader);
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
proto.template_pb.Create.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.template_pb.Create.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.template_pb.Create} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template_pb.Create.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getParams();
    if (f != null) {
        writer.writeMessage(1, f, template_pb.Template.serializeBinaryToWriter);
    }
};
/**
 * optional Template params = 1;
 * @return {?proto.template_pb.Template}
 */
proto.template_pb.Create.prototype.getParams = function () {
    return /** @type{?proto.template_pb.Template} */ (jspb.Message.getWrapperField(this, template_pb.Template, 1));
};
/** @param {?proto.template_pb.Template|undefined} value */
proto.template_pb.Create.prototype.setParams = function (value) {
    jspb.Message.setWrapperField(this, 1, value);
};
proto.template_pb.Create.prototype.clearParams = function () {
    this.setParams(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.template_pb.Create.prototype.hasParams = function () {
    return jspb.Message.getField(this, 1) != null;
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
proto.template_pb.Delete = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.template_pb.Delete.repeatedFields_, null);
};
goog.inherits(proto.template_pb.Delete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.template_pb.Delete.displayName = 'proto.template_pb.Delete';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.template_pb.Delete.repeatedFields_ = [1];
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
    proto.template_pb.Delete.prototype.toObject = function (opt_includeInstance) {
        return proto.template_pb.Delete.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.template_pb.Delete} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.template_pb.Delete.toObject = function (includeInstance, msg) {
        var f, obj = {
            addressesList: jspb.Message.getRepeatedField(msg, 1)
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
 * @return {!proto.template_pb.Delete}
 */
proto.template_pb.Delete.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.template_pb.Delete;
    return proto.template_pb.Delete.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.template_pb.Delete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.template_pb.Delete}
 */
proto.template_pb.Delete.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.addAddresses(value);
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
proto.template_pb.Delete.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.template_pb.Delete.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.template_pb.Delete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template_pb.Delete.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getAddressesList();
    if (f.length > 0) {
        writer.writeRepeatedString(1, f);
    }
};
/**
 * repeated string addresses = 1;
 * @return {!Array<string>}
 */
proto.template_pb.Delete.prototype.getAddressesList = function () {
    return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};
/** @param {!Array<string>} value */
proto.template_pb.Delete.prototype.setAddressesList = function (value) {
    jspb.Message.setField(this, 1, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.template_pb.Delete.prototype.addAddresses = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};
proto.template_pb.Delete.prototype.clearAddressesList = function () {
    this.setAddressesList([]);
};
/**
 * @enum {number}
 */
proto.template_pb.Method = {
    CREATE: 0,
    UPDATE: 1,
    DELETE: 2
};
goog.object.extend(exports, proto.template_pb);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bG9hZF9wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ2VuZXJhdGVkL2NyZWRlbnRpYWwtdGVtcGxhdGVzL3BheWxvYWRfcGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsaUNBQWlDO0FBRWpDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztBQUV2QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLDhCQUE4QixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVoRTs7Ozs7Ozs7O0dBU0c7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxVQUFTLFFBQVE7SUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xHLENBQUMsQ0FBQztBQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtJQUMzQixLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsOEJBQThCLENBQUM7Q0FDM0U7QUFDRDs7Ozs7OztHQU9HO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVwRDs7R0FFRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRztJQUN4QyxjQUFjLEVBQUUsQ0FBQztJQUNqQixNQUFNLEVBQUUsQ0FBQztJQUNULE1BQU0sRUFBRSxDQUFDO0NBQ1YsQ0FBQztBQUVGOztHQUVHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRztJQUNyRCxPQUFPLHNEQUFzRCxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuSixDQUFDLENBQUM7QUFJRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUU7SUFDckM7Ozs7Ozs7OztPQVNHO0lBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFTLG1CQUFtQjtRQUM1RSxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUM7SUFHRjs7Ozs7Ozs7T0FRRztJQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxVQUFTLGVBQWUsRUFBRSxHQUFHO1FBQ25FLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRztZQUNYLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztZQUN0RixTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDMUYsQ0FBQztRQUVGLElBQUksZUFBZSxFQUFFO1lBQ25CLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7U0FDaEM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQztDQUNEO0FBR0Q7Ozs7R0FJRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixHQUFHLFVBQVMsS0FBSztJQUM3RCxJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUMzQyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvRSxDQUFDLENBQUM7QUFHRjs7Ozs7O0dBTUc7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsR0FBRyxVQUFTLEdBQUcsRUFBRSxNQUFNO0lBQzdFLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3ZCLE1BQU07U0FDUDtRQUNELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxRQUFRLEtBQUssRUFBRTtZQUNmLEtBQUssQ0FBQztnQkFDSixJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUN6QyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2dCQUMvRSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQy9FLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU07WUFDUjtnQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLE1BQU07U0FDUDtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFHRjs7O0dBR0c7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHO0lBQ3ZELElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRSxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNsQyxDQUFDLENBQUM7QUFHRjs7Ozs7O0dBTUc7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsR0FBRyxVQUFTLE9BQU8sRUFBRSxNQUFNO0lBQzdFLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUNsQixDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3hCLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNiLE1BQU0sQ0FBQyxZQUFZLENBQ2pCLENBQUMsRUFDRCxDQUFDLEVBQ0QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQ2pELENBQUM7S0FDSDtJQUNELENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDeEIsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ2IsTUFBTSxDQUFDLFlBQVksQ0FDakIsQ0FBQyxFQUNELENBQUMsRUFDRCxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FDakQsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDO0FBR0Y7OztHQUdHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRztJQUNqRCxPQUFPLHVDQUF1QyxDQUFDLENBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQztBQUdGLHlEQUF5RDtBQUN6RCxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVMsS0FBSztJQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xHLENBQUMsQ0FBQztBQUdGLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUc7SUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUM7QUFHRjs7O0dBR0c7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHO0lBQ2pELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNoRCxDQUFDLENBQUM7QUFHRjs7O0dBR0c7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHO0lBQ2pELE9BQU8sdUNBQXVDLENBQUMsQ0FDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckUsQ0FBQyxDQUFDO0FBR0YseURBQXlEO0FBQ3pELEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBUyxLQUFLO0lBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEcsQ0FBQyxDQUFDO0FBR0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRztJQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQztBQUdGOzs7R0FHRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUc7SUFDakQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ2hELENBQUMsQ0FBQztBQUlGOzs7Ozs7Ozs7R0FTRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFVBQVMsUUFBUTtJQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDO0FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEQsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO0lBQzNCLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztDQUNuRTtBQUdELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtJQUNyQzs7Ozs7Ozs7O09BU0c7SUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVMsbUJBQW1CO1FBQ3hFLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQztJQUdGOzs7Ozs7OztPQVFHO0lBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVMsZUFBZSxFQUFFLEdBQUc7UUFDL0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHO1lBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDbkYsQ0FBQztRQUVGLElBQUksZUFBZSxFQUFFO1lBQ25CLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7U0FDaEM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQztDQUNEO0FBR0Q7Ozs7R0FJRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVMsS0FBSztJQUN6RCxJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUN2QyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzRSxDQUFDLENBQUM7QUFHRjs7Ozs7O0dBTUc7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsR0FBRyxVQUFTLEdBQUcsRUFBRSxNQUFNO0lBQ3pFLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3ZCLE1BQU07U0FDUDtRQUNELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxRQUFRLEtBQUssRUFBRTtZQUNmLEtBQUssQ0FBQztnQkFDSixJQUFJLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDM0UsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsTUFBTTtZQUNSO2dCQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtTQUNQO0tBQ0Y7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUdGOzs7R0FHRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUc7SUFDbkQsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ2xDLENBQUMsQ0FBQztBQUdGOzs7Ozs7R0FNRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLHVCQUF1QixHQUFHLFVBQVMsT0FBTyxFQUFFLE1BQU07SUFDekUsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ2xCLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDeEIsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ2IsTUFBTSxDQUFDLFlBQVksQ0FDakIsQ0FBQyxFQUNELENBQUMsRUFDRCxXQUFXLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUM3QyxDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUM7QUFHRjs7O0dBR0c7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHO0lBQzdDLE9BQU8seUNBQXlDLENBQUMsQ0FDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUM7QUFHRiwyREFBMkQ7QUFDM0QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFTLEtBQUs7SUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFHRixLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHO0lBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBR0Y7OztHQUdHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRztJQUM3QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBSUY7Ozs7Ozs7OztHQVNHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsVUFBUyxRQUFRO0lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqRyxDQUFDLENBQUM7QUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0RCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7SUFDM0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO0NBQ25FO0FBQ0Q7Ozs7R0FJRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBSS9DLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtJQUNyQzs7Ozs7Ozs7O09BU0c7SUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVMsbUJBQW1CO1FBQ3hFLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQztJQUdGOzs7Ozs7OztPQVFHO0lBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVMsZUFBZSxFQUFFLEdBQUc7UUFDL0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHO1lBQ1gsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUNyRCxDQUFDO1FBRUYsSUFBSSxlQUFlLEVBQUU7WUFDbkIsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztTQUNoQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0NBQ0Q7QUFHRDs7OztHQUlHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsVUFBUyxLQUFLO0lBQ3pELElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNFLENBQUMsQ0FBQztBQUdGOzs7Ozs7R0FNRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLDJCQUEyQixHQUFHLFVBQVMsR0FBRyxFQUFFLE1BQU07SUFDekUsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDekIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDdkIsTUFBTTtTQUNQO1FBQ0QsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLFFBQVEsS0FBSyxFQUFFO1lBQ2YsS0FBSyxDQUFDO2dCQUNKLElBQUksS0FBSyxHQUFHLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3hELEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLE1BQU07WUFDUjtnQkFDRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLE1BQU07U0FDUDtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFHRjs7O0dBR0c7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHO0lBQ25ELElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNsQyxDQUFDLENBQUM7QUFHRjs7Ozs7O0dBTUc7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsR0FBRyxVQUFTLE9BQU8sRUFBRSxNQUFNO0lBQ3pFLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUNsQixDQUFDLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDL0IsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNoQixNQUFNLENBQUMsbUJBQW1CLENBQ3hCLENBQUMsRUFDRCxDQUFDLENBQ0YsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDO0FBR0Y7OztHQUdHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHO0lBQ3BELE9BQU8sNkJBQTZCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLENBQUMsQ0FBQztBQUdGLG9DQUFvQztBQUNwQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsVUFBUyxLQUFLO0lBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQztBQUdGOzs7R0FHRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBUyxLQUFLLEVBQUUsU0FBUztJQUN6RSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQztBQUdGLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRztJQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBR0Y7O0dBRUc7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRztJQUN6QixNQUFNLEVBQUUsQ0FBQztJQUNULE1BQU0sRUFBRSxDQUFDO0lBQ1QsTUFBTSxFQUFFLENBQUM7Q0FDVixDQUFDO0FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyJ9