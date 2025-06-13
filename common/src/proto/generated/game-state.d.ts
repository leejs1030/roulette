import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace gamestate. */
export namespace gamestate {

    /** SkillType enum. */
    enum SkillType {
        Impact = 0,
        DummyMarble = 1
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position x */
        x?: (number|null);

        /** Position y */
        y?: (number|null);
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IPosition);

        /** Position x. */
        public x: number;

        /** Position y. */
        public y: number;

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: gamestate.IPosition): gamestate.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link gamestate.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link gamestate.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.Position;

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.Position;

        /**
         * Verifies a Position message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): gamestate.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Position
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** EntityShapeType enum. */
    enum EntityShapeType {
        box = 0,
        circle = 1,
        polyline = 2
    }

    /** Properties of an EntityBoxShape. */
    interface IEntityBoxShape {

        /** EntityBoxShape type */
        type?: (gamestate.EntityShapeType|null);

        /** EntityBoxShape width */
        width?: (number|null);

        /** EntityBoxShape height */
        height?: (number|null);

        /** EntityBoxShape rotation */
        rotation?: (number|null);
    }

    /** Represents an EntityBoxShape. */
    class EntityBoxShape implements IEntityBoxShape {

        /**
         * Constructs a new EntityBoxShape.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IEntityBoxShape);

        /** EntityBoxShape type. */
        public type: gamestate.EntityShapeType;

        /** EntityBoxShape width. */
        public width: number;

        /** EntityBoxShape height. */
        public height: number;

        /** EntityBoxShape rotation. */
        public rotation: number;

        /**
         * Creates a new EntityBoxShape instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityBoxShape instance
         */
        public static create(properties?: gamestate.IEntityBoxShape): gamestate.EntityBoxShape;

        /**
         * Encodes the specified EntityBoxShape message. Does not implicitly {@link gamestate.EntityBoxShape.verify|verify} messages.
         * @param message EntityBoxShape message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IEntityBoxShape, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityBoxShape message, length delimited. Does not implicitly {@link gamestate.EntityBoxShape.verify|verify} messages.
         * @param message EntityBoxShape message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IEntityBoxShape, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityBoxShape message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityBoxShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.EntityBoxShape;

        /**
         * Decodes an EntityBoxShape message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityBoxShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.EntityBoxShape;

        /**
         * Verifies an EntityBoxShape message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityBoxShape message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityBoxShape
         */
        public static fromObject(object: { [k: string]: any }): gamestate.EntityBoxShape;

        /**
         * Creates a plain object from an EntityBoxShape message. Also converts values to other types if specified.
         * @param message EntityBoxShape
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.EntityBoxShape, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityBoxShape to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntityBoxShape
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EntityCircleShape. */
    interface IEntityCircleShape {

        /** EntityCircleShape type */
        type?: (gamestate.EntityShapeType|null);

        /** EntityCircleShape radius */
        radius?: (number|null);
    }

    /** Represents an EntityCircleShape. */
    class EntityCircleShape implements IEntityCircleShape {

        /**
         * Constructs a new EntityCircleShape.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IEntityCircleShape);

        /** EntityCircleShape type. */
        public type: gamestate.EntityShapeType;

        /** EntityCircleShape radius. */
        public radius: number;

        /**
         * Creates a new EntityCircleShape instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityCircleShape instance
         */
        public static create(properties?: gamestate.IEntityCircleShape): gamestate.EntityCircleShape;

        /**
         * Encodes the specified EntityCircleShape message. Does not implicitly {@link gamestate.EntityCircleShape.verify|verify} messages.
         * @param message EntityCircleShape message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IEntityCircleShape, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityCircleShape message, length delimited. Does not implicitly {@link gamestate.EntityCircleShape.verify|verify} messages.
         * @param message EntityCircleShape message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IEntityCircleShape, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityCircleShape message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityCircleShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.EntityCircleShape;

        /**
         * Decodes an EntityCircleShape message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityCircleShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.EntityCircleShape;

        /**
         * Verifies an EntityCircleShape message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityCircleShape message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityCircleShape
         */
        public static fromObject(object: { [k: string]: any }): gamestate.EntityCircleShape;

        /**
         * Creates a plain object from an EntityCircleShape message. Also converts values to other types if specified.
         * @param message EntityCircleShape
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.EntityCircleShape, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityCircleShape to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntityCircleShape
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PolylinePoint. */
    interface IPolylinePoint {

        /** PolylinePoint x */
        x?: (number|null);

        /** PolylinePoint y */
        y?: (number|null);
    }

    /** Represents a PolylinePoint. */
    class PolylinePoint implements IPolylinePoint {

        /**
         * Constructs a new PolylinePoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IPolylinePoint);

        /** PolylinePoint x. */
        public x: number;

        /** PolylinePoint y. */
        public y: number;

        /**
         * Creates a new PolylinePoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PolylinePoint instance
         */
        public static create(properties?: gamestate.IPolylinePoint): gamestate.PolylinePoint;

        /**
         * Encodes the specified PolylinePoint message. Does not implicitly {@link gamestate.PolylinePoint.verify|verify} messages.
         * @param message PolylinePoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IPolylinePoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PolylinePoint message, length delimited. Does not implicitly {@link gamestate.PolylinePoint.verify|verify} messages.
         * @param message PolylinePoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IPolylinePoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PolylinePoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PolylinePoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.PolylinePoint;

        /**
         * Decodes a PolylinePoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PolylinePoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.PolylinePoint;

        /**
         * Verifies a PolylinePoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PolylinePoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PolylinePoint
         */
        public static fromObject(object: { [k: string]: any }): gamestate.PolylinePoint;

        /**
         * Creates a plain object from a PolylinePoint message. Also converts values to other types if specified.
         * @param message PolylinePoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.PolylinePoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PolylinePoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PolylinePoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EntityPolylineShape. */
    interface IEntityPolylineShape {

        /** EntityPolylineShape type */
        type?: (gamestate.EntityShapeType|null);

        /** EntityPolylineShape rotation */
        rotation?: (number|null);

        /** EntityPolylineShape points */
        points?: (gamestate.IPolylinePoint[]|null);
    }

    /** Represents an EntityPolylineShape. */
    class EntityPolylineShape implements IEntityPolylineShape {

        /**
         * Constructs a new EntityPolylineShape.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IEntityPolylineShape);

        /** EntityPolylineShape type. */
        public type: gamestate.EntityShapeType;

        /** EntityPolylineShape rotation. */
        public rotation: number;

        /** EntityPolylineShape points. */
        public points: gamestate.IPolylinePoint[];

        /**
         * Creates a new EntityPolylineShape instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityPolylineShape instance
         */
        public static create(properties?: gamestate.IEntityPolylineShape): gamestate.EntityPolylineShape;

        /**
         * Encodes the specified EntityPolylineShape message. Does not implicitly {@link gamestate.EntityPolylineShape.verify|verify} messages.
         * @param message EntityPolylineShape message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IEntityPolylineShape, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityPolylineShape message, length delimited. Does not implicitly {@link gamestate.EntityPolylineShape.verify|verify} messages.
         * @param message EntityPolylineShape message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IEntityPolylineShape, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityPolylineShape message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityPolylineShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.EntityPolylineShape;

        /**
         * Decodes an EntityPolylineShape message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityPolylineShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.EntityPolylineShape;

        /**
         * Verifies an EntityPolylineShape message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityPolylineShape message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityPolylineShape
         */
        public static fromObject(object: { [k: string]: any }): gamestate.EntityPolylineShape;

        /**
         * Creates a plain object from an EntityPolylineShape message. Also converts values to other types if specified.
         * @param message EntityPolylineShape
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.EntityPolylineShape, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityPolylineShape to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntityPolylineShape
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EntityShape. */
    interface IEntityShape {

        /** EntityShape boxShape */
        boxShape?: (gamestate.IEntityBoxShape|null);

        /** EntityShape circleShape */
        circleShape?: (gamestate.IEntityCircleShape|null);

        /** EntityShape polylineShape */
        polylineShape?: (gamestate.IEntityPolylineShape|null);
    }

    /** Represents an EntityShape. */
    class EntityShape implements IEntityShape {

        /**
         * Constructs a new EntityShape.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IEntityShape);

        /** EntityShape boxShape. */
        public boxShape?: (gamestate.IEntityBoxShape|null);

        /** EntityShape circleShape. */
        public circleShape?: (gamestate.IEntityCircleShape|null);

        /** EntityShape polylineShape. */
        public polylineShape?: (gamestate.IEntityPolylineShape|null);

        /** EntityShape shape. */
        public shape?: ("boxShape"|"circleShape"|"polylineShape");

        /**
         * Creates a new EntityShape instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityShape instance
         */
        public static create(properties?: gamestate.IEntityShape): gamestate.EntityShape;

        /**
         * Encodes the specified EntityShape message. Does not implicitly {@link gamestate.EntityShape.verify|verify} messages.
         * @param message EntityShape message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IEntityShape, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityShape message, length delimited. Does not implicitly {@link gamestate.EntityShape.verify|verify} messages.
         * @param message EntityShape message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IEntityShape, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityShape message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.EntityShape;

        /**
         * Decodes an EntityShape message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityShape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.EntityShape;

        /**
         * Verifies an EntityShape message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityShape message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityShape
         */
        public static fromObject(object: { [k: string]: any }): gamestate.EntityShape;

        /**
         * Creates a plain object from an EntityShape message. Also converts values to other types if specified.
         * @param message EntityShape
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.EntityShape, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityShape to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntityShape
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MapEntityState. */
    interface IMapEntityState {

        /** MapEntityState x */
        x?: (number|null);

        /** MapEntityState y */
        y?: (number|null);

        /** MapEntityState angle */
        angle?: (number|null);

        /** MapEntityState shape */
        shape?: (gamestate.IEntityShape|null);

        /** MapEntityState life */
        life?: (number|null);
    }

    /** Represents a MapEntityState. */
    class MapEntityState implements IMapEntityState {

        /**
         * Constructs a new MapEntityState.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IMapEntityState);

        /** MapEntityState x. */
        public x: number;

        /** MapEntityState y. */
        public y: number;

        /** MapEntityState angle. */
        public angle: number;

        /** MapEntityState shape. */
        public shape?: (gamestate.IEntityShape|null);

        /** MapEntityState life. */
        public life: number;

        /**
         * Creates a new MapEntityState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MapEntityState instance
         */
        public static create(properties?: gamestate.IMapEntityState): gamestate.MapEntityState;

        /**
         * Encodes the specified MapEntityState message. Does not implicitly {@link gamestate.MapEntityState.verify|verify} messages.
         * @param message MapEntityState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IMapEntityState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MapEntityState message, length delimited. Does not implicitly {@link gamestate.MapEntityState.verify|verify} messages.
         * @param message MapEntityState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IMapEntityState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MapEntityState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MapEntityState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.MapEntityState;

        /**
         * Decodes a MapEntityState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MapEntityState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.MapEntityState;

        /**
         * Verifies a MapEntityState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MapEntityState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MapEntityState
         */
        public static fromObject(object: { [k: string]: any }): gamestate.MapEntityState;

        /**
         * Creates a plain object from a MapEntityState message. Also converts values to other types if specified.
         * @param message MapEntityState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.MapEntityState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MapEntityState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MapEntityState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SkillEffectBase. */
    interface ISkillEffectBase {

        /** SkillEffectBase id */
        id?: (string|null);

        /** SkillEffectBase type */
        type?: (gamestate.SkillType|null);

        /** SkillEffectBase timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a SkillEffectBase. */
    class SkillEffectBase implements ISkillEffectBase {

        /**
         * Constructs a new SkillEffectBase.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.ISkillEffectBase);

        /** SkillEffectBase id. */
        public id: string;

        /** SkillEffectBase type. */
        public type: gamestate.SkillType;

        /** SkillEffectBase timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new SkillEffectBase instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillEffectBase instance
         */
        public static create(properties?: gamestate.ISkillEffectBase): gamestate.SkillEffectBase;

        /**
         * Encodes the specified SkillEffectBase message. Does not implicitly {@link gamestate.SkillEffectBase.verify|verify} messages.
         * @param message SkillEffectBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.ISkillEffectBase, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SkillEffectBase message, length delimited. Does not implicitly {@link gamestate.SkillEffectBase.verify|verify} messages.
         * @param message SkillEffectBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.ISkillEffectBase, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SkillEffectBase message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillEffectBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.SkillEffectBase;

        /**
         * Decodes a SkillEffectBase message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillEffectBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.SkillEffectBase;

        /**
         * Verifies a SkillEffectBase message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SkillEffectBase message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SkillEffectBase
         */
        public static fromObject(object: { [k: string]: any }): gamestate.SkillEffectBase;

        /**
         * Creates a plain object from a SkillEffectBase message. Also converts values to other types if specified.
         * @param message SkillEffectBase
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.SkillEffectBase, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SkillEffectBase to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SkillEffectBase
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ImpactSkillEffect. */
    interface IImpactSkillEffect {

        /** ImpactSkillEffect base */
        base?: (gamestate.ISkillEffectBase|null);

        /** ImpactSkillEffect position */
        position?: (gamestate.IPosition|null);

        /** ImpactSkillEffect radius */
        radius?: (number|null);
    }

    /** Represents an ImpactSkillEffect. */
    class ImpactSkillEffect implements IImpactSkillEffect {

        /**
         * Constructs a new ImpactSkillEffect.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IImpactSkillEffect);

        /** ImpactSkillEffect base. */
        public base?: (gamestate.ISkillEffectBase|null);

        /** ImpactSkillEffect position. */
        public position?: (gamestate.IPosition|null);

        /** ImpactSkillEffect radius. */
        public radius: number;

        /**
         * Creates a new ImpactSkillEffect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ImpactSkillEffect instance
         */
        public static create(properties?: gamestate.IImpactSkillEffect): gamestate.ImpactSkillEffect;

        /**
         * Encodes the specified ImpactSkillEffect message. Does not implicitly {@link gamestate.ImpactSkillEffect.verify|verify} messages.
         * @param message ImpactSkillEffect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IImpactSkillEffect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImpactSkillEffect message, length delimited. Does not implicitly {@link gamestate.ImpactSkillEffect.verify|verify} messages.
         * @param message ImpactSkillEffect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IImpactSkillEffect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImpactSkillEffect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ImpactSkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.ImpactSkillEffect;

        /**
         * Decodes an ImpactSkillEffect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ImpactSkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.ImpactSkillEffect;

        /**
         * Verifies an ImpactSkillEffect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ImpactSkillEffect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ImpactSkillEffect
         */
        public static fromObject(object: { [k: string]: any }): gamestate.ImpactSkillEffect;

        /**
         * Creates a plain object from an ImpactSkillEffect message. Also converts values to other types if specified.
         * @param message ImpactSkillEffect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.ImpactSkillEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ImpactSkillEffect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ImpactSkillEffect
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DummyMarbleSkillEffect. */
    interface IDummyMarbleSkillEffect {

        /** DummyMarbleSkillEffect base */
        base?: (gamestate.ISkillEffectBase|null);
    }

    /** Represents a DummyMarbleSkillEffect. */
    class DummyMarbleSkillEffect implements IDummyMarbleSkillEffect {

        /**
         * Constructs a new DummyMarbleSkillEffect.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IDummyMarbleSkillEffect);

        /** DummyMarbleSkillEffect base. */
        public base?: (gamestate.ISkillEffectBase|null);

        /**
         * Creates a new DummyMarbleSkillEffect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DummyMarbleSkillEffect instance
         */
        public static create(properties?: gamestate.IDummyMarbleSkillEffect): gamestate.DummyMarbleSkillEffect;

        /**
         * Encodes the specified DummyMarbleSkillEffect message. Does not implicitly {@link gamestate.DummyMarbleSkillEffect.verify|verify} messages.
         * @param message DummyMarbleSkillEffect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IDummyMarbleSkillEffect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DummyMarbleSkillEffect message, length delimited. Does not implicitly {@link gamestate.DummyMarbleSkillEffect.verify|verify} messages.
         * @param message DummyMarbleSkillEffect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IDummyMarbleSkillEffect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DummyMarbleSkillEffect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DummyMarbleSkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.DummyMarbleSkillEffect;

        /**
         * Decodes a DummyMarbleSkillEffect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DummyMarbleSkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.DummyMarbleSkillEffect;

        /**
         * Verifies a DummyMarbleSkillEffect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DummyMarbleSkillEffect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DummyMarbleSkillEffect
         */
        public static fromObject(object: { [k: string]: any }): gamestate.DummyMarbleSkillEffect;

        /**
         * Creates a plain object from a DummyMarbleSkillEffect message. Also converts values to other types if specified.
         * @param message DummyMarbleSkillEffect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.DummyMarbleSkillEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DummyMarbleSkillEffect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DummyMarbleSkillEffect
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SkillEffect. */
    interface ISkillEffect {

        /** SkillEffect impactEffect */
        impactEffect?: (gamestate.IImpactSkillEffect|null);

        /** SkillEffect dummyMarbleEffect */
        dummyMarbleEffect?: (gamestate.IDummyMarbleSkillEffect|null);
    }

    /** Represents a SkillEffect. */
    class SkillEffect implements ISkillEffect {

        /**
         * Constructs a new SkillEffect.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.ISkillEffect);

        /** SkillEffect impactEffect. */
        public impactEffect?: (gamestate.IImpactSkillEffect|null);

        /** SkillEffect dummyMarbleEffect. */
        public dummyMarbleEffect?: (gamestate.IDummyMarbleSkillEffect|null);

        /** SkillEffect effect. */
        public effect?: ("impactEffect"|"dummyMarbleEffect");

        /**
         * Creates a new SkillEffect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillEffect instance
         */
        public static create(properties?: gamestate.ISkillEffect): gamestate.SkillEffect;

        /**
         * Encodes the specified SkillEffect message. Does not implicitly {@link gamestate.SkillEffect.verify|verify} messages.
         * @param message SkillEffect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.ISkillEffect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SkillEffect message, length delimited. Does not implicitly {@link gamestate.SkillEffect.verify|verify} messages.
         * @param message SkillEffect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.ISkillEffect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SkillEffect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.SkillEffect;

        /**
         * Decodes a SkillEffect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.SkillEffect;

        /**
         * Verifies a SkillEffect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SkillEffect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SkillEffect
         */
        public static fromObject(object: { [k: string]: any }): gamestate.SkillEffect;

        /**
         * Creates a plain object from a SkillEffect message. Also converts values to other types if specified.
         * @param message SkillEffect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.SkillEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SkillEffect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SkillEffect
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MarbleDto. */
    interface IMarbleDto {

        /** MarbleDto id */
        id?: (number|null);

        /** MarbleDto name */
        name?: (string|null);

        /** MarbleDto x */
        x?: (number|null);

        /** MarbleDto y */
        y?: (number|null);

        /** MarbleDto angle */
        angle?: (number|null);

        /** MarbleDto color */
        color?: (string|null);

        /** MarbleDto hue */
        hue?: (number|null);

        /** MarbleDto isActive */
        isActive?: (boolean|null);

        /** MarbleDto isDummy */
        isDummy?: (boolean|null);

        /** MarbleDto radius */
        radius?: (number|null);
    }

    /** Represents a MarbleDto. */
    class MarbleDto implements IMarbleDto {

        /**
         * Constructs a new MarbleDto.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IMarbleDto);

        /** MarbleDto id. */
        public id: number;

        /** MarbleDto name. */
        public name: string;

        /** MarbleDto x. */
        public x: number;

        /** MarbleDto y. */
        public y: number;

        /** MarbleDto angle. */
        public angle: number;

        /** MarbleDto color. */
        public color: string;

        /** MarbleDto hue. */
        public hue: number;

        /** MarbleDto isActive. */
        public isActive: boolean;

        /** MarbleDto isDummy. */
        public isDummy: boolean;

        /** MarbleDto radius. */
        public radius: number;

        /**
         * Creates a new MarbleDto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MarbleDto instance
         */
        public static create(properties?: gamestate.IMarbleDto): gamestate.MarbleDto;

        /**
         * Encodes the specified MarbleDto message. Does not implicitly {@link gamestate.MarbleDto.verify|verify} messages.
         * @param message MarbleDto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IMarbleDto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MarbleDto message, length delimited. Does not implicitly {@link gamestate.MarbleDto.verify|verify} messages.
         * @param message MarbleDto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IMarbleDto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MarbleDto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MarbleDto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.MarbleDto;

        /**
         * Decodes a MarbleDto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MarbleDto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.MarbleDto;

        /**
         * Verifies a MarbleDto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MarbleDto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MarbleDto
         */
        public static fromObject(object: { [k: string]: any }): gamestate.MarbleDto;

        /**
         * Creates a plain object from a MarbleDto message. Also converts values to other types if specified.
         * @param message MarbleDto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.MarbleDto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MarbleDto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MarbleDto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameStateDto. */
    interface IGameStateDto {

        /** GameStateDto marbles */
        marbles?: (gamestate.IMarbleDto[]|null);

        /** GameStateDto winners */
        winners?: (gamestate.IMarbleDto[]|null);

        /** GameStateDto winner */
        winner?: (gamestate.IMarbleDto|null);

        /** GameStateDto entities */
        entities?: (gamestate.IMapEntityState[]|null);

        /** GameStateDto isRunning */
        isRunning?: (boolean|null);

        /** GameStateDto winnerRank */
        winnerRank?: (number|null);

        /** GameStateDto totalMarbleCount */
        totalMarbleCount?: (number|null);

        /** GameStateDto shakeAvailable */
        shakeAvailable?: (boolean|null);

        /** GameStateDto skillEffects */
        skillEffects?: (gamestate.ISkillEffect[]|null);
    }

    /** Represents a GameStateDto. */
    class GameStateDto implements IGameStateDto {

        /**
         * Constructs a new GameStateDto.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamestate.IGameStateDto);

        /** GameStateDto marbles. */
        public marbles: gamestate.IMarbleDto[];

        /** GameStateDto winners. */
        public winners: gamestate.IMarbleDto[];

        /** GameStateDto winner. */
        public winner?: (gamestate.IMarbleDto|null);

        /** GameStateDto entities. */
        public entities: gamestate.IMapEntityState[];

        /** GameStateDto isRunning. */
        public isRunning: boolean;

        /** GameStateDto winnerRank. */
        public winnerRank: number;

        /** GameStateDto totalMarbleCount. */
        public totalMarbleCount: number;

        /** GameStateDto shakeAvailable. */
        public shakeAvailable: boolean;

        /** GameStateDto skillEffects. */
        public skillEffects: gamestate.ISkillEffect[];

        /** GameStateDto _winner. */
        public _winner?: "winner";

        /**
         * Creates a new GameStateDto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStateDto instance
         */
        public static create(properties?: gamestate.IGameStateDto): gamestate.GameStateDto;

        /**
         * Encodes the specified GameStateDto message. Does not implicitly {@link gamestate.GameStateDto.verify|verify} messages.
         * @param message GameStateDto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamestate.IGameStateDto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStateDto message, length delimited. Does not implicitly {@link gamestate.GameStateDto.verify|verify} messages.
         * @param message GameStateDto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamestate.IGameStateDto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStateDto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStateDto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamestate.GameStateDto;

        /**
         * Decodes a GameStateDto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStateDto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamestate.GameStateDto;

        /**
         * Verifies a GameStateDto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStateDto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStateDto
         */
        public static fromObject(object: { [k: string]: any }): gamestate.GameStateDto;

        /**
         * Creates a plain object from a GameStateDto message. Also converts values to other types if specified.
         * @param message GameStateDto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamestate.GameStateDto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStateDto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameStateDto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
