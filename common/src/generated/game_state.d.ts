import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace game. */
export namespace game {

    /** Properties of a Vector. */
    interface IVector {

        /** Vector x */
        x?: (number|null);

        /** Vector y */
        y?: (number|null);
    }

    /** Represents a Vector. */
    class Vector implements IVector {

        /**
         * Constructs a new Vector.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IVector);

        /** Vector x. */
        public x: number;

        /** Vector y. */
        public y: number;

        /**
         * Creates a new Vector instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vector instance
         */
        public static create(properties?: game.IVector): game.Vector;

        /**
         * Encodes the specified Vector message. Does not implicitly {@link game.Vector.verify|verify} messages.
         * @param message Vector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IVector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Vector message, length delimited. Does not implicitly {@link game.Vector.verify|verify} messages.
         * @param message Vector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IVector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Vector message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Vector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Vector;

        /**
         * Decodes a Vector message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Vector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Vector;

        /**
         * Verifies a Vector message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Vector message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Vector
         */
        public static fromObject(object: { [k: string]: any }): game.Vector;

        /**
         * Creates a plain object from a Vector message. Also converts values to other types if specified.
         * @param message Vector
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Vector, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Vector to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Vector
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MarbleState. */
    interface IMarbleState {

        /** MarbleState id */
        id?: (number|null);

        /** MarbleState name */
        name?: (string|null);

        /** MarbleState x */
        x?: (number|null);

        /** MarbleState y */
        y?: (number|null);

        /** MarbleState angle */
        angle?: (number|null);

        /** MarbleState color */
        color?: (string|null);

        /** MarbleState hue */
        hue?: (number|null);

        /** MarbleState isActive */
        isActive?: (boolean|null);

        /** MarbleState skill */
        skill?: (number|null);

        /** MarbleState isDummy */
        isDummy?: (boolean|null);
    }

    /** Represents a MarbleState. */
    class MarbleState implements IMarbleState {

        /**
         * Constructs a new MarbleState.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IMarbleState);

        /** MarbleState id. */
        public id: number;

        /** MarbleState name. */
        public name: string;

        /** MarbleState x. */
        public x: number;

        /** MarbleState y. */
        public y: number;

        /** MarbleState angle. */
        public angle: number;

        /** MarbleState color. */
        public color: string;

        /** MarbleState hue. */
        public hue: number;

        /** MarbleState isActive. */
        public isActive: boolean;

        /** MarbleState skill. */
        public skill: number;

        /** MarbleState isDummy. */
        public isDummy: boolean;

        /**
         * Creates a new MarbleState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MarbleState instance
         */
        public static create(properties?: game.IMarbleState): game.MarbleState;

        /**
         * Encodes the specified MarbleState message. Does not implicitly {@link game.MarbleState.verify|verify} messages.
         * @param message MarbleState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IMarbleState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MarbleState message, length delimited. Does not implicitly {@link game.MarbleState.verify|verify} messages.
         * @param message MarbleState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IMarbleState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MarbleState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MarbleState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.MarbleState;

        /**
         * Decodes a MarbleState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MarbleState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.MarbleState;

        /**
         * Verifies a MarbleState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MarbleState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MarbleState
         */
        public static fromObject(object: { [k: string]: any }): game.MarbleState;

        /**
         * Creates a plain object from a MarbleState message. Also converts values to other types if specified.
         * @param message MarbleState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.MarbleState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MarbleState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MarbleState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EntityState. */
    interface IEntityState {

        /** EntityState type */
        type?: (game.EntityState.EntityType|null);

        /** EntityState x */
        x?: (number|null);

        /** EntityState y */
        y?: (number|null);

        /** EntityState angle */
        angle?: (number|null);

        /** EntityState vertices */
        vertices?: (game.IVector[]|null);

        /** EntityState radius */
        radius?: (number|null);

        /** EntityState width */
        width?: (number|null);

        /** EntityState height */
        height?: (number|null);
    }

    /** Represents an EntityState. */
    class EntityState implements IEntityState {

        /**
         * Constructs a new EntityState.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IEntityState);

        /** EntityState type. */
        public type: game.EntityState.EntityType;

        /** EntityState x. */
        public x: number;

        /** EntityState y. */
        public y: number;

        /** EntityState angle. */
        public angle: number;

        /** EntityState vertices. */
        public vertices: game.IVector[];

        /** EntityState radius. */
        public radius?: (number|null);

        /** EntityState width. */
        public width?: (number|null);

        /** EntityState height. */
        public height?: (number|null);

        /** EntityState _radius. */
        public _radius?: "radius";

        /** EntityState _width. */
        public _width?: "width";

        /** EntityState _height. */
        public _height?: "height";

        /**
         * Creates a new EntityState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityState instance
         */
        public static create(properties?: game.IEntityState): game.EntityState;

