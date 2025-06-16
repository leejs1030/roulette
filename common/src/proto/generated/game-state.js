/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const gamestate = $root.gamestate = (() => {

    /**
     * Namespace gamestate.
     * @exports gamestate
     * @namespace
     */
    const gamestate = {};

    /**
     * SkillType enum.
     * @name gamestate.SkillType
     * @enum {number}
     * @property {number} SKILL_TYPE_IMPACT=0 SKILL_TYPE_IMPACT value
     * @property {number} SKILL_TYPE_DUMMY_MARBLE=1 SKILL_TYPE_DUMMY_MARBLE value
     */
    gamestate.SkillType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SKILL_TYPE_IMPACT"] = 0;
        values[valuesById[1] = "SKILL_TYPE_DUMMY_MARBLE"] = 1;
        return values;
    })();

    gamestate.Position = (function() {

        /**
         * Properties of a Position.
         * @memberof gamestate
         * @interface IPosition
         * @property {number|null} [x] Position x
         * @property {number|null} [y] Position y
         */

        /**
         * Constructs a new Position.
         * @memberof gamestate
         * @classdesc Represents a Position.
         * @implements IPosition
         * @constructor
         * @param {gamestate.IPosition=} [properties] Properties to set
         */
        function Position(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Position x.
         * @member {number} x
         * @memberof gamestate.Position
         * @instance
         */
        Position.prototype.x = 0;

        /**
         * Position y.
         * @member {number} y
         * @memberof gamestate.Position
         * @instance
         */
        Position.prototype.y = 0;

        /**
         * Creates a new Position instance using the specified properties.
         * @function create
         * @memberof gamestate.Position
         * @static
         * @param {gamestate.IPosition=} [properties] Properties to set
         * @returns {gamestate.Position} Position instance
         */
        Position.create = function create(properties) {
            return new Position(properties);
        };

        /**
         * Encodes the specified Position message. Does not implicitly {@link gamestate.Position.verify|verify} messages.
         * @function encode
         * @memberof gamestate.Position
         * @static
         * @param {gamestate.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            return writer;
        };

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link gamestate.Position.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.Position
         * @static
         * @param {gamestate.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.Position();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.double();
                        break;
                    }
                case 2: {
                        message.y = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Position message.
         * @function verify
         * @memberof gamestate.Position
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Position.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.Position
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.Position} Position
         */
        Position.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.Position)
                return object;
            let message = new $root.gamestate.Position();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.Position
         * @static
         * @param {gamestate.Position} message Position
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Position.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this Position to JSON.
         * @function toJSON
         * @memberof gamestate.Position
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Position.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Position
         * @function getTypeUrl
         * @memberof gamestate.Position
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Position.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.Position";
        };

        return Position;
    })();

    /**
     * EntityShapeType enum.
     * @name gamestate.EntityShapeType
     * @enum {number}
     * @property {number} ENTITY_SHAPE_BOX=0 ENTITY_SHAPE_BOX value
     * @property {number} ENTITY_SHAPE_CIRCLE=1 ENTITY_SHAPE_CIRCLE value
     * @property {number} ENTITY_SHAPE_POLYLINE=2 ENTITY_SHAPE_POLYLINE value
     */
    gamestate.EntityShapeType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ENTITY_SHAPE_BOX"] = 0;
        values[valuesById[1] = "ENTITY_SHAPE_CIRCLE"] = 1;
        values[valuesById[2] = "ENTITY_SHAPE_POLYLINE"] = 2;
        return values;
    })();

    gamestate.EntityBoxShape = (function() {

        /**
         * Properties of an EntityBoxShape.
         * @memberof gamestate
         * @interface IEntityBoxShape
         * @property {gamestate.EntityShapeType|null} [type] EntityBoxShape type
         * @property {number|null} [width] EntityBoxShape width
         * @property {number|null} [height] EntityBoxShape height
         * @property {number|null} [rotation] EntityBoxShape rotation
         */

        /**
         * Constructs a new EntityBoxShape.
         * @memberof gamestate
         * @classdesc Represents an EntityBoxShape.
         * @implements IEntityBoxShape
         * @constructor
         * @param {gamestate.IEntityBoxShape=} [properties] Properties to set
         */
        function EntityBoxShape(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityBoxShape type.
         * @member {gamestate.EntityShapeType} type
         * @memberof gamestate.EntityBoxShape
         * @instance
         */
        EntityBoxShape.prototype.type = 0;

        /**
         * EntityBoxShape width.
         * @member {number} width
         * @memberof gamestate.EntityBoxShape
         * @instance
         */
        EntityBoxShape.prototype.width = 0;

        /**
         * EntityBoxShape height.
         * @member {number} height
         * @memberof gamestate.EntityBoxShape
         * @instance
         */
        EntityBoxShape.prototype.height = 0;

        /**
         * EntityBoxShape rotation.
         * @member {number} rotation
         * @memberof gamestate.EntityBoxShape
         * @instance
         */
        EntityBoxShape.prototype.rotation = 0;

        /**
         * Creates a new EntityBoxShape instance using the specified properties.
         * @function create
         * @memberof gamestate.EntityBoxShape
         * @static
         * @param {gamestate.IEntityBoxShape=} [properties] Properties to set
         * @returns {gamestate.EntityBoxShape} EntityBoxShape instance
         */
        EntityBoxShape.create = function create(properties) {
            return new EntityBoxShape(properties);
        };

        /**
         * Encodes the specified EntityBoxShape message. Does not implicitly {@link gamestate.EntityBoxShape.verify|verify} messages.
         * @function encode
         * @memberof gamestate.EntityBoxShape
         * @static
         * @param {gamestate.IEntityBoxShape} message EntityBoxShape message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityBoxShape.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.height);
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.rotation);
            return writer;
        };

        /**
         * Encodes the specified EntityBoxShape message, length delimited. Does not implicitly {@link gamestate.EntityBoxShape.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.EntityBoxShape
         * @static
         * @param {gamestate.IEntityBoxShape} message EntityBoxShape message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityBoxShape.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityBoxShape message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.EntityBoxShape
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.EntityBoxShape} EntityBoxShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityBoxShape.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.EntityBoxShape();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.width = reader.double();
                        break;
                    }
                case 3: {
                        message.height = reader.double();
                        break;
                    }
                case 4: {
                        message.rotation = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntityBoxShape message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.EntityBoxShape
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.EntityBoxShape} EntityBoxShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityBoxShape.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityBoxShape message.
         * @function verify
         * @memberof gamestate.EntityBoxShape
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityBoxShape.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.width != null && message.hasOwnProperty("width"))
                if (typeof message.width !== "number")
                    return "width: number expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (typeof message.height !== "number")
                    return "height: number expected";
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (typeof message.rotation !== "number")
                    return "rotation: number expected";
            return null;
        };

        /**
         * Creates an EntityBoxShape message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.EntityBoxShape
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.EntityBoxShape} EntityBoxShape
         */
        EntityBoxShape.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.EntityBoxShape)
                return object;
            let message = new $root.gamestate.EntityBoxShape();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ENTITY_SHAPE_BOX":
            case 0:
                message.type = 0;
                break;
            case "ENTITY_SHAPE_CIRCLE":
            case 1:
                message.type = 1;
                break;
            case "ENTITY_SHAPE_POLYLINE":
            case 2:
                message.type = 2;
                break;
            }
            if (object.width != null)
                message.width = Number(object.width);
            if (object.height != null)
                message.height = Number(object.height);
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            return message;
        };

        /**
         * Creates a plain object from an EntityBoxShape message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.EntityBoxShape
         * @static
         * @param {gamestate.EntityBoxShape} message EntityBoxShape
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityBoxShape.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "ENTITY_SHAPE_BOX" : 0;
                object.width = 0;
                object.height = 0;
                object.rotation = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.gamestate.EntityShapeType[message.type] === undefined ? message.type : $root.gamestate.EntityShapeType[message.type] : message.type;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
            return object;
        };

        /**
         * Converts this EntityBoxShape to JSON.
         * @function toJSON
         * @memberof gamestate.EntityBoxShape
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityBoxShape.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntityBoxShape
         * @function getTypeUrl
         * @memberof gamestate.EntityBoxShape
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntityBoxShape.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.EntityBoxShape";
        };

        return EntityBoxShape;
    })();

    gamestate.EntityCircleShape = (function() {

        /**
         * Properties of an EntityCircleShape.
         * @memberof gamestate
         * @interface IEntityCircleShape
         * @property {gamestate.EntityShapeType|null} [type] EntityCircleShape type
         * @property {number|null} [radius] EntityCircleShape radius
         */

        /**
         * Constructs a new EntityCircleShape.
         * @memberof gamestate
         * @classdesc Represents an EntityCircleShape.
         * @implements IEntityCircleShape
         * @constructor
         * @param {gamestate.IEntityCircleShape=} [properties] Properties to set
         */
        function EntityCircleShape(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityCircleShape type.
         * @member {gamestate.EntityShapeType} type
         * @memberof gamestate.EntityCircleShape
         * @instance
         */
        EntityCircleShape.prototype.type = 0;

        /**
         * EntityCircleShape radius.
         * @member {number} radius
         * @memberof gamestate.EntityCircleShape
         * @instance
         */
        EntityCircleShape.prototype.radius = 0;

        /**
         * Creates a new EntityCircleShape instance using the specified properties.
         * @function create
         * @memberof gamestate.EntityCircleShape
         * @static
         * @param {gamestate.IEntityCircleShape=} [properties] Properties to set
         * @returns {gamestate.EntityCircleShape} EntityCircleShape instance
         */
        EntityCircleShape.create = function create(properties) {
            return new EntityCircleShape(properties);
        };

        /**
         * Encodes the specified EntityCircleShape message. Does not implicitly {@link gamestate.EntityCircleShape.verify|verify} messages.
         * @function encode
         * @memberof gamestate.EntityCircleShape
         * @static
         * @param {gamestate.IEntityCircleShape} message EntityCircleShape message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityCircleShape.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.radius);
            return writer;
        };

        /**
         * Encodes the specified EntityCircleShape message, length delimited. Does not implicitly {@link gamestate.EntityCircleShape.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.EntityCircleShape
         * @static
         * @param {gamestate.IEntityCircleShape} message EntityCircleShape message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityCircleShape.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityCircleShape message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.EntityCircleShape
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.EntityCircleShape} EntityCircleShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityCircleShape.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.EntityCircleShape();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.radius = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntityCircleShape message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.EntityCircleShape
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.EntityCircleShape} EntityCircleShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityCircleShape.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityCircleShape message.
         * @function verify
         * @memberof gamestate.EntityCircleShape
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityCircleShape.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.radius != null && message.hasOwnProperty("radius"))
                if (typeof message.radius !== "number")
                    return "radius: number expected";
            return null;
        };

        /**
         * Creates an EntityCircleShape message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.EntityCircleShape
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.EntityCircleShape} EntityCircleShape
         */
        EntityCircleShape.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.EntityCircleShape)
                return object;
            let message = new $root.gamestate.EntityCircleShape();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ENTITY_SHAPE_BOX":
            case 0:
                message.type = 0;
                break;
            case "ENTITY_SHAPE_CIRCLE":
            case 1:
                message.type = 1;
                break;
            case "ENTITY_SHAPE_POLYLINE":
            case 2:
                message.type = 2;
                break;
            }
            if (object.radius != null)
                message.radius = Number(object.radius);
            return message;
        };

        /**
         * Creates a plain object from an EntityCircleShape message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.EntityCircleShape
         * @static
         * @param {gamestate.EntityCircleShape} message EntityCircleShape
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityCircleShape.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "ENTITY_SHAPE_BOX" : 0;
                object.radius = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.gamestate.EntityShapeType[message.type] === undefined ? message.type : $root.gamestate.EntityShapeType[message.type] : message.type;
            if (message.radius != null && message.hasOwnProperty("radius"))
                object.radius = options.json && !isFinite(message.radius) ? String(message.radius) : message.radius;
            return object;
        };

        /**
         * Converts this EntityCircleShape to JSON.
         * @function toJSON
         * @memberof gamestate.EntityCircleShape
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityCircleShape.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntityCircleShape
         * @function getTypeUrl
         * @memberof gamestate.EntityCircleShape
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntityCircleShape.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.EntityCircleShape";
        };

        return EntityCircleShape;
    })();

    gamestate.PolylinePoint = (function() {

        /**
         * Properties of a PolylinePoint.
         * @memberof gamestate
         * @interface IPolylinePoint
         * @property {number|null} [x] PolylinePoint x
         * @property {number|null} [y] PolylinePoint y
         */

        /**
         * Constructs a new PolylinePoint.
         * @memberof gamestate
         * @classdesc Represents a PolylinePoint.
         * @implements IPolylinePoint
         * @constructor
         * @param {gamestate.IPolylinePoint=} [properties] Properties to set
         */
        function PolylinePoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PolylinePoint x.
         * @member {number} x
         * @memberof gamestate.PolylinePoint
         * @instance
         */
        PolylinePoint.prototype.x = 0;

        /**
         * PolylinePoint y.
         * @member {number} y
         * @memberof gamestate.PolylinePoint
         * @instance
         */
        PolylinePoint.prototype.y = 0;

        /**
         * Creates a new PolylinePoint instance using the specified properties.
         * @function create
         * @memberof gamestate.PolylinePoint
         * @static
         * @param {gamestate.IPolylinePoint=} [properties] Properties to set
         * @returns {gamestate.PolylinePoint} PolylinePoint instance
         */
        PolylinePoint.create = function create(properties) {
            return new PolylinePoint(properties);
        };

        /**
         * Encodes the specified PolylinePoint message. Does not implicitly {@link gamestate.PolylinePoint.verify|verify} messages.
         * @function encode
         * @memberof gamestate.PolylinePoint
         * @static
         * @param {gamestate.IPolylinePoint} message PolylinePoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PolylinePoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            return writer;
        };

        /**
         * Encodes the specified PolylinePoint message, length delimited. Does not implicitly {@link gamestate.PolylinePoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.PolylinePoint
         * @static
         * @param {gamestate.IPolylinePoint} message PolylinePoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PolylinePoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PolylinePoint message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.PolylinePoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.PolylinePoint} PolylinePoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PolylinePoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.PolylinePoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.double();
                        break;
                    }
                case 2: {
                        message.y = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PolylinePoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.PolylinePoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.PolylinePoint} PolylinePoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PolylinePoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PolylinePoint message.
         * @function verify
         * @memberof gamestate.PolylinePoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PolylinePoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        /**
         * Creates a PolylinePoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.PolylinePoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.PolylinePoint} PolylinePoint
         */
        PolylinePoint.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.PolylinePoint)
                return object;
            let message = new $root.gamestate.PolylinePoint();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a PolylinePoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.PolylinePoint
         * @static
         * @param {gamestate.PolylinePoint} message PolylinePoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PolylinePoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this PolylinePoint to JSON.
         * @function toJSON
         * @memberof gamestate.PolylinePoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PolylinePoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PolylinePoint
         * @function getTypeUrl
         * @memberof gamestate.PolylinePoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PolylinePoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.PolylinePoint";
        };

        return PolylinePoint;
    })();

    gamestate.EntityPolylineShape = (function() {

        /**
         * Properties of an EntityPolylineShape.
         * @memberof gamestate
         * @interface IEntityPolylineShape
         * @property {gamestate.EntityShapeType|null} [type] EntityPolylineShape type
         * @property {number|null} [rotation] EntityPolylineShape rotation
         * @property {Array.<gamestate.IPolylinePoint>|null} [points] EntityPolylineShape points
         */

        /**
         * Constructs a new EntityPolylineShape.
         * @memberof gamestate
         * @classdesc Represents an EntityPolylineShape.
         * @implements IEntityPolylineShape
         * @constructor
         * @param {gamestate.IEntityPolylineShape=} [properties] Properties to set
         */
        function EntityPolylineShape(properties) {
            this.points = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityPolylineShape type.
         * @member {gamestate.EntityShapeType} type
         * @memberof gamestate.EntityPolylineShape
         * @instance
         */
        EntityPolylineShape.prototype.type = 0;

        /**
         * EntityPolylineShape rotation.
         * @member {number} rotation
         * @memberof gamestate.EntityPolylineShape
         * @instance
         */
        EntityPolylineShape.prototype.rotation = 0;

        /**
         * EntityPolylineShape points.
         * @member {Array.<gamestate.IPolylinePoint>} points
         * @memberof gamestate.EntityPolylineShape
         * @instance
         */
        EntityPolylineShape.prototype.points = $util.emptyArray;

        /**
         * Creates a new EntityPolylineShape instance using the specified properties.
         * @function create
         * @memberof gamestate.EntityPolylineShape
         * @static
         * @param {gamestate.IEntityPolylineShape=} [properties] Properties to set
         * @returns {gamestate.EntityPolylineShape} EntityPolylineShape instance
         */
        EntityPolylineShape.create = function create(properties) {
            return new EntityPolylineShape(properties);
        };

        /**
         * Encodes the specified EntityPolylineShape message. Does not implicitly {@link gamestate.EntityPolylineShape.verify|verify} messages.
         * @function encode
         * @memberof gamestate.EntityPolylineShape
         * @static
         * @param {gamestate.IEntityPolylineShape} message EntityPolylineShape message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityPolylineShape.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.rotation);
            if (message.points != null && message.points.length)
                for (let i = 0; i < message.points.length; ++i)
                    $root.gamestate.PolylinePoint.encode(message.points[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EntityPolylineShape message, length delimited. Does not implicitly {@link gamestate.EntityPolylineShape.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.EntityPolylineShape
         * @static
         * @param {gamestate.IEntityPolylineShape} message EntityPolylineShape message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityPolylineShape.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityPolylineShape message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.EntityPolylineShape
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.EntityPolylineShape} EntityPolylineShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityPolylineShape.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.EntityPolylineShape();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.rotation = reader.double();
                        break;
                    }
                case 3: {
                        if (!(message.points && message.points.length))
                            message.points = [];
                        message.points.push($root.gamestate.PolylinePoint.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntityPolylineShape message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.EntityPolylineShape
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.EntityPolylineShape} EntityPolylineShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityPolylineShape.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityPolylineShape message.
         * @function verify
         * @memberof gamestate.EntityPolylineShape
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityPolylineShape.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (typeof message.rotation !== "number")
                    return "rotation: number expected";
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (let i = 0; i < message.points.length; ++i) {
                    let error = $root.gamestate.PolylinePoint.verify(message.points[i]);
                    if (error)
                        return "points." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EntityPolylineShape message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.EntityPolylineShape
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.EntityPolylineShape} EntityPolylineShape
         */
        EntityPolylineShape.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.EntityPolylineShape)
                return object;
            let message = new $root.gamestate.EntityPolylineShape();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ENTITY_SHAPE_BOX":
            case 0:
                message.type = 0;
                break;
            case "ENTITY_SHAPE_CIRCLE":
            case 1:
                message.type = 1;
                break;
            case "ENTITY_SHAPE_POLYLINE":
            case 2:
                message.type = 2;
                break;
            }
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".gamestate.EntityPolylineShape.points: array expected");
                message.points = [];
                for (let i = 0; i < object.points.length; ++i) {
                    if (typeof object.points[i] !== "object")
                        throw TypeError(".gamestate.EntityPolylineShape.points: object expected");
                    message.points[i] = $root.gamestate.PolylinePoint.fromObject(object.points[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EntityPolylineShape message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.EntityPolylineShape
         * @static
         * @param {gamestate.EntityPolylineShape} message EntityPolylineShape
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityPolylineShape.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.points = [];
            if (options.defaults) {
                object.type = options.enums === String ? "ENTITY_SHAPE_BOX" : 0;
                object.rotation = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.gamestate.EntityShapeType[message.type] === undefined ? message.type : $root.gamestate.EntityShapeType[message.type] : message.type;
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
            if (message.points && message.points.length) {
                object.points = [];
                for (let j = 0; j < message.points.length; ++j)
                    object.points[j] = $root.gamestate.PolylinePoint.toObject(message.points[j], options);
            }
            return object;
        };

        /**
         * Converts this EntityPolylineShape to JSON.
         * @function toJSON
         * @memberof gamestate.EntityPolylineShape
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityPolylineShape.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntityPolylineShape
         * @function getTypeUrl
         * @memberof gamestate.EntityPolylineShape
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntityPolylineShape.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.EntityPolylineShape";
        };

        return EntityPolylineShape;
    })();

    gamestate.EntityShape = (function() {

        /**
         * Properties of an EntityShape.
         * @memberof gamestate
         * @interface IEntityShape
         * @property {gamestate.IEntityBoxShape|null} [boxShape] EntityShape boxShape
         * @property {gamestate.IEntityCircleShape|null} [circleShape] EntityShape circleShape
         * @property {gamestate.IEntityPolylineShape|null} [polylineShape] EntityShape polylineShape
         */

        /**
         * Constructs a new EntityShape.
         * @memberof gamestate
         * @classdesc Represents an EntityShape.
         * @implements IEntityShape
         * @constructor
         * @param {gamestate.IEntityShape=} [properties] Properties to set
         */
        function EntityShape(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityShape boxShape.
         * @member {gamestate.IEntityBoxShape|null|undefined} boxShape
         * @memberof gamestate.EntityShape
         * @instance
         */
        EntityShape.prototype.boxShape = null;

        /**
         * EntityShape circleShape.
         * @member {gamestate.IEntityCircleShape|null|undefined} circleShape
         * @memberof gamestate.EntityShape
         * @instance
         */
        EntityShape.prototype.circleShape = null;

        /**
         * EntityShape polylineShape.
         * @member {gamestate.IEntityPolylineShape|null|undefined} polylineShape
         * @memberof gamestate.EntityShape
         * @instance
         */
        EntityShape.prototype.polylineShape = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * EntityShape shape.
         * @member {"boxShape"|"circleShape"|"polylineShape"|undefined} shape
         * @memberof gamestate.EntityShape
         * @instance
         */
        Object.defineProperty(EntityShape.prototype, "shape", {
            get: $util.oneOfGetter($oneOfFields = ["boxShape", "circleShape", "polylineShape"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new EntityShape instance using the specified properties.
         * @function create
         * @memberof gamestate.EntityShape
         * @static
         * @param {gamestate.IEntityShape=} [properties] Properties to set
         * @returns {gamestate.EntityShape} EntityShape instance
         */
        EntityShape.create = function create(properties) {
            return new EntityShape(properties);
        };

        /**
         * Encodes the specified EntityShape message. Does not implicitly {@link gamestate.EntityShape.verify|verify} messages.
         * @function encode
         * @memberof gamestate.EntityShape
         * @static
         * @param {gamestate.IEntityShape} message EntityShape message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityShape.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.boxShape != null && Object.hasOwnProperty.call(message, "boxShape"))
                $root.gamestate.EntityBoxShape.encode(message.boxShape, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.circleShape != null && Object.hasOwnProperty.call(message, "circleShape"))
                $root.gamestate.EntityCircleShape.encode(message.circleShape, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.polylineShape != null && Object.hasOwnProperty.call(message, "polylineShape"))
                $root.gamestate.EntityPolylineShape.encode(message.polylineShape, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EntityShape message, length delimited. Does not implicitly {@link gamestate.EntityShape.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.EntityShape
         * @static
         * @param {gamestate.IEntityShape} message EntityShape message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityShape.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityShape message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.EntityShape
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.EntityShape} EntityShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityShape.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.EntityShape();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.boxShape = $root.gamestate.EntityBoxShape.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.circleShape = $root.gamestate.EntityCircleShape.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.polylineShape = $root.gamestate.EntityPolylineShape.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntityShape message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.EntityShape
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.EntityShape} EntityShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityShape.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityShape message.
         * @function verify
         * @memberof gamestate.EntityShape
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityShape.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.boxShape != null && message.hasOwnProperty("boxShape")) {
                properties.shape = 1;
                {
                    let error = $root.gamestate.EntityBoxShape.verify(message.boxShape);
                    if (error)
                        return "boxShape." + error;
                }
            }
            if (message.circleShape != null && message.hasOwnProperty("circleShape")) {
                if (properties.shape === 1)
                    return "shape: multiple values";
                properties.shape = 1;
                {
                    let error = $root.gamestate.EntityCircleShape.verify(message.circleShape);
                    if (error)
                        return "circleShape." + error;
                }
            }
            if (message.polylineShape != null && message.hasOwnProperty("polylineShape")) {
                if (properties.shape === 1)
                    return "shape: multiple values";
                properties.shape = 1;
                {
                    let error = $root.gamestate.EntityPolylineShape.verify(message.polylineShape);
                    if (error)
                        return "polylineShape." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EntityShape message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.EntityShape
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.EntityShape} EntityShape
         */
        EntityShape.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.EntityShape)
                return object;
            let message = new $root.gamestate.EntityShape();
            if (object.boxShape != null) {
                if (typeof object.boxShape !== "object")
                    throw TypeError(".gamestate.EntityShape.boxShape: object expected");
                message.boxShape = $root.gamestate.EntityBoxShape.fromObject(object.boxShape);
            }
            if (object.circleShape != null) {
                if (typeof object.circleShape !== "object")
                    throw TypeError(".gamestate.EntityShape.circleShape: object expected");
                message.circleShape = $root.gamestate.EntityCircleShape.fromObject(object.circleShape);
            }
            if (object.polylineShape != null) {
                if (typeof object.polylineShape !== "object")
                    throw TypeError(".gamestate.EntityShape.polylineShape: object expected");
                message.polylineShape = $root.gamestate.EntityPolylineShape.fromObject(object.polylineShape);
            }
            return message;
        };

        /**
         * Creates a plain object from an EntityShape message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.EntityShape
         * @static
         * @param {gamestate.EntityShape} message EntityShape
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityShape.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.boxShape != null && message.hasOwnProperty("boxShape")) {
                object.boxShape = $root.gamestate.EntityBoxShape.toObject(message.boxShape, options);
                if (options.oneofs)
                    object.shape = "boxShape";
            }
            if (message.circleShape != null && message.hasOwnProperty("circleShape")) {
                object.circleShape = $root.gamestate.EntityCircleShape.toObject(message.circleShape, options);
                if (options.oneofs)
                    object.shape = "circleShape";
            }
            if (message.polylineShape != null && message.hasOwnProperty("polylineShape")) {
                object.polylineShape = $root.gamestate.EntityPolylineShape.toObject(message.polylineShape, options);
                if (options.oneofs)
                    object.shape = "polylineShape";
            }
            return object;
        };

        /**
         * Converts this EntityShape to JSON.
         * @function toJSON
         * @memberof gamestate.EntityShape
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityShape.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntityShape
         * @function getTypeUrl
         * @memberof gamestate.EntityShape
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntityShape.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.EntityShape";
        };

        return EntityShape;
    })();

    gamestate.MapEntityState = (function() {

        /**
         * Properties of a MapEntityState.
         * @memberof gamestate
         * @interface IMapEntityState
         * @property {number|null} [x] MapEntityState x
         * @property {number|null} [y] MapEntityState y
         * @property {number|null} [angle] MapEntityState angle
         * @property {gamestate.IEntityShape|null} [shape] MapEntityState shape
         * @property {number|null} [life] MapEntityState life
         */

        /**
         * Constructs a new MapEntityState.
         * @memberof gamestate
         * @classdesc Represents a MapEntityState.
         * @implements IMapEntityState
         * @constructor
         * @param {gamestate.IMapEntityState=} [properties] Properties to set
         */
        function MapEntityState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MapEntityState x.
         * @member {number} x
         * @memberof gamestate.MapEntityState
         * @instance
         */
        MapEntityState.prototype.x = 0;

        /**
         * MapEntityState y.
         * @member {number} y
         * @memberof gamestate.MapEntityState
         * @instance
         */
        MapEntityState.prototype.y = 0;

        /**
         * MapEntityState angle.
         * @member {number} angle
         * @memberof gamestate.MapEntityState
         * @instance
         */
        MapEntityState.prototype.angle = 0;

        /**
         * MapEntityState shape.
         * @member {gamestate.IEntityShape|null|undefined} shape
         * @memberof gamestate.MapEntityState
         * @instance
         */
        MapEntityState.prototype.shape = null;

        /**
         * MapEntityState life.
         * @member {number} life
         * @memberof gamestate.MapEntityState
         * @instance
         */
        MapEntityState.prototype.life = 0;

        /**
         * Creates a new MapEntityState instance using the specified properties.
         * @function create
         * @memberof gamestate.MapEntityState
         * @static
         * @param {gamestate.IMapEntityState=} [properties] Properties to set
         * @returns {gamestate.MapEntityState} MapEntityState instance
         */
        MapEntityState.create = function create(properties) {
            return new MapEntityState(properties);
        };

        /**
         * Encodes the specified MapEntityState message. Does not implicitly {@link gamestate.MapEntityState.verify|verify} messages.
         * @function encode
         * @memberof gamestate.MapEntityState
         * @static
         * @param {gamestate.IMapEntityState} message MapEntityState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapEntityState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            if (message.angle != null && Object.hasOwnProperty.call(message, "angle"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.angle);
            if (message.shape != null && Object.hasOwnProperty.call(message, "shape"))
                $root.gamestate.EntityShape.encode(message.shape, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.life != null && Object.hasOwnProperty.call(message, "life"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.life);
            return writer;
        };

        /**
         * Encodes the specified MapEntityState message, length delimited. Does not implicitly {@link gamestate.MapEntityState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.MapEntityState
         * @static
         * @param {gamestate.IMapEntityState} message MapEntityState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapEntityState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MapEntityState message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.MapEntityState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.MapEntityState} MapEntityState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapEntityState.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.MapEntityState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.double();
                        break;
                    }
                case 2: {
                        message.y = reader.double();
                        break;
                    }
                case 3: {
                        message.angle = reader.double();
                        break;
                    }
                case 4: {
                        message.shape = $root.gamestate.EntityShape.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.life = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MapEntityState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.MapEntityState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.MapEntityState} MapEntityState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapEntityState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MapEntityState message.
         * @function verify
         * @memberof gamestate.MapEntityState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MapEntityState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.angle != null && message.hasOwnProperty("angle"))
                if (typeof message.angle !== "number")
                    return "angle: number expected";
            if (message.shape != null && message.hasOwnProperty("shape")) {
                let error = $root.gamestate.EntityShape.verify(message.shape);
                if (error)
                    return "shape." + error;
            }
            if (message.life != null && message.hasOwnProperty("life"))
                if (typeof message.life !== "number")
                    return "life: number expected";
            return null;
        };

        /**
         * Creates a MapEntityState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.MapEntityState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.MapEntityState} MapEntityState
         */
        MapEntityState.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.MapEntityState)
                return object;
            let message = new $root.gamestate.MapEntityState();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.angle != null)
                message.angle = Number(object.angle);
            if (object.shape != null) {
                if (typeof object.shape !== "object")
                    throw TypeError(".gamestate.MapEntityState.shape: object expected");
                message.shape = $root.gamestate.EntityShape.fromObject(object.shape);
            }
            if (object.life != null)
                message.life = Number(object.life);
            return message;
        };

        /**
         * Creates a plain object from a MapEntityState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.MapEntityState
         * @static
         * @param {gamestate.MapEntityState} message MapEntityState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MapEntityState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.angle = 0;
                object.shape = null;
                object.life = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.angle != null && message.hasOwnProperty("angle"))
                object.angle = options.json && !isFinite(message.angle) ? String(message.angle) : message.angle;
            if (message.shape != null && message.hasOwnProperty("shape"))
                object.shape = $root.gamestate.EntityShape.toObject(message.shape, options);
            if (message.life != null && message.hasOwnProperty("life"))
                object.life = options.json && !isFinite(message.life) ? String(message.life) : message.life;
            return object;
        };

        /**
         * Converts this MapEntityState to JSON.
         * @function toJSON
         * @memberof gamestate.MapEntityState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MapEntityState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MapEntityState
         * @function getTypeUrl
         * @memberof gamestate.MapEntityState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MapEntityState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.MapEntityState";
        };

        return MapEntityState;
    })();

    gamestate.SkillEffectBase = (function() {

        /**
         * Properties of a SkillEffectBase.
         * @memberof gamestate
         * @interface ISkillEffectBase
         * @property {string|null} [id] SkillEffectBase id
         * @property {gamestate.SkillType|null} [type] SkillEffectBase type
         * @property {number|Long|null} [timestamp] SkillEffectBase timestamp
         */

        /**
         * Constructs a new SkillEffectBase.
         * @memberof gamestate
         * @classdesc Represents a SkillEffectBase.
         * @implements ISkillEffectBase
         * @constructor
         * @param {gamestate.ISkillEffectBase=} [properties] Properties to set
         */
        function SkillEffectBase(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SkillEffectBase id.
         * @member {string} id
         * @memberof gamestate.SkillEffectBase
         * @instance
         */
        SkillEffectBase.prototype.id = "";

        /**
         * SkillEffectBase type.
         * @member {gamestate.SkillType} type
         * @memberof gamestate.SkillEffectBase
         * @instance
         */
        SkillEffectBase.prototype.type = 0;

        /**
         * SkillEffectBase timestamp.
         * @member {number|Long} timestamp
         * @memberof gamestate.SkillEffectBase
         * @instance
         */
        SkillEffectBase.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SkillEffectBase instance using the specified properties.
         * @function create
         * @memberof gamestate.SkillEffectBase
         * @static
         * @param {gamestate.ISkillEffectBase=} [properties] Properties to set
         * @returns {gamestate.SkillEffectBase} SkillEffectBase instance
         */
        SkillEffectBase.create = function create(properties) {
            return new SkillEffectBase(properties);
        };

        /**
         * Encodes the specified SkillEffectBase message. Does not implicitly {@link gamestate.SkillEffectBase.verify|verify} messages.
         * @function encode
         * @memberof gamestate.SkillEffectBase
         * @static
         * @param {gamestate.ISkillEffectBase} message SkillEffectBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillEffectBase.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified SkillEffectBase message, length delimited. Does not implicitly {@link gamestate.SkillEffectBase.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.SkillEffectBase
         * @static
         * @param {gamestate.ISkillEffectBase} message SkillEffectBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillEffectBase.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkillEffectBase message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.SkillEffectBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.SkillEffectBase} SkillEffectBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillEffectBase.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.SkillEffectBase();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SkillEffectBase message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.SkillEffectBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.SkillEffectBase} SkillEffectBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillEffectBase.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SkillEffectBase message.
         * @function verify
         * @memberof gamestate.SkillEffectBase
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkillEffectBase.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a SkillEffectBase message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.SkillEffectBase
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.SkillEffectBase} SkillEffectBase
         */
        SkillEffectBase.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.SkillEffectBase)
                return object;
            let message = new $root.gamestate.SkillEffectBase();
            if (object.id != null)
                message.id = String(object.id);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "SKILL_TYPE_IMPACT":
            case 0:
                message.type = 0;
                break;
            case "SKILL_TYPE_DUMMY_MARBLE":
            case 1:
                message.type = 1;
                break;
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SkillEffectBase message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.SkillEffectBase
         * @static
         * @param {gamestate.SkillEffectBase} message SkillEffectBase
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkillEffectBase.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.type = options.enums === String ? "SKILL_TYPE_IMPACT" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.gamestate.SkillType[message.type] === undefined ? message.type : $root.gamestate.SkillType[message.type] : message.type;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this SkillEffectBase to JSON.
         * @function toJSON
         * @memberof gamestate.SkillEffectBase
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkillEffectBase.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SkillEffectBase
         * @function getTypeUrl
         * @memberof gamestate.SkillEffectBase
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SkillEffectBase.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.SkillEffectBase";
        };

        return SkillEffectBase;
    })();

    gamestate.ImpactSkillEffect = (function() {

        /**
         * Properties of an ImpactSkillEffect.
         * @memberof gamestate
         * @interface IImpactSkillEffect
         * @property {gamestate.ISkillEffectBase|null} [base] ImpactSkillEffect base
         * @property {gamestate.IPosition|null} [position] ImpactSkillEffect position
         * @property {number|null} [radius] ImpactSkillEffect radius
         */

        /**
         * Constructs a new ImpactSkillEffect.
         * @memberof gamestate
         * @classdesc Represents an ImpactSkillEffect.
         * @implements IImpactSkillEffect
         * @constructor
         * @param {gamestate.IImpactSkillEffect=} [properties] Properties to set
         */
        function ImpactSkillEffect(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImpactSkillEffect base.
         * @member {gamestate.ISkillEffectBase|null|undefined} base
         * @memberof gamestate.ImpactSkillEffect
         * @instance
         */
        ImpactSkillEffect.prototype.base = null;

        /**
         * ImpactSkillEffect position.
         * @member {gamestate.IPosition|null|undefined} position
         * @memberof gamestate.ImpactSkillEffect
         * @instance
         */
        ImpactSkillEffect.prototype.position = null;

        /**
         * ImpactSkillEffect radius.
         * @member {number} radius
         * @memberof gamestate.ImpactSkillEffect
         * @instance
         */
        ImpactSkillEffect.prototype.radius = 0;

        /**
         * Creates a new ImpactSkillEffect instance using the specified properties.
         * @function create
         * @memberof gamestate.ImpactSkillEffect
         * @static
         * @param {gamestate.IImpactSkillEffect=} [properties] Properties to set
         * @returns {gamestate.ImpactSkillEffect} ImpactSkillEffect instance
         */
        ImpactSkillEffect.create = function create(properties) {
            return new ImpactSkillEffect(properties);
        };

        /**
         * Encodes the specified ImpactSkillEffect message. Does not implicitly {@link gamestate.ImpactSkillEffect.verify|verify} messages.
         * @function encode
         * @memberof gamestate.ImpactSkillEffect
         * @static
         * @param {gamestate.IImpactSkillEffect} message ImpactSkillEffect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImpactSkillEffect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.gamestate.SkillEffectBase.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.gamestate.Position.encode(message.position, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.radius);
            return writer;
        };

        /**
         * Encodes the specified ImpactSkillEffect message, length delimited. Does not implicitly {@link gamestate.ImpactSkillEffect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.ImpactSkillEffect
         * @static
         * @param {gamestate.IImpactSkillEffect} message ImpactSkillEffect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImpactSkillEffect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImpactSkillEffect message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.ImpactSkillEffect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.ImpactSkillEffect} ImpactSkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImpactSkillEffect.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.ImpactSkillEffect();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.gamestate.SkillEffectBase.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.position = $root.gamestate.Position.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.radius = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImpactSkillEffect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.ImpactSkillEffect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.ImpactSkillEffect} ImpactSkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImpactSkillEffect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImpactSkillEffect message.
         * @function verify
         * @memberof gamestate.ImpactSkillEffect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ImpactSkillEffect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.gamestate.SkillEffectBase.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.position != null && message.hasOwnProperty("position")) {
                let error = $root.gamestate.Position.verify(message.position);
                if (error)
                    return "position." + error;
            }
            if (message.radius != null && message.hasOwnProperty("radius"))
                if (typeof message.radius !== "number")
                    return "radius: number expected";
            return null;
        };

        /**
         * Creates an ImpactSkillEffect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.ImpactSkillEffect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.ImpactSkillEffect} ImpactSkillEffect
         */
        ImpactSkillEffect.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.ImpactSkillEffect)
                return object;
            let message = new $root.gamestate.ImpactSkillEffect();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".gamestate.ImpactSkillEffect.base: object expected");
                message.base = $root.gamestate.SkillEffectBase.fromObject(object.base);
            }
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".gamestate.ImpactSkillEffect.position: object expected");
                message.position = $root.gamestate.Position.fromObject(object.position);
            }
            if (object.radius != null)
                message.radius = Number(object.radius);
            return message;
        };

        /**
         * Creates a plain object from an ImpactSkillEffect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.ImpactSkillEffect
         * @static
         * @param {gamestate.ImpactSkillEffect} message ImpactSkillEffect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImpactSkillEffect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.position = null;
                object.radius = 0;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.gamestate.SkillEffectBase.toObject(message.base, options);
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.gamestate.Position.toObject(message.position, options);
            if (message.radius != null && message.hasOwnProperty("radius"))
                object.radius = options.json && !isFinite(message.radius) ? String(message.radius) : message.radius;
            return object;
        };

        /**
         * Converts this ImpactSkillEffect to JSON.
         * @function toJSON
         * @memberof gamestate.ImpactSkillEffect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ImpactSkillEffect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ImpactSkillEffect
         * @function getTypeUrl
         * @memberof gamestate.ImpactSkillEffect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ImpactSkillEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.ImpactSkillEffect";
        };

        return ImpactSkillEffect;
    })();

    gamestate.DummyMarbleSkillEffect = (function() {

        /**
         * Properties of a DummyMarbleSkillEffect.
         * @memberof gamestate
         * @interface IDummyMarbleSkillEffect
         * @property {gamestate.ISkillEffectBase|null} [base] DummyMarbleSkillEffect base
         */

        /**
         * Constructs a new DummyMarbleSkillEffect.
         * @memberof gamestate
         * @classdesc Represents a DummyMarbleSkillEffect.
         * @implements IDummyMarbleSkillEffect
         * @constructor
         * @param {gamestate.IDummyMarbleSkillEffect=} [properties] Properties to set
         */
        function DummyMarbleSkillEffect(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DummyMarbleSkillEffect base.
         * @member {gamestate.ISkillEffectBase|null|undefined} base
         * @memberof gamestate.DummyMarbleSkillEffect
         * @instance
         */
        DummyMarbleSkillEffect.prototype.base = null;

        /**
         * Creates a new DummyMarbleSkillEffect instance using the specified properties.
         * @function create
         * @memberof gamestate.DummyMarbleSkillEffect
         * @static
         * @param {gamestate.IDummyMarbleSkillEffect=} [properties] Properties to set
         * @returns {gamestate.DummyMarbleSkillEffect} DummyMarbleSkillEffect instance
         */
        DummyMarbleSkillEffect.create = function create(properties) {
            return new DummyMarbleSkillEffect(properties);
        };

        /**
         * Encodes the specified DummyMarbleSkillEffect message. Does not implicitly {@link gamestate.DummyMarbleSkillEffect.verify|verify} messages.
         * @function encode
         * @memberof gamestate.DummyMarbleSkillEffect
         * @static
         * @param {gamestate.IDummyMarbleSkillEffect} message DummyMarbleSkillEffect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DummyMarbleSkillEffect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.gamestate.SkillEffectBase.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DummyMarbleSkillEffect message, length delimited. Does not implicitly {@link gamestate.DummyMarbleSkillEffect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.DummyMarbleSkillEffect
         * @static
         * @param {gamestate.IDummyMarbleSkillEffect} message DummyMarbleSkillEffect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DummyMarbleSkillEffect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DummyMarbleSkillEffect message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.DummyMarbleSkillEffect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.DummyMarbleSkillEffect} DummyMarbleSkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DummyMarbleSkillEffect.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.DummyMarbleSkillEffect();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.gamestate.SkillEffectBase.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DummyMarbleSkillEffect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.DummyMarbleSkillEffect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.DummyMarbleSkillEffect} DummyMarbleSkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DummyMarbleSkillEffect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DummyMarbleSkillEffect message.
         * @function verify
         * @memberof gamestate.DummyMarbleSkillEffect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DummyMarbleSkillEffect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.gamestate.SkillEffectBase.verify(message.base);
                if (error)
                    return "base." + error;
            }
            return null;
        };

        /**
         * Creates a DummyMarbleSkillEffect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.DummyMarbleSkillEffect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.DummyMarbleSkillEffect} DummyMarbleSkillEffect
         */
        DummyMarbleSkillEffect.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.DummyMarbleSkillEffect)
                return object;
            let message = new $root.gamestate.DummyMarbleSkillEffect();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".gamestate.DummyMarbleSkillEffect.base: object expected");
                message.base = $root.gamestate.SkillEffectBase.fromObject(object.base);
            }
            return message;
        };

        /**
         * Creates a plain object from a DummyMarbleSkillEffect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.DummyMarbleSkillEffect
         * @static
         * @param {gamestate.DummyMarbleSkillEffect} message DummyMarbleSkillEffect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DummyMarbleSkillEffect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.base = null;
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.gamestate.SkillEffectBase.toObject(message.base, options);
            return object;
        };

        /**
         * Converts this DummyMarbleSkillEffect to JSON.
         * @function toJSON
         * @memberof gamestate.DummyMarbleSkillEffect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DummyMarbleSkillEffect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DummyMarbleSkillEffect
         * @function getTypeUrl
         * @memberof gamestate.DummyMarbleSkillEffect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DummyMarbleSkillEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.DummyMarbleSkillEffect";
        };

        return DummyMarbleSkillEffect;
    })();

    gamestate.SkillEffect = (function() {

        /**
         * Properties of a SkillEffect.
         * @memberof gamestate
         * @interface ISkillEffect
         * @property {gamestate.IImpactSkillEffect|null} [impactEffect] SkillEffect impactEffect
         * @property {gamestate.IDummyMarbleSkillEffect|null} [dummyMarbleEffect] SkillEffect dummyMarbleEffect
         */

        /**
         * Constructs a new SkillEffect.
         * @memberof gamestate
         * @classdesc Represents a SkillEffect.
         * @implements ISkillEffect
         * @constructor
         * @param {gamestate.ISkillEffect=} [properties] Properties to set
         */
        function SkillEffect(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SkillEffect impactEffect.
         * @member {gamestate.IImpactSkillEffect|null|undefined} impactEffect
         * @memberof gamestate.SkillEffect
         * @instance
         */
        SkillEffect.prototype.impactEffect = null;

        /**
         * SkillEffect dummyMarbleEffect.
         * @member {gamestate.IDummyMarbleSkillEffect|null|undefined} dummyMarbleEffect
         * @memberof gamestate.SkillEffect
         * @instance
         */
        SkillEffect.prototype.dummyMarbleEffect = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * SkillEffect effect.
         * @member {"impactEffect"|"dummyMarbleEffect"|undefined} effect
         * @memberof gamestate.SkillEffect
         * @instance
         */
        Object.defineProperty(SkillEffect.prototype, "effect", {
            get: $util.oneOfGetter($oneOfFields = ["impactEffect", "dummyMarbleEffect"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SkillEffect instance using the specified properties.
         * @function create
         * @memberof gamestate.SkillEffect
         * @static
         * @param {gamestate.ISkillEffect=} [properties] Properties to set
         * @returns {gamestate.SkillEffect} SkillEffect instance
         */
        SkillEffect.create = function create(properties) {
            return new SkillEffect(properties);
        };

        /**
         * Encodes the specified SkillEffect message. Does not implicitly {@link gamestate.SkillEffect.verify|verify} messages.
         * @function encode
         * @memberof gamestate.SkillEffect
         * @static
         * @param {gamestate.ISkillEffect} message SkillEffect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillEffect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.impactEffect != null && Object.hasOwnProperty.call(message, "impactEffect"))
                $root.gamestate.ImpactSkillEffect.encode(message.impactEffect, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dummyMarbleEffect != null && Object.hasOwnProperty.call(message, "dummyMarbleEffect"))
                $root.gamestate.DummyMarbleSkillEffect.encode(message.dummyMarbleEffect, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SkillEffect message, length delimited. Does not implicitly {@link gamestate.SkillEffect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.SkillEffect
         * @static
         * @param {gamestate.ISkillEffect} message SkillEffect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillEffect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkillEffect message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.SkillEffect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.SkillEffect} SkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillEffect.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.SkillEffect();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.impactEffect = $root.gamestate.ImpactSkillEffect.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.dummyMarbleEffect = $root.gamestate.DummyMarbleSkillEffect.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SkillEffect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.SkillEffect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.SkillEffect} SkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillEffect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SkillEffect message.
         * @function verify
         * @memberof gamestate.SkillEffect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkillEffect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.impactEffect != null && message.hasOwnProperty("impactEffect")) {
                properties.effect = 1;
                {
                    let error = $root.gamestate.ImpactSkillEffect.verify(message.impactEffect);
                    if (error)
                        return "impactEffect." + error;
                }
            }
            if (message.dummyMarbleEffect != null && message.hasOwnProperty("dummyMarbleEffect")) {
                if (properties.effect === 1)
                    return "effect: multiple values";
                properties.effect = 1;
                {
                    let error = $root.gamestate.DummyMarbleSkillEffect.verify(message.dummyMarbleEffect);
                    if (error)
                        return "dummyMarbleEffect." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SkillEffect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.SkillEffect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.SkillEffect} SkillEffect
         */
        SkillEffect.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.SkillEffect)
                return object;
            let message = new $root.gamestate.SkillEffect();
            if (object.impactEffect != null) {
                if (typeof object.impactEffect !== "object")
                    throw TypeError(".gamestate.SkillEffect.impactEffect: object expected");
                message.impactEffect = $root.gamestate.ImpactSkillEffect.fromObject(object.impactEffect);
            }
            if (object.dummyMarbleEffect != null) {
                if (typeof object.dummyMarbleEffect !== "object")
                    throw TypeError(".gamestate.SkillEffect.dummyMarbleEffect: object expected");
                message.dummyMarbleEffect = $root.gamestate.DummyMarbleSkillEffect.fromObject(object.dummyMarbleEffect);
            }
            return message;
        };

        /**
         * Creates a plain object from a SkillEffect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.SkillEffect
         * @static
         * @param {gamestate.SkillEffect} message SkillEffect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkillEffect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.impactEffect != null && message.hasOwnProperty("impactEffect")) {
                object.impactEffect = $root.gamestate.ImpactSkillEffect.toObject(message.impactEffect, options);
                if (options.oneofs)
                    object.effect = "impactEffect";
            }
            if (message.dummyMarbleEffect != null && message.hasOwnProperty("dummyMarbleEffect")) {
                object.dummyMarbleEffect = $root.gamestate.DummyMarbleSkillEffect.toObject(message.dummyMarbleEffect, options);
                if (options.oneofs)
                    object.effect = "dummyMarbleEffect";
            }
            return object;
        };

        /**
         * Converts this SkillEffect to JSON.
         * @function toJSON
         * @memberof gamestate.SkillEffect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkillEffect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SkillEffect
         * @function getTypeUrl
         * @memberof gamestate.SkillEffect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SkillEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.SkillEffect";
        };

        return SkillEffect;
    })();

    gamestate.MarbleDto = (function() {

        /**
         * Properties of a MarbleDto.
         * @memberof gamestate
         * @interface IMarbleDto
         * @property {number|null} [id] MarbleDto id
         * @property {string|null} [name] MarbleDto name
         * @property {number|null} [x] MarbleDto x
         * @property {number|null} [y] MarbleDto y
         * @property {string|null} [color] MarbleDto color
         * @property {number|null} [hue] MarbleDto hue
         * @property {boolean|null} [isActive] MarbleDto isActive
         * @property {boolean|null} [isDummy] MarbleDto isDummy
         * @property {number|null} [radius] MarbleDto radius
         */

        /**
         * Constructs a new MarbleDto.
         * @memberof gamestate
         * @classdesc Represents a MarbleDto.
         * @implements IMarbleDto
         * @constructor
         * @param {gamestate.IMarbleDto=} [properties] Properties to set
         */
        function MarbleDto(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MarbleDto id.
         * @member {number} id
         * @memberof gamestate.MarbleDto
         * @instance
         */
        MarbleDto.prototype.id = 0;

        /**
         * MarbleDto name.
         * @member {string} name
         * @memberof gamestate.MarbleDto
         * @instance
         */
        MarbleDto.prototype.name = "";

        /**
         * MarbleDto x.
         * @member {number} x
         * @memberof gamestate.MarbleDto
         * @instance
         */
        MarbleDto.prototype.x = 0;

        /**
         * MarbleDto y.
         * @member {number} y
         * @memberof gamestate.MarbleDto
         * @instance
         */
        MarbleDto.prototype.y = 0;

        /**
         * MarbleDto color.
         * @member {string} color
         * @memberof gamestate.MarbleDto
         * @instance
         */
        MarbleDto.prototype.color = "";

        /**
         * MarbleDto hue.
         * @member {number} hue
         * @memberof gamestate.MarbleDto
         * @instance
         */
        MarbleDto.prototype.hue = 0;

        /**
         * MarbleDto isActive.
         * @member {boolean} isActive
         * @memberof gamestate.MarbleDto
         * @instance
         */
        MarbleDto.prototype.isActive = false;

        /**
         * MarbleDto isDummy.
         * @member {boolean} isDummy
         * @memberof gamestate.MarbleDto
         * @instance
         */
        MarbleDto.prototype.isDummy = false;

        /**
         * MarbleDto radius.
         * @member {number} radius
         * @memberof gamestate.MarbleDto
         * @instance
         */
        MarbleDto.prototype.radius = 0;

        /**
         * Creates a new MarbleDto instance using the specified properties.
         * @function create
         * @memberof gamestate.MarbleDto
         * @static
         * @param {gamestate.IMarbleDto=} [properties] Properties to set
         * @returns {gamestate.MarbleDto} MarbleDto instance
         */
        MarbleDto.create = function create(properties) {
            return new MarbleDto(properties);
        };

        /**
         * Encodes the specified MarbleDto message. Does not implicitly {@link gamestate.MarbleDto.verify|verify} messages.
         * @function encode
         * @memberof gamestate.MarbleDto
         * @static
         * @param {gamestate.IMarbleDto} message MarbleDto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MarbleDto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.y);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.color);
            if (message.hue != null && Object.hasOwnProperty.call(message, "hue"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.hue);
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isActive);
            if (message.isDummy != null && Object.hasOwnProperty.call(message, "isDummy"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isDummy);
            if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 10, wireType 1 =*/81).double(message.radius);
            return writer;
        };

        /**
         * Encodes the specified MarbleDto message, length delimited. Does not implicitly {@link gamestate.MarbleDto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.MarbleDto
         * @static
         * @param {gamestate.IMarbleDto} message MarbleDto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MarbleDto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MarbleDto message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.MarbleDto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.MarbleDto} MarbleDto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarbleDto.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.MarbleDto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.x = reader.double();
                        break;
                    }
                case 4: {
                        message.y = reader.double();
                        break;
                    }
                case 6: {
                        message.color = reader.string();
                        break;
                    }
                case 7: {
                        message.hue = reader.double();
                        break;
                    }
                case 8: {
                        message.isActive = reader.bool();
                        break;
                    }
                case 9: {
                        message.isDummy = reader.bool();
                        break;
                    }
                case 10: {
                        message.radius = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MarbleDto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.MarbleDto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.MarbleDto} MarbleDto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarbleDto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MarbleDto message.
         * @function verify
         * @memberof gamestate.MarbleDto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MarbleDto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.hue != null && message.hasOwnProperty("hue"))
                if (typeof message.hue !== "number")
                    return "hue: number expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.isDummy != null && message.hasOwnProperty("isDummy"))
                if (typeof message.isDummy !== "boolean")
                    return "isDummy: boolean expected";
            if (message.radius != null && message.hasOwnProperty("radius"))
                if (typeof message.radius !== "number")
                    return "radius: number expected";
            return null;
        };

        /**
         * Creates a MarbleDto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.MarbleDto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.MarbleDto} MarbleDto
         */
        MarbleDto.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.MarbleDto)
                return object;
            let message = new $root.gamestate.MarbleDto();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.color != null)
                message.color = String(object.color);
            if (object.hue != null)
                message.hue = Number(object.hue);
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.isDummy != null)
                message.isDummy = Boolean(object.isDummy);
            if (object.radius != null)
                message.radius = Number(object.radius);
            return message;
        };

        /**
         * Creates a plain object from a MarbleDto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.MarbleDto
         * @static
         * @param {gamestate.MarbleDto} message MarbleDto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MarbleDto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.x = 0;
                object.y = 0;
                object.color = "";
                object.hue = 0;
                object.isActive = false;
                object.isDummy = false;
                object.radius = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.hue != null && message.hasOwnProperty("hue"))
                object.hue = options.json && !isFinite(message.hue) ? String(message.hue) : message.hue;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.isDummy != null && message.hasOwnProperty("isDummy"))
                object.isDummy = message.isDummy;
            if (message.radius != null && message.hasOwnProperty("radius"))
                object.radius = options.json && !isFinite(message.radius) ? String(message.radius) : message.radius;
            return object;
        };

        /**
         * Converts this MarbleDto to JSON.
         * @function toJSON
         * @memberof gamestate.MarbleDto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MarbleDto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MarbleDto
         * @function getTypeUrl
         * @memberof gamestate.MarbleDto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MarbleDto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.MarbleDto";
        };

        return MarbleDto;
    })();

    gamestate.GameStateDto = (function() {

        /**
         * Properties of a GameStateDto.
         * @memberof gamestate
         * @interface IGameStateDto
         * @property {Array.<gamestate.IMarbleDto>|null} [marbles] GameStateDto marbles
         * @property {Array.<gamestate.IMarbleDto>|null} [winners] GameStateDto winners
         * @property {gamestate.IMarbleDto|null} [winner] GameStateDto winner
         * @property {Array.<gamestate.IMapEntityState>|null} [entities] GameStateDto entities
         * @property {boolean|null} [isRunning] GameStateDto isRunning
         * @property {number|null} [winnerRank] GameStateDto winnerRank
         * @property {number|null} [totalMarbleCount] GameStateDto totalMarbleCount
         * @property {boolean|null} [shakeAvailable] GameStateDto shakeAvailable
         * @property {Array.<gamestate.ISkillEffect>|null} [skillEffects] GameStateDto skillEffects
         */

        /**
         * Constructs a new GameStateDto.
         * @memberof gamestate
         * @classdesc Represents a GameStateDto.
         * @implements IGameStateDto
         * @constructor
         * @param {gamestate.IGameStateDto=} [properties] Properties to set
         */
        function GameStateDto(properties) {
            this.marbles = [];
            this.winners = [];
            this.entities = [];
            this.skillEffects = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStateDto marbles.
         * @member {Array.<gamestate.IMarbleDto>} marbles
         * @memberof gamestate.GameStateDto
         * @instance
         */
        GameStateDto.prototype.marbles = $util.emptyArray;

        /**
         * GameStateDto winners.
         * @member {Array.<gamestate.IMarbleDto>} winners
         * @memberof gamestate.GameStateDto
         * @instance
         */
        GameStateDto.prototype.winners = $util.emptyArray;

        /**
         * GameStateDto winner.
         * @member {gamestate.IMarbleDto|null|undefined} winner
         * @memberof gamestate.GameStateDto
         * @instance
         */
        GameStateDto.prototype.winner = null;

        /**
         * GameStateDto entities.
         * @member {Array.<gamestate.IMapEntityState>} entities
         * @memberof gamestate.GameStateDto
         * @instance
         */
        GameStateDto.prototype.entities = $util.emptyArray;

        /**
         * GameStateDto isRunning.
         * @member {boolean} isRunning
         * @memberof gamestate.GameStateDto
         * @instance
         */
        GameStateDto.prototype.isRunning = false;

        /**
         * GameStateDto winnerRank.
         * @member {number} winnerRank
         * @memberof gamestate.GameStateDto
         * @instance
         */
        GameStateDto.prototype.winnerRank = 0;

        /**
         * GameStateDto totalMarbleCount.
         * @member {number} totalMarbleCount
         * @memberof gamestate.GameStateDto
         * @instance
         */
        GameStateDto.prototype.totalMarbleCount = 0;

        /**
         * GameStateDto shakeAvailable.
         * @member {boolean} shakeAvailable
         * @memberof gamestate.GameStateDto
         * @instance
         */
        GameStateDto.prototype.shakeAvailable = false;

        /**
         * GameStateDto skillEffects.
         * @member {Array.<gamestate.ISkillEffect>} skillEffects
         * @memberof gamestate.GameStateDto
         * @instance
         */
        GameStateDto.prototype.skillEffects = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * GameStateDto _winner.
         * @member {"winner"|undefined} _winner
         * @memberof gamestate.GameStateDto
         * @instance
         */
        Object.defineProperty(GameStateDto.prototype, "_winner", {
            get: $util.oneOfGetter($oneOfFields = ["winner"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GameStateDto instance using the specified properties.
         * @function create
         * @memberof gamestate.GameStateDto
         * @static
         * @param {gamestate.IGameStateDto=} [properties] Properties to set
         * @returns {gamestate.GameStateDto} GameStateDto instance
         */
        GameStateDto.create = function create(properties) {
            return new GameStateDto(properties);
        };

        /**
         * Encodes the specified GameStateDto message. Does not implicitly {@link gamestate.GameStateDto.verify|verify} messages.
         * @function encode
         * @memberof gamestate.GameStateDto
         * @static
         * @param {gamestate.IGameStateDto} message GameStateDto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStateDto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.marbles != null && message.marbles.length)
                for (let i = 0; i < message.marbles.length; ++i)
                    $root.gamestate.MarbleDto.encode(message.marbles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.winners != null && message.winners.length)
                for (let i = 0; i < message.winners.length; ++i)
                    $root.gamestate.MarbleDto.encode(message.winners[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.winner != null && Object.hasOwnProperty.call(message, "winner"))
                $root.gamestate.MarbleDto.encode(message.winner, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.entities != null && message.entities.length)
                for (let i = 0; i < message.entities.length; ++i)
                    $root.gamestate.MapEntityState.encode(message.entities[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.isRunning != null && Object.hasOwnProperty.call(message, "isRunning"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isRunning);
            if (message.winnerRank != null && Object.hasOwnProperty.call(message, "winnerRank"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.winnerRank);
            if (message.totalMarbleCount != null && Object.hasOwnProperty.call(message, "totalMarbleCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.totalMarbleCount);
            if (message.shakeAvailable != null && Object.hasOwnProperty.call(message, "shakeAvailable"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.shakeAvailable);
            if (message.skillEffects != null && message.skillEffects.length)
                for (let i = 0; i < message.skillEffects.length; ++i)
                    $root.gamestate.SkillEffect.encode(message.skillEffects[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameStateDto message, length delimited. Does not implicitly {@link gamestate.GameStateDto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamestate.GameStateDto
         * @static
         * @param {gamestate.IGameStateDto} message GameStateDto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStateDto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStateDto message from the specified reader or buffer.
         * @function decode
         * @memberof gamestate.GameStateDto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamestate.GameStateDto} GameStateDto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStateDto.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamestate.GameStateDto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.marbles && message.marbles.length))
                            message.marbles = [];
                        message.marbles.push($root.gamestate.MarbleDto.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.winners && message.winners.length))
                            message.winners = [];
                        message.winners.push($root.gamestate.MarbleDto.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.winner = $root.gamestate.MarbleDto.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.entities && message.entities.length))
                            message.entities = [];
                        message.entities.push($root.gamestate.MapEntityState.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.isRunning = reader.bool();
                        break;
                    }
                case 6: {
                        message.winnerRank = reader.int32();
                        break;
                    }
                case 7: {
                        message.totalMarbleCount = reader.int32();
                        break;
                    }
                case 8: {
                        message.shakeAvailable = reader.bool();
                        break;
                    }
                case 9: {
                        if (!(message.skillEffects && message.skillEffects.length))
                            message.skillEffects = [];
                        message.skillEffects.push($root.gamestate.SkillEffect.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStateDto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamestate.GameStateDto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamestate.GameStateDto} GameStateDto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStateDto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStateDto message.
         * @function verify
         * @memberof gamestate.GameStateDto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStateDto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.marbles != null && message.hasOwnProperty("marbles")) {
                if (!Array.isArray(message.marbles))
                    return "marbles: array expected";
                for (let i = 0; i < message.marbles.length; ++i) {
                    let error = $root.gamestate.MarbleDto.verify(message.marbles[i]);
                    if (error)
                        return "marbles." + error;
                }
            }
            if (message.winners != null && message.hasOwnProperty("winners")) {
                if (!Array.isArray(message.winners))
                    return "winners: array expected";
                for (let i = 0; i < message.winners.length; ++i) {
                    let error = $root.gamestate.MarbleDto.verify(message.winners[i]);
                    if (error)
                        return "winners." + error;
                }
            }
            if (message.winner != null && message.hasOwnProperty("winner")) {
                properties._winner = 1;
                {
                    let error = $root.gamestate.MarbleDto.verify(message.winner);
                    if (error)
                        return "winner." + error;
                }
            }
            if (message.entities != null && message.hasOwnProperty("entities")) {
                if (!Array.isArray(message.entities))
                    return "entities: array expected";
                for (let i = 0; i < message.entities.length; ++i) {
                    let error = $root.gamestate.MapEntityState.verify(message.entities[i]);
                    if (error)
                        return "entities." + error;
                }
            }
            if (message.isRunning != null && message.hasOwnProperty("isRunning"))
                if (typeof message.isRunning !== "boolean")
                    return "isRunning: boolean expected";
            if (message.winnerRank != null && message.hasOwnProperty("winnerRank"))
                if (!$util.isInteger(message.winnerRank))
                    return "winnerRank: integer expected";
            if (message.totalMarbleCount != null && message.hasOwnProperty("totalMarbleCount"))
                if (!$util.isInteger(message.totalMarbleCount))
                    return "totalMarbleCount: integer expected";
            if (message.shakeAvailable != null && message.hasOwnProperty("shakeAvailable"))
                if (typeof message.shakeAvailable !== "boolean")
                    return "shakeAvailable: boolean expected";
            if (message.skillEffects != null && message.hasOwnProperty("skillEffects")) {
                if (!Array.isArray(message.skillEffects))
                    return "skillEffects: array expected";
                for (let i = 0; i < message.skillEffects.length; ++i) {
                    let error = $root.gamestate.SkillEffect.verify(message.skillEffects[i]);
                    if (error)
                        return "skillEffects." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameStateDto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamestate.GameStateDto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamestate.GameStateDto} GameStateDto
         */
        GameStateDto.fromObject = function fromObject(object) {
            if (object instanceof $root.gamestate.GameStateDto)
                return object;
            let message = new $root.gamestate.GameStateDto();
            if (object.marbles) {
                if (!Array.isArray(object.marbles))
                    throw TypeError(".gamestate.GameStateDto.marbles: array expected");
                message.marbles = [];
                for (let i = 0; i < object.marbles.length; ++i) {
                    if (typeof object.marbles[i] !== "object")
                        throw TypeError(".gamestate.GameStateDto.marbles: object expected");
                    message.marbles[i] = $root.gamestate.MarbleDto.fromObject(object.marbles[i]);
                }
            }
            if (object.winners) {
                if (!Array.isArray(object.winners))
                    throw TypeError(".gamestate.GameStateDto.winners: array expected");
                message.winners = [];
                for (let i = 0; i < object.winners.length; ++i) {
                    if (typeof object.winners[i] !== "object")
                        throw TypeError(".gamestate.GameStateDto.winners: object expected");
                    message.winners[i] = $root.gamestate.MarbleDto.fromObject(object.winners[i]);
                }
            }
            if (object.winner != null) {
                if (typeof object.winner !== "object")
                    throw TypeError(".gamestate.GameStateDto.winner: object expected");
                message.winner = $root.gamestate.MarbleDto.fromObject(object.winner);
            }
            if (object.entities) {
                if (!Array.isArray(object.entities))
                    throw TypeError(".gamestate.GameStateDto.entities: array expected");
                message.entities = [];
                for (let i = 0; i < object.entities.length; ++i) {
                    if (typeof object.entities[i] !== "object")
                        throw TypeError(".gamestate.GameStateDto.entities: object expected");
                    message.entities[i] = $root.gamestate.MapEntityState.fromObject(object.entities[i]);
                }
            }
            if (object.isRunning != null)
                message.isRunning = Boolean(object.isRunning);
            if (object.winnerRank != null)
                message.winnerRank = object.winnerRank | 0;
            if (object.totalMarbleCount != null)
                message.totalMarbleCount = object.totalMarbleCount | 0;
            if (object.shakeAvailable != null)
                message.shakeAvailable = Boolean(object.shakeAvailable);
            if (object.skillEffects) {
                if (!Array.isArray(object.skillEffects))
                    throw TypeError(".gamestate.GameStateDto.skillEffects: array expected");
                message.skillEffects = [];
                for (let i = 0; i < object.skillEffects.length; ++i) {
                    if (typeof object.skillEffects[i] !== "object")
                        throw TypeError(".gamestate.GameStateDto.skillEffects: object expected");
                    message.skillEffects[i] = $root.gamestate.SkillEffect.fromObject(object.skillEffects[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameStateDto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamestate.GameStateDto
         * @static
         * @param {gamestate.GameStateDto} message GameStateDto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStateDto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.marbles = [];
                object.winners = [];
                object.entities = [];
                object.skillEffects = [];
            }
            if (options.defaults) {
                object.isRunning = false;
                object.winnerRank = 0;
                object.totalMarbleCount = 0;
                object.shakeAvailable = false;
            }
            if (message.marbles && message.marbles.length) {
                object.marbles = [];
                for (let j = 0; j < message.marbles.length; ++j)
                    object.marbles[j] = $root.gamestate.MarbleDto.toObject(message.marbles[j], options);
            }
            if (message.winners && message.winners.length) {
                object.winners = [];
                for (let j = 0; j < message.winners.length; ++j)
                    object.winners[j] = $root.gamestate.MarbleDto.toObject(message.winners[j], options);
            }
            if (message.winner != null && message.hasOwnProperty("winner")) {
                object.winner = $root.gamestate.MarbleDto.toObject(message.winner, options);
                if (options.oneofs)
                    object._winner = "winner";
            }
            if (message.entities && message.entities.length) {
                object.entities = [];
                for (let j = 0; j < message.entities.length; ++j)
                    object.entities[j] = $root.gamestate.MapEntityState.toObject(message.entities[j], options);
            }
            if (message.isRunning != null && message.hasOwnProperty("isRunning"))
                object.isRunning = message.isRunning;
            if (message.winnerRank != null && message.hasOwnProperty("winnerRank"))
                object.winnerRank = message.winnerRank;
            if (message.totalMarbleCount != null && message.hasOwnProperty("totalMarbleCount"))
                object.totalMarbleCount = message.totalMarbleCount;
            if (message.shakeAvailable != null && message.hasOwnProperty("shakeAvailable"))
                object.shakeAvailable = message.shakeAvailable;
            if (message.skillEffects && message.skillEffects.length) {
                object.skillEffects = [];
                for (let j = 0; j < message.skillEffects.length; ++j)
                    object.skillEffects[j] = $root.gamestate.SkillEffect.toObject(message.skillEffects[j], options);
            }
            return object;
        };

        /**
         * Converts this GameStateDto to JSON.
         * @function toJSON
         * @memberof gamestate.GameStateDto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStateDto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameStateDto
         * @function getTypeUrl
         * @memberof gamestate.GameStateDto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameStateDto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gamestate.GameStateDto";
        };

        return GameStateDto;
    })();

    return gamestate;
})();

export { $root as default };
