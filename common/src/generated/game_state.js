/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.Vector = (function() {

        /**
         * Properties of a Vector.
         * @memberof game
         * @interface IVector
         * @property {number|null} [x] Vector x
         * @property {number|null} [y] Vector y
         */

        /**
         * Constructs a new Vector.
         * @memberof game
         * @classdesc Represents a Vector.
         * @implements IVector
         * @constructor
         * @param {game.IVector=} [properties] Properties to set
         */
        function Vector(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vector x.
         * @member {number} x
         * @memberof game.Vector
         * @instance
         */
        Vector.prototype.x = 0;

        /**
         * Vector y.
         * @member {number} y
         * @memberof game.Vector
         * @instance
         */
        Vector.prototype.y = 0;

        /**
         * Creates a new Vector instance using the specified properties.
         * @function create
         * @memberof game.Vector
         * @static
         * @param {game.IVector=} [properties] Properties to set
         * @returns {game.Vector} Vector instance
         */
        Vector.create = function create(properties) {
            return new Vector(properties);
        };

        /**
         * Encodes the specified Vector message. Does not implicitly {@link game.Vector.verify|verify} messages.
         * @function encode
         * @memberof game.Vector
         * @static
         * @param {game.IVector} message Vector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vector.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            return writer;
        };

        /**
         * Encodes the specified Vector message, length delimited. Does not implicitly {@link game.Vector.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Vector
         * @static
         * @param {game.IVector} message Vector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vector.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Vector message from the specified reader or buffer.
         * @function decode
         * @memberof game.Vector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Vector} Vector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vector.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Vector();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
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
         * Decodes a Vector message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Vector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Vector} Vector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vector.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Vector message.
         * @function verify
         * @memberof game.Vector
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vector.verify = function verify(message) {
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
         * Creates a Vector message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Vector
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Vector} Vector
         */
        Vector.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Vector)
                return object;
            var message = new $root.game.Vector();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a Vector message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Vector
         * @static
         * @param {game.Vector} message Vector
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vector.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
         * Converts this Vector to JSON.
         * @function toJSON
         * @memberof game.Vector
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vector.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Vector
         * @function getTypeUrl
         * @memberof game.Vector
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Vector.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Vector";
        };

        return Vector;
    })();

    game.MarbleState = (function() {

        /**
         * Properties of a MarbleState.
         * @memberof game
         * @interface IMarbleState
         * @property {number|null} [id] MarbleState id
         * @property {string|null} [name] MarbleState name
         * @property {number|null} [x] MarbleState x
         * @property {number|null} [y] MarbleState y
         * @property {number|null} [angle] MarbleState angle
         * @property {string|null} [color] MarbleState color
         * @property {number|null} [hue] MarbleState hue
         * @property {boolean|null} [isActive] MarbleState isActive
         * @property {number|null} [skill] MarbleState skill
         * @property {boolean|null} [isDummy] MarbleState isDummy
         */

        /**
         * Constructs a new MarbleState.
         * @memberof game
         * @classdesc Represents a MarbleState.
         * @implements IMarbleState
         * @constructor
         * @param {game.IMarbleState=} [properties] Properties to set
         */
        function MarbleState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MarbleState id.
         * @member {number} id
         * @memberof game.MarbleState
         * @instance
         */
        MarbleState.prototype.id = 0;

        /**
         * MarbleState name.
         * @member {string} name
         * @memberof game.MarbleState
         * @instance
         */
        MarbleState.prototype.name = "";

        /**
         * MarbleState x.
         * @member {number} x
         * @memberof game.MarbleState
         * @instance
         */
        MarbleState.prototype.x = 0;

        /**
         * MarbleState y.
         * @member {number} y
         * @memberof game.MarbleState
         * @instance
         */
        MarbleState.prototype.y = 0;

        /**
         * MarbleState angle.
         * @member {number} angle
         * @memberof game.MarbleState
         * @instance
         */
        MarbleState.prototype.angle = 0;

        /**
         * MarbleState color.
         * @member {string} color
         * @memberof game.MarbleState
         * @instance
         */
        MarbleState.prototype.color = "";

        /**
         * MarbleState hue.
         * @member {number} hue
         * @memberof game.MarbleState
         * @instance
         */
        MarbleState.prototype.hue = 0;

        /**
         * MarbleState isActive.
         * @member {boolean} isActive
         * @memberof game.MarbleState
         * @instance
         */
        MarbleState.prototype.isActive = false;

        /**
         * MarbleState skill.
         * @member {number} skill
         * @memberof game.MarbleState
         * @instance
         */
        MarbleState.prototype.skill = 0;

        /**
         * MarbleState isDummy.
         * @member {boolean} isDummy
         * @memberof game.MarbleState
         * @instance
         */
        MarbleState.prototype.isDummy = false;

        /**
         * Creates a new MarbleState instance using the specified properties.
         * @function create
         * @memberof game.MarbleState
         * @static
         * @param {game.IMarbleState=} [properties] Properties to set
         * @returns {game.MarbleState} MarbleState instance
         */
        MarbleState.create = function create(properties) {
            return new MarbleState(properties);
        };

        /**
         * Encodes the specified MarbleState message. Does not implicitly {@link game.MarbleState.verify|verify} messages.
         * @function encode
         * @memberof game.MarbleState
         * @static
         * @param {game.IMarbleState} message MarbleState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MarbleState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.y);
            if (message.angle != null && Object.hasOwnProperty.call(message, "angle"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.angle);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.color);
            if (message.hue != null && Object.hasOwnProperty.call(message, "hue"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.hue);
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isActive);
            if (message.skill != null && Object.hasOwnProperty.call(message, "skill"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.skill);
            if (message.isDummy != null && Object.hasOwnProperty.call(message, "isDummy"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isDummy);
            return writer;
        };

        /**
         * Encodes the specified MarbleState message, length delimited. Does not implicitly {@link game.MarbleState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MarbleState
         * @static
         * @param {game.IMarbleState} message MarbleState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MarbleState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MarbleState message from the specified reader or buffer.
         * @function decode
         * @memberof game.MarbleState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MarbleState} MarbleState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarbleState.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MarbleState();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.x = reader.float();
                        break;
                    }
                case 4: {
                        message.y = reader.float();
                        break;
                    }
                case 5: {
                        message.angle = reader.float();
                        break;
                    }
                case 6: {
                        message.color = reader.string();
                        break;
                    }
                case 7: {
                        message.hue = reader.float();
                        break;
                    }
                case 8: {
                        message.isActive = reader.bool();
                        break;
                    }
                case 9: {
                        message.skill = reader.int32();
                        break;
                    }
                case 10: {
                        message.isDummy = reader.bool();
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
         * Decodes a MarbleState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.MarbleState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MarbleState} MarbleState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarbleState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MarbleState message.
         * @function verify
         * @memberof game.MarbleState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MarbleState.verify = function verify(message) {
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
            if (message.angle != null && message.hasOwnProperty("angle"))
                if (typeof message.angle !== "number")
                    return "angle: number expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.hue != null && message.hasOwnProperty("hue"))
                if (typeof message.hue !== "number")
                    return "hue: number expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.skill != null && message.hasOwnProperty("skill"))
                if (!$util.isInteger(message.skill))
                    return "skill: integer expected";
            if (message.isDummy != null && message.hasOwnProperty("isDummy"))
                if (typeof message.isDummy !== "boolean")
                    return "isDummy: boolean expected";
            return null;
        };

        /**
         * Creates a MarbleState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.MarbleState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.MarbleState} MarbleState
         */
        MarbleState.fromObject = function fromObject(object) {
            if (object instanceof $root.game.MarbleState)
                return object;
            var message = new $root.game.MarbleState();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.angle != null)
                message.angle = Number(object.angle);
            if (object.color != null)
                message.color = String(object.color);
            if (object.hue != null)
                message.hue = Number(object.hue);
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.skill != null)
                message.skill = object.skill | 0;
            if (object.isDummy != null)
                message.isDummy = Boolean(object.isDummy);
            return message;
        };

        /**
         * Creates a plain object from a MarbleState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.MarbleState
         * @static
         * @param {game.MarbleState} message MarbleState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MarbleState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.x = 0;
                object.y = 0;
                object.angle = 0;
                object.color = "";
                object.hue = 0;
                object.isActive = false;
                object.skill = 0;
                object.isDummy = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.angle != null && message.hasOwnProperty("angle"))
                object.angle = options.json && !isFinite(message.angle) ? String(message.angle) : message.angle;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.hue != null && message.hasOwnProperty("hue"))
                object.hue = options.json && !isFinite(message.hue) ? String(message.hue) : message.hue;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.skill != null && message.hasOwnProperty("skill"))
                object.skill = message.skill;
            if (message.isDummy != null && message.hasOwnProperty("isDummy"))
                object.isDummy = message.isDummy;
            return object;
        };

        /**
         * Converts this MarbleState to JSON.
         * @function toJSON
         * @memberof game.MarbleState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MarbleState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MarbleState
         * @function getTypeUrl
         * @memberof game.MarbleState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MarbleState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.MarbleState";
        };

        return MarbleState;
    })();

    game.EntityState = (function() {

        /**
         * Properties of an EntityState.
         * @memberof game
         * @interface IEntityState
         * @property {game.EntityState.EntityType|null} [type] EntityState type
         * @property {number|null} [x] EntityState x
         * @property {number|null} [y] EntityState y
         * @property {number|null} [angle] EntityState angle
         * @property {Array.<game.IVector>|null} [vertices] EntityState vertices
         * @property {number|null} [radius] EntityState radius
         * @property {number|null} [width] EntityState width
         * @property {number|null} [height] EntityState height
         */

        /**
         * Constructs a new EntityState.
         * @memberof game
         * @classdesc Represents an EntityState.
         * @implements IEntityState
         * @constructor
         * @param {game.IEntityState=} [properties] Properties to set
         */
        function EntityState(properties) {
            this.vertices = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityState type.
         * @member {game.EntityState.EntityType} type
         * @memberof game.EntityState
         * @instance
         */
        EntityState.prototype.type = 0;

        /**
         * EntityState x.
         * @member {number} x
         * @memberof game.EntityState
         * @instance
         */
        EntityState.prototype.x = 0;

        /**
         * EntityState y.
         * @member {number} y
         * @memberof game.EntityState
         * @instance
         */
        EntityState.prototype.y = 0;

        /**
         * EntityState angle.
         * @member {number} angle
         * @memberof game.EntityState
         * @instance
         */
        EntityState.prototype.angle = 0;

        /**
         * EntityState vertices.
         * @member {Array.<game.IVector>} vertices
         * @memberof game.EntityState
         * @instance
         */
        EntityState.prototype.vertices = $util.emptyArray;

        /**
         * EntityState radius.
         * @member {number|null|undefined} radius
         * @memberof game.EntityState
         * @instance
         */
        EntityState.prototype.radius = null;

        /**
         * EntityState width.
         * @member {number|null|undefined} width
         * @memberof game.EntityState
         * @instance
         */
        EntityState.prototype.width = null;

        /**
         * EntityState height.
         * @member {number|null|undefined} height
         * @memberof game.EntityState
         * @instance
         */
        EntityState.prototype.height = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * EntityState _radius.
         * @member {"radius"|undefined} _radius
         * @memberof game.EntityState
         * @instance
         */
        Object.defineProperty(EntityState.prototype, "_radius", {
            get: $util.oneOfGetter($oneOfFields = ["radius"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * EntityState _width.
         * @member {"width"|undefined} _width
         * @memberof game.EntityState
         * @instance
         */
        Object.defineProperty(EntityState.prototype, "_width", {
            get: $util.oneOfGetter($oneOfFields = ["width"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * EntityState _height.
         * @member {"height"|undefined} _height
         * @memberof game.EntityState
         * @instance
         */
        Object.defineProperty(EntityState.prototype, "_height", {
            get: $util.oneOfGetter($oneOfFields = ["height"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new EntityState instance using the specified properties.
         * @function create
         * @memberof game.EntityState
         * @static
         * @param {game.IEntityState=} [properties] Properties to set
         * @returns {game.EntityState} EntityState instance
         */
        EntityState.create = function create(properties) {
            return new EntityState(properties);
        };

        /**
         * Encodes the specified EntityState message. Does not implicitly {@link game.EntityState.verify|verify} messages.
         * @function encode
         * @memberof game.EntityState
         * @static
         * @param {game.IEntityState} message EntityState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.y);
            if (message.angle != null && Object.hasOwnProperty.call(message, "angle"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.angle);
            if (message.vertices != null && message.vertices.length)
                for (var i = 0; i < message.vertices.length; ++i)
                    $root.game.Vector.encode(message.vertices[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.radius);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.height);
            return writer;
        };

        /**
         * Encodes the specified EntityState message, length delimited. Does not implicitly {@link game.EntityState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.EntityState
         * @static
         * @param {game.IEntityState} message EntityState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityState message from the specified reader or buffer.
         * @function decode
         * @memberof game.EntityState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.EntityState} EntityState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityState.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.EntityState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.x = reader.float();
                        break;
                    }
                case 3: {
                        message.y = reader.float();
                        break;
                    }
                case 4: {
                        message.angle = reader.float();
                        break;
                    }
                case 5: {
                        if (!(message.vertices && message.vertices.length))
                            message.vertices = [];
                        message.vertices.push($root.game.Vector.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.radius = reader.float();
                        break;
                    }
                case 7: {
                        message.width = reader.float();
                        break;
                    }
                case 8: {
                        message.height = reader.float();
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
         * Decodes an EntityState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.EntityState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.EntityState} EntityState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityState message.
         * @function verify
         * @memberof game.EntityState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.angle != null && message.hasOwnProperty("angle"))
                if (typeof message.angle !== "number")
                    return "angle: number expected";
            if (message.vertices != null && message.hasOwnProperty("vertices")) {
                if (!Array.isArray(message.vertices))
                    return "vertices: array expected";
                for (var i = 0; i < message.vertices.length; ++i) {
                    var error = $root.game.Vector.verify(message.vertices[i]);
                    if (error)
                        return "vertices." + error;
                }
            }
            if (message.radius != null && message.hasOwnProperty("radius")) {
                properties._radius = 1;
                if (typeof message.radius !== "number")
                    return "radius: number expected";
            }
            if (message.width != null && message.hasOwnProperty("width")) {
                properties._width = 1;
                if (typeof message.width !== "number")
                    return "width: number expected";
            }
            if (message.height != null && message.hasOwnProperty("height")) {
                properties._height = 1;
                if (typeof message.height !== "number")
                    return "height: number expected";
            }
            return null;
        };

        /**
         * Creates an EntityState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.EntityState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.EntityState} EntityState
         */
        EntityState.fromObject = function fromObject(object) {
            if (object instanceof $root.game.EntityState)
                return object;
            var message = new $root.game.EntityState();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "BOX":
            case 0:
                message.type = 0;
                break;
            case "CIRCLE":
            case 1:
                message.type = 1;
                break;
            case "POLYGON":
            case 2:
                message.type = 2;
                break;
            }
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.angle != null)
                message.angle = Number(object.angle);
            if (object.vertices) {
                if (!Array.isArray(object.vertices))
                    throw TypeError(".game.EntityState.vertices: array expected");
                message.vertices = [];
                for (var i = 0; i < object.vertices.length; ++i) {
                    if (typeof object.vertices[i] !== "object")
                        throw TypeError(".game.EntityState.vertices: object expected");
                    message.vertices[i] = $root.game.Vector.fromObject(object.vertices[i]);
                }
            }
            if (object.radius != null)
                message.radius = Number(object.radius);
            if (object.width != null)
                message.width = Number(object.width);
            if (object.height != null)
                message.height = Number(object.height);
            return message;
        };

        /**
         * Creates a plain object from an EntityState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.EntityState
         * @static
         * @param {game.EntityState} message EntityState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.vertices = [];
            if (options.defaults) {
                object.type = options.enums === String ? "BOX" : 0;
                object.x = 0;
                object.y = 0;
                object.angle = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.game.EntityState.EntityType[message.type] === undefined ? message.type : $root.game.EntityState.EntityType[message.type] : message.type;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.angle != null && message.hasOwnProperty("angle"))
                object.angle = options.json && !isFinite(message.angle) ? String(message.angle) : message.angle;
            if (message.vertices && message.vertices.length) {
                object.vertices = [];
                for (var j = 0; j < message.vertices.length; ++j)
                    object.vertices[j] = $root.game.Vector.toObject(message.vertices[j], options);
            }
            if (message.radius != null && message.hasOwnProperty("radius")) {
                object.radius = options.json && !isFinite(message.radius) ? String(message.radius) : message.radius;
                if (options.oneofs)
                    object._radius = "radius";
            }
            if (message.width != null && message.hasOwnProperty("width")) {
                object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
                if (options.oneofs)
                    object._width = "width";
            }
            if (message.height != null && message.hasOwnProperty("height")) {
                object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
                if (options.oneofs)
                    object._height = "height";
            }
            return object;
        };

        /**
         * Converts this EntityState to JSON.
         * @function toJSON
         * @memberof game.EntityState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntityState
         * @function getTypeUrl
         * @memberof game.EntityState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntityState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.EntityState";
        };

        /**
         * EntityType enum.
         * @name game.EntityState.EntityType
         * @enum {number}
         * @property {number} BOX=0 BOX value
         * @property {number} CIRCLE=1 CIRCLE value
         * @property {number} POLYGON=2 POLYGON value
         */
        EntityState.EntityType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOX"] = 0;
            values[valuesById[1] = "CIRCLE"] = 1;
            values[valuesById[2] = "POLYGON"] = 2;
            return values;
        })();

        return EntityState;
    })();

    game.SkillEffect = (function() {

        /**
         * Properties of a SkillEffect.
         * @memberof game
         * @interface ISkillEffect
         * @property {string|null} [id] SkillEffect id
         * @property {string|null} [type] SkillEffect type
         * @property {game.IVector|null} [position] SkillEffect position
         * @property {number|Long|null} [timestamp] SkillEffect timestamp
         * @property {string|null} [userNickname] SkillEffect userNickname
         */

        /**
         * Constructs a new SkillEffect.
         * @memberof game
         * @classdesc Represents a SkillEffect.
         * @implements ISkillEffect
         * @constructor
         * @param {game.ISkillEffect=} [properties] Properties to set
         */
        function SkillEffect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SkillEffect id.
         * @member {string} id
         * @memberof game.SkillEffect
         * @instance
         */
        SkillEffect.prototype.id = "";

        /**
         * SkillEffect type.
         * @member {string} type
         * @memberof game.SkillEffect
         * @instance
         */
        SkillEffect.prototype.type = "";

        /**
         * SkillEffect position.
         * @member {game.IVector|null|undefined} position
         * @memberof game.SkillEffect
         * @instance
         */
        SkillEffect.prototype.position = null;

        /**
         * SkillEffect timestamp.
         * @member {number|Long} timestamp
         * @memberof game.SkillEffect
         * @instance
         */
        SkillEffect.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SkillEffect userNickname.
         * @member {string|null|undefined} userNickname
         * @memberof game.SkillEffect
         * @instance
         */
        SkillEffect.prototype.userNickname = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SkillEffect _userNickname.
         * @member {"userNickname"|undefined} _userNickname
         * @memberof game.SkillEffect
         * @instance
         */
        Object.defineProperty(SkillEffect.prototype, "_userNickname", {
            get: $util.oneOfGetter($oneOfFields = ["userNickname"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SkillEffect instance using the specified properties.
         * @function create
         * @memberof game.SkillEffect
         * @static
         * @param {game.ISkillEffect=} [properties] Properties to set
         * @returns {game.SkillEffect} SkillEffect instance
         */
        SkillEffect.create = function create(properties) {
            return new SkillEffect(properties);
        };

        /**
         * Encodes the specified SkillEffect message. Does not implicitly {@link game.SkillEffect.verify|verify} messages.
         * @function encode
         * @memberof game.SkillEffect
         * @static
         * @param {game.ISkillEffect} message SkillEffect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillEffect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.game.Vector.encode(message.position, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
            if (message.userNickname != null && Object.hasOwnProperty.call(message, "userNickname"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.userNickname);
            return writer;
        };

        /**
         * Encodes the specified SkillEffect message, length delimited. Does not implicitly {@link game.SkillEffect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SkillEffect
         * @static
         * @param {game.ISkillEffect} message SkillEffect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillEffect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkillEffect message from the specified reader or buffer.
         * @function decode
         * @memberof game.SkillEffect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SkillEffect} SkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillEffect.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SkillEffect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.position = $root.game.Vector.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 5: {
                        message.userNickname = reader.string();
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
         * @memberof game.SkillEffect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SkillEffect} SkillEffect
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
         * @memberof game.SkillEffect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkillEffect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.position != null && message.hasOwnProperty("position")) {
                var error = $root.game.Vector.verify(message.position);
                if (error)
                    return "position." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.userNickname != null && message.hasOwnProperty("userNickname")) {
                properties._userNickname = 1;
                if (!$util.isString(message.userNickname))
                    return "userNickname: string expected";
            }
            return null;
        };

        /**
         * Creates a SkillEffect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SkillEffect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SkillEffect} SkillEffect
         */
        SkillEffect.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SkillEffect)
                return object;
            var message = new $root.game.SkillEffect();
            if (object.id != null)
                message.id = String(object.id);
            if (object.type != null)
                message.type = String(object.type);
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".game.SkillEffect.position: object expected");
                message.position = $root.game.Vector.fromObject(object.position);
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
            if (object.userNickname != null)
                message.userNickname = String(object.userNickname);
            return message;
        };

        /**
         * Creates a plain object from a SkillEffect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SkillEffect
         * @static
         * @param {game.SkillEffect} message SkillEffect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkillEffect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.type = "";
                object.position = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.game.Vector.toObject(message.position, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.userNickname != null && message.hasOwnProperty("userNickname")) {
                object.userNickname = message.userNickname;
                if (options.oneofs)
                    object._userNickname = "userNickname";
            }
            return object;
        };

        /**
         * Converts this SkillEffect to JSON.
         * @function toJSON
         * @memberof game.SkillEffect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkillEffect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SkillEffect
         * @function getTypeUrl
         * @memberof game.SkillEffect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SkillEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SkillEffect";
        };

        return SkillEffect;
    })();

    game.GameState = (function() {

        /**
         * Properties of a GameState.
         * @memberof game
         * @interface IGameState
         * @property {Array.<game.IMarbleState>|null} [marbles] GameState marbles
         * @property {Array.<game.IMarbleState>|null} [winners] GameState winners
         * @property {game.IMarbleState|null} [winner] GameState winner
         * @property {Array.<game.IEntityState>|null} [entities] GameState entities
         * @property {boolean|null} [isRunning] GameState isRunning
         * @property {number|null} [winnerRank] GameState winnerRank
         * @property {number|null} [totalMarbleCount] GameState totalMarbleCount
         * @property {boolean|null} [shakeAvailable] GameState shakeAvailable
         * @property {Array.<game.ISkillEffect>|null} [skillEffects] GameState skillEffects
         */

        /**
         * Constructs a new GameState.
         * @memberof game
         * @classdesc Represents a GameState.
         * @implements IGameState
         * @constructor
         * @param {game.IGameState=} [properties] Properties to set
         */
        function GameState(properties) {
            this.marbles = [];
            this.winners = [];
            this.entities = [];
            this.skillEffects = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameState marbles.
         * @member {Array.<game.IMarbleState>} marbles
         * @memberof game.GameState
         * @instance
         */
        GameState.prototype.marbles = $util.emptyArray;

        /**
         * GameState winners.
         * @member {Array.<game.IMarbleState>} winners
         * @memberof game.GameState
         * @instance
         */
        GameState.prototype.winners = $util.emptyArray;

        /**
         * GameState winner.
         * @member {game.IMarbleState|null|undefined} winner
         * @memberof game.GameState
         * @instance
         */
        GameState.prototype.winner = null;

        /**
         * GameState entities.
         * @member {Array.<game.IEntityState>} entities
         * @memberof game.GameState
         * @instance
         */
        GameState.prototype.entities = $util.emptyArray;

        /**
         * GameState isRunning.
         * @member {boolean} isRunning
         * @memberof game.GameState
         * @instance
         */
        GameState.prototype.isRunning = false;

        /**
         * GameState winnerRank.
         * @member {number} winnerRank
         * @memberof game.GameState
         * @instance
         */
        GameState.prototype.winnerRank = 0;

        /**
         * GameState totalMarbleCount.
         * @member {number} totalMarbleCount
         * @memberof game.GameState
         * @instance
         */
        GameState.prototype.totalMarbleCount = 0;

        /**
         * GameState shakeAvailable.
         * @member {boolean} shakeAvailable
         * @memberof game.GameState
         * @instance
         */
        GameState.prototype.shakeAvailable = false;

        /**
         * GameState skillEffects.
         * @member {Array.<game.ISkillEffect>} skillEffects
         * @memberof game.GameState
         * @instance
         */
        GameState.prototype.skillEffects = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * GameState _winner.
         * @member {"winner"|undefined} _winner
         * @memberof game.GameState
         * @instance
         */
        Object.defineProperty(GameState.prototype, "_winner", {
            get: $util.oneOfGetter($oneOfFields = ["winner"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GameState instance using the specified properties.
         * @function create
         * @memberof game.GameState
         * @static
         * @param {game.IGameState=} [properties] Properties to set
         * @returns {game.GameState} GameState instance
         */
        GameState.create = function create(properties) {
            return new GameState(properties);
        };

        /**
         * Encodes the specified GameState message. Does not implicitly {@link game.GameState.verify|verify} messages.
         * @function encode
         * @memberof game.GameState
         * @static
         * @param {game.IGameState} message GameState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.marbles != null && message.marbles.length)
                for (var i = 0; i < message.marbles.length; ++i)
                    $root.game.MarbleState.encode(message.marbles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.winners != null && message.winners.length)
                for (var i = 0; i < message.winners.length; ++i)
                    $root.game.MarbleState.encode(message.winners[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.winner != null && Object.hasOwnProperty.call(message, "winner"))
                $root.game.MarbleState.encode(message.winner, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.entities != null && message.entities.length)
                for (var i = 0; i < message.entities.length; ++i)
                    $root.game.EntityState.encode(message.entities[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.isRunning != null && Object.hasOwnProperty.call(message, "isRunning"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isRunning);
            if (message.winnerRank != null && Object.hasOwnProperty.call(message, "winnerRank"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.winnerRank);
            if (message.totalMarbleCount != null && Object.hasOwnProperty.call(message, "totalMarbleCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.totalMarbleCount);
            if (message.shakeAvailable != null && Object.hasOwnProperty.call(message, "shakeAvailable"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.shakeAvailable);
            if (message.skillEffects != null && message.skillEffects.length)
                for (var i = 0; i < message.skillEffects.length; ++i)
                    $root.game.SkillEffect.encode(message.skillEffects[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameState message, length delimited. Does not implicitly {@link game.GameState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameState
         * @static
         * @param {game.IGameState} message GameState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameState message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameState} GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameState.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.marbles && message.marbles.length))
                            message.marbles = [];
                        message.marbles.push($root.game.MarbleState.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.winners && message.winners.length))
                            message.winners = [];
                        message.winners.push($root.game.MarbleState.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.winner = $root.game.MarbleState.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.entities && message.entities.length))
                            message.entities = [];
                        message.entities.push($root.game.EntityState.decode(reader, reader.uint32()));
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
                        message.skillEffects.push($root.game.SkillEffect.decode(reader, reader.uint32()));
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
         * Decodes a GameState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameState} GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameState message.
         * @function verify
         * @memberof game.GameState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.marbles != null && message.hasOwnProperty("marbles")) {
                if (!Array.isArray(message.marbles))
                    return "marbles: array expected";
                for (var i = 0; i < message.marbles.length; ++i) {
                    var error = $root.game.MarbleState.verify(message.marbles[i]);
                    if (error)
                        return "marbles." + error;
                }
            }
            if (message.winners != null && message.hasOwnProperty("winners")) {
                if (!Array.isArray(message.winners))
                    return "winners: array expected";
                for (var i = 0; i < message.winners.length; ++i) {
                    var error = $root.game.MarbleState.verify(message.winners[i]);
                    if (error)
                        return "winners." + error;
                }
            }
            if (message.winner != null && message.hasOwnProperty("winner")) {
                properties._winner = 1;
                {
                    var error = $root.game.MarbleState.verify(message.winner);
                    if (error)
                        return "winner." + error;
                }
            }
            if (message.entities != null && message.hasOwnProperty("entities")) {
                if (!Array.isArray(message.entities))
                    return "entities: array expected";
                for (var i = 0; i < message.entities.length; ++i) {
                    var error = $root.game.EntityState.verify(message.entities[i]);
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
                for (var i = 0; i < message.skillEffects.length; ++i) {
                    var error = $root.game.SkillEffect.verify(message.skillEffects[i]);
                    if (error)
                        return "skillEffects." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameState} GameState
         */
        GameState.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameState)
                return object;
            var message = new $root.game.GameState();
            if (object.marbles) {
                if (!Array.isArray(object.marbles))
                    throw TypeError(".game.GameState.marbles: array expected");
                message.marbles = [];
                for (var i = 0; i < object.marbles.length; ++i) {
                    if (typeof object.marbles[i] !== "object")
                        throw TypeError(".game.GameState.marbles: object expected");
                    message.marbles[i] = $root.game.MarbleState.fromObject(object.marbles[i]);
                }
            }
            if (object.winners) {
                if (!Array.isArray(object.winners))
                    throw TypeError(".game.GameState.winners: array expected");
                message.winners = [];
                for (var i = 0; i < object.winners.length; ++i) {
                    if (typeof object.winners[i] !== "object")
                        throw TypeError(".game.GameState.winners: object expected");
                    message.winners[i] = $root.game.MarbleState.fromObject(object.winners[i]);
                }
            }
            if (object.winner != null) {
                if (typeof object.winner !== "object")
                    throw TypeError(".game.GameState.winner: object expected");
                message.winner = $root.game.MarbleState.fromObject(object.winner);
            }
            if (object.entities) {
                if (!Array.isArray(object.entities))
                    throw TypeError(".game.GameState.entities: array expected");
                message.entities = [];
                for (var i = 0; i < object.entities.length; ++i) {
                    if (typeof object.entities[i] !== "object")
                        throw TypeError(".game.GameState.entities: object expected");
                    message.entities[i] = $root.game.EntityState.fromObject(object.entities[i]);
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
                    throw TypeError(".game.GameState.skillEffects: array expected");
                message.skillEffects = [];
                for (var i = 0; i < object.skillEffects.length; ++i) {
                    if (typeof object.skillEffects[i] !== "object")
                        throw TypeError(".game.GameState.skillEffects: object expected");
                    message.skillEffects[i] = $root.game.SkillEffect.fromObject(object.skillEffects[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameState
         * @static
         * @param {game.GameState} message GameState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
                for (var j = 0; j < message.marbles.length; ++j)
                    object.marbles[j] = $root.game.MarbleState.toObject(message.marbles[j], options);
            }
            if (message.winners && message.winners.length) {
                object.winners = [];
                for (var j = 0; j < message.winners.length; ++j)
                    object.winners[j] = $root.game.MarbleState.toObject(message.winners[j], options);
            }
            if (message.winner != null && message.hasOwnProperty("winner")) {
                object.winner = $root.game.MarbleState.toObject(message.winner, options);
                if (options.oneofs)
                    object._winner = "winner";
            }
            if (message.entities && message.entities.length) {
                object.entities = [];
                for (var j = 0; j < message.entities.length; ++j)
                    object.entities[j] = $root.game.EntityState.toObject(message.entities[j], options);
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
                for (var j = 0; j < message.skillEffects.length; ++j)
                    object.skillEffects[j] = $root.game.SkillEffect.toObject(message.skillEffects[j], options);
            }
            return object;
        };

        /**
         * Converts this GameState to JSON.
         * @function toJSON
         * @memberof game.GameState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameState
         * @function getTypeUrl
         * @memberof game.GameState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.GameState";
        };

        return GameState;
    })();

    return game;
})();

module.exports = $root;