        /**
         * Encodes the specified EntityState message. Does not implicitly {@link game.EntityState.verify|verify} messages.
         * @param message EntityState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IEntityState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityState message, length delimited. Does not implicitly {@link game.EntityState.verify|verify} messages.
         * @param message EntityState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IEntityState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.EntityState;

        /**
         * Decodes an EntityState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.EntityState;

        /**
         * Verifies an EntityState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityState
         */
        public static fromObject(object: { [k: string]: any }): game.EntityState;

        /**
         * Creates a plain object from an EntityState message. Also converts values to other types if specified.
         * @param message EntityState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.EntityState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntityState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace EntityState {

        /** EntityType enum. */
        enum EntityType {
            BOX = 0,
            CIRCLE = 1,
            POLYGON = 2
        }
    }

    /** Properties of a SkillEffect. */
    interface ISkillEffect {

        /** SkillEffect id */
        id?: (string|null);

        /** SkillEffect type */
        type?: (string|null);

        /** SkillEffect position */
        position?: (game.IVector|null);

        /** SkillEffect timestamp */
        timestamp?: (number|Long|null);

        /** SkillEffect userNickname */
        userNickname?: (string|null);
    }

    /** Represents a SkillEffect. */
    class SkillEffect implements ISkillEffect {

        /**
         * Constructs a new SkillEffect.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISkillEffect);

        /** SkillEffect id. */
        public id: string;

        /** SkillEffect type. */
        public type: string;

        /** SkillEffect position. */
        public position?: (game.IVector|null);

        /** SkillEffect timestamp. */
        public timestamp: (number|Long);

        /** SkillEffect userNickname. */
        public userNickname?: (string|null);

        /** SkillEffect _userNickname. */
        public _userNickname?: "userNickname";

        /**
         * Creates a new SkillEffect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillEffect instance
         */
        public static create(properties?: game.ISkillEffect): game.SkillEffect;

        /**
         * Encodes the specified SkillEffect message. Does not implicitly {@link game.SkillEffect.verify|verify} messages.
         * @param message SkillEffect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISkillEffect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SkillEffect message, length delimited. Does not implicitly {@link game.SkillEffect.verify|verify} messages.
         * @param message SkillEffect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISkillEffect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SkillEffect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.SkillEffect;

        /**
         * Decodes a SkillEffect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.SkillEffect;

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
        public static fromObject(object: { [k: string]: any }): game.SkillEffect;

        /**
         * Creates a plain object from a SkillEffect message. Also converts values to other types if specified.
         * @param message SkillEffect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SkillEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a GameState. */
    interface IGameState {

        /** GameState marbles */
        marbles?: (game.IMarbleState[]|null);

        /** GameState winners */
        winners?: (game.IMarbleState[]|null);

        /** GameState winner */
        winner?: (game.IMarbleState|null);

        /** GameState entities */
        entities?: (game.IEntityState[]|null);

        /** GameState isRunning */
        isRunning?: (boolean|null);

        /** GameState winnerRank */
        winnerRank?: (number|null);

        /** GameState totalMarbleCount */
        totalMarbleCount?: (number|null);

        /** GameState shakeAvailable */
        shakeAvailable?: (boolean|null);

        /** GameState skillEffects */
        skillEffects?: (game.ISkillEffect[]|null);
    }

    /** Represents a GameState. */
    class GameState implements IGameState {

        /**
         * Constructs a new GameState.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameState);

        /** GameState marbles. */
        public marbles: game.IMarbleState[];

        /** GameState winners. */
        public winners: game.IMarbleState[];

        /** GameState winner. */
        public winner?: (game.IMarbleState|null);

        /** GameState entities. */
        public entities: game.IEntityState[];

        /** GameState isRunning. */
        public isRunning: boolean;

        /** GameState winnerRank. */
        public winnerRank: number;

        /** GameState totalMarbleCount. */
        public totalMarbleCount: number;

        /** GameState shakeAvailable. */
        public shakeAvailable: boolean;

        /** GameState skillEffects. */
        public skillEffects: game.ISkillEffect[];

        /** GameState _winner. */
        public _winner?: "winner";

        /**
         * Creates a new GameState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameState instance
         */
        public static create(properties?: game.IGameState): game.GameState;

        /**
         * Encodes the specified GameState message. Does not implicitly {@link game.GameState.verify|verify} messages.
         * @param message GameState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameState message, length delimited. Does not implicitly {@link game.GameState.verify|verify} messages.
         * @param message GameState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.GameState;

        /**
         * Decodes a GameState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.GameState;

        /**
         * Verifies a GameState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameState
         */
        public static fromObject(object: { [k: string]: any }): game.GameState;

        /**
         * Creates a plain object from a GameState message. Also converts values to other types if specified.
         * @param message GameState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
