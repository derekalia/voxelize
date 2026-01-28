import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace protocol. */
export namespace protocol {

    /** Properties of a Geometry. */
    interface IGeometry {

        /** Geometry voxel */
        voxel?: (number|null);

        /** Geometry faceName */
        faceName?: (string|null);

        /** Geometry at */
        at?: (number[]|null);

        /** Geometry positions */
        positions?: (Uint8Array|null);

        /** Geometry uvs */
        uvs?: (Uint8Array|null);

        /** Geometry indices */
        indices?: (Uint8Array|null);

        /** Geometry lights */
        lights?: (Uint8Array|null);
    }

    /** Represents a Geometry. */
    class Geometry implements IGeometry {

        /**
         * Constructs a new Geometry.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGeometry);

        /** Geometry voxel. */
        public voxel: number;

        /** Geometry faceName. */
        public faceName?: (string|null);

        /** Geometry at. */
        public at: number[];

        /** Geometry positions. */
        public positions: Uint8Array;

        /** Geometry uvs. */
        public uvs: Uint8Array;

        /** Geometry indices. */
        public indices: Uint8Array;

        /** Geometry lights. */
        public lights: Uint8Array;

        /**
         * Creates a new Geometry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Geometry instance
         */
        public static create(properties?: protocol.IGeometry): protocol.Geometry;

        /**
         * Encodes the specified Geometry message. Does not implicitly {@link protocol.Geometry.verify|verify} messages.
         * @param message Geometry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGeometry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Geometry message, length delimited. Does not implicitly {@link protocol.Geometry.verify|verify} messages.
         * @param message Geometry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGeometry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Geometry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Geometry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Geometry;

        /**
         * Decodes a Geometry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Geometry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Geometry;

        /**
         * Verifies a Geometry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Geometry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Geometry
         */
        public static fromObject(object: { [k: string]: any }): protocol.Geometry;

        /**
         * Creates a plain object from a Geometry message. Also converts values to other types if specified.
         * @param message Geometry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Geometry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Geometry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Geometry
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Mesh. */
    interface IMesh {

        /** Mesh level */
        level?: (number|null);

        /** Mesh geometries */
        geometries?: (protocol.IGeometry[]|null);
    }

    /** Represents a Mesh. */
    class Mesh implements IMesh {

        /**
         * Constructs a new Mesh.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMesh);

        /** Mesh level. */
        public level: number;

        /** Mesh geometries. */
        public geometries: protocol.IGeometry[];

        /**
         * Creates a new Mesh instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mesh instance
         */
        public static create(properties?: protocol.IMesh): protocol.Mesh;

        /**
         * Encodes the specified Mesh message. Does not implicitly {@link protocol.Mesh.verify|verify} messages.
         * @param message Mesh message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMesh, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Mesh message, length delimited. Does not implicitly {@link protocol.Mesh.verify|verify} messages.
         * @param message Mesh message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMesh, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mesh message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Mesh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Mesh;

        /**
         * Decodes a Mesh message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Mesh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Mesh;

        /**
         * Verifies a Mesh message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Mesh message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Mesh
         */
        public static fromObject(object: { [k: string]: any }): protocol.Mesh;

        /**
         * Creates a plain object from a Mesh message. Also converts values to other types if specified.
         * @param message Mesh
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Mesh, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Mesh to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Mesh
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Chunk. */
    interface IChunk {

        /** Chunk x */
        x?: (number|null);

        /** Chunk z */
        z?: (number|null);

        /** Chunk id */
        id?: (string|null);

        /** Chunk meshes */
        meshes?: (protocol.IMesh[]|null);

        /** Chunk voxels */
        voxels?: (Uint8Array|null);

        /** Chunk lights */
        lights?: (Uint8Array|null);
    }

    /** Represents a Chunk. */
    class Chunk implements IChunk {

        /**
         * Constructs a new Chunk.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IChunk);

        /** Chunk x. */
        public x: number;

        /** Chunk z. */
        public z: number;

        /** Chunk id. */
        public id: string;

        /** Chunk meshes. */
        public meshes: protocol.IMesh[];

        /** Chunk voxels. */
        public voxels: Uint8Array;

        /** Chunk lights. */
        public lights: Uint8Array;

        /**
         * Creates a new Chunk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chunk instance
         */
        public static create(properties?: protocol.IChunk): protocol.Chunk;

        /**
         * Encodes the specified Chunk message. Does not implicitly {@link protocol.Chunk.verify|verify} messages.
         * @param message Chunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chunk message, length delimited. Does not implicitly {@link protocol.Chunk.verify|verify} messages.
         * @param message Chunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chunk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Chunk;

        /**
         * Decodes a Chunk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Chunk;

        /**
         * Verifies a Chunk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chunk
         */
        public static fromObject(object: { [k: string]: any }): protocol.Chunk;

        /**
         * Creates a plain object from a Chunk message. Also converts values to other types if specified.
         * @param message Chunk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Chunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chunk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Chunk
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Peer. */
    interface IPeer {

        /** Peer id */
        id?: (string|null);

        /** Peer username */
        username?: (string|null);

        /** Peer metadata */
        metadata?: (string|null);
    }

    /** Represents a Peer. */
    class Peer implements IPeer {

        /**
         * Constructs a new Peer.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPeer);

        /** Peer id. */
        public id: string;

        /** Peer username. */
        public username: string;

        /** Peer metadata. */
        public metadata: string;

        /**
         * Creates a new Peer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Peer instance
         */
        public static create(properties?: protocol.IPeer): protocol.Peer;

        /**
         * Encodes the specified Peer message. Does not implicitly {@link protocol.Peer.verify|verify} messages.
         * @param message Peer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Peer message, length delimited. Does not implicitly {@link protocol.Peer.verify|verify} messages.
         * @param message Peer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Peer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Peer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Peer;

        /**
         * Decodes a Peer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Peer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Peer;

        /**
         * Verifies a Peer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Peer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Peer
         */
        public static fromObject(object: { [k: string]: any }): protocol.Peer;

        /**
         * Creates a plain object from a Peer message. Also converts values to other types if specified.
         * @param message Peer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Peer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Peer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Peer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Entity. */
    interface IEntity {

        /** Entity operation */
        operation?: (protocol.Entity.Operation|null);

        /** Entity id */
        id?: (string|null);

        /** Entity type */
        type?: (string|null);

        /** Entity metadata */
        metadata?: (string|null);
    }

    /** Represents an Entity. */
    class Entity implements IEntity {

        /**
         * Constructs a new Entity.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IEntity);

        /** Entity operation. */
        public operation: protocol.Entity.Operation;

        /** Entity id. */
        public id: string;

        /** Entity type. */
        public type: string;

        /** Entity metadata. */
        public metadata: string;

        /**
         * Creates a new Entity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entity instance
         */
        public static create(properties?: protocol.IEntity): protocol.Entity;

        /**
         * Encodes the specified Entity message. Does not implicitly {@link protocol.Entity.verify|verify} messages.
         * @param message Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entity message, length delimited. Does not implicitly {@link protocol.Entity.verify|verify} messages.
         * @param message Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Entity;

        /**
         * Decodes an Entity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Entity;

        /**
         * Verifies an Entity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Entity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entity
         */
        public static fromObject(object: { [k: string]: any }): protocol.Entity;

        /**
         * Creates a plain object from an Entity message. Also converts values to other types if specified.
         * @param message Entity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Entity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Entity {

        /** Operation enum. */
        enum Operation {
            CREATE = 0,
            DELETE = 1,
            UPDATE = 2
        }
    }

    /** Properties of an Event. */
    interface IEvent {

        /** Event name */
        name?: (string|null);

        /** Event payload */
        payload?: (string|null);
    }

    /** Represents an Event. */
    class Event implements IEvent {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IEvent);

        /** Event name. */
        public name: string;

        /** Event payload. */
        public payload: string;

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(properties?: protocol.IEvent): protocol.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link protocol.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link protocol.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Event;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: { [k: string]: any }): protocol.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Event
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Method. */
    interface IMethod {

        /** Method name */
        name?: (string|null);

        /** Method payload */
        payload?: (string|null);
    }

    /** Represents a Method. */
    class Method implements IMethod {

        /**
         * Constructs a new Method.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMethod);

        /** Method name. */
        public name: string;

        /** Method payload. */
        public payload: string;

        /**
         * Creates a new Method instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Method instance
         */
        public static create(properties?: protocol.IMethod): protocol.Method;

        /**
         * Encodes the specified Method message. Does not implicitly {@link protocol.Method.verify|verify} messages.
         * @param message Method message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMethod, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Method message, length delimited. Does not implicitly {@link protocol.Method.verify|verify} messages.
         * @param message Method message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMethod, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Method message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Method
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Method;

        /**
         * Decodes a Method message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Method
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Method;

        /**
         * Verifies a Method message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Method message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Method
         */
        public static fromObject(object: { [k: string]: any }): protocol.Method;

        /**
         * Creates a plain object from a Method message. Also converts values to other types if specified.
         * @param message Method
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Method, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Method to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Method
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Update. */
    interface IUpdate {

        /** Update vx */
        vx?: (number|null);

        /** Update vy */
        vy?: (number|null);

        /** Update vz */
        vz?: (number|null);

        /** Update voxel */
        voxel?: (number|null);

        /** Update light */
        light?: (number|null);
    }

    /** Represents an Update. */
    class Update implements IUpdate {

        /**
         * Constructs a new Update.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IUpdate);

        /** Update vx. */
        public vx: number;

        /** Update vy. */
        public vy: number;

        /** Update vz. */
        public vz: number;

        /** Update voxel. */
        public voxel: number;

        /** Update light. */
        public light: number;

        /**
         * Creates a new Update instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Update instance
         */
        public static create(properties?: protocol.IUpdate): protocol.Update;

        /**
         * Encodes the specified Update message. Does not implicitly {@link protocol.Update.verify|verify} messages.
         * @param message Update message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Update message, length delimited. Does not implicitly {@link protocol.Update.verify|verify} messages.
         * @param message Update message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Update message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Update
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Update;

        /**
         * Decodes an Update message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Update
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Update;

        /**
         * Verifies an Update message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Update message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Update
         */
        public static fromObject(object: { [k: string]: any }): protocol.Update;

        /**
         * Creates a plain object from an Update message. Also converts values to other types if specified.
         * @param message Update
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Update, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Update to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Update
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BulkUpdate. */
    interface IBulkUpdate {

        /** BulkUpdate vx */
        vx?: (number[]|null);

        /** BulkUpdate vy */
        vy?: (number[]|null);

        /** BulkUpdate vz */
        vz?: (number[]|null);

        /** BulkUpdate voxels */
        voxels?: (number[]|null);

        /** BulkUpdate lights */
        lights?: (number[]|null);
    }

    /** Represents a BulkUpdate. */
    class BulkUpdate implements IBulkUpdate {

        /**
         * Constructs a new BulkUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBulkUpdate);

        /** BulkUpdate vx. */
        public vx: number[];

        /** BulkUpdate vy. */
        public vy: number[];

        /** BulkUpdate vz. */
        public vz: number[];

        /** BulkUpdate voxels. */
        public voxels: number[];

        /** BulkUpdate lights. */
        public lights: number[];

        /**
         * Creates a new BulkUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BulkUpdate instance
         */
        public static create(properties?: protocol.IBulkUpdate): protocol.BulkUpdate;

        /**
         * Encodes the specified BulkUpdate message. Does not implicitly {@link protocol.BulkUpdate.verify|verify} messages.
         * @param message BulkUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBulkUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BulkUpdate message, length delimited. Does not implicitly {@link protocol.BulkUpdate.verify|verify} messages.
         * @param message BulkUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBulkUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BulkUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BulkUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BulkUpdate;

        /**
         * Decodes a BulkUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BulkUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BulkUpdate;

        /**
         * Verifies a BulkUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BulkUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BulkUpdate
         */
        public static fromObject(object: { [k: string]: any }): protocol.BulkUpdate;

        /**
         * Creates a plain object from a BulkUpdate message. Also converts values to other types if specified.
         * @param message BulkUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BulkUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BulkUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BulkUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatMessage. */
    interface IChatMessage {

        /** ChatMessage type */
        type?: (string|null);

        /** ChatMessage sender */
        sender?: (string|null);

        /** ChatMessage body */
        body?: (string|null);

        /** ChatMessage metadata */
        metadata?: (string|null);
    }

    /** Represents a ChatMessage. */
    class ChatMessage implements IChatMessage {

        /**
         * Constructs a new ChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IChatMessage);

        /** ChatMessage type. */
        public type: string;

        /** ChatMessage sender. */
        public sender: string;

        /** ChatMessage body. */
        public body: string;

        /** ChatMessage metadata. */
        public metadata: string;

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessage instance
         */
        public static create(properties?: protocol.IChatMessage): protocol.ChatMessage;

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link protocol.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link protocol.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ChatMessage;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ChatMessage;

        /**
         * Verifies a ChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessage
         */
        public static fromObject(object: { [k: string]: any }): protocol.ChatMessage;

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @param message ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message type */
        type?: (protocol.Message.Type|null);

        /** Message json */
        json?: (string|null);

        /** Message text */
        text?: (string|null);

        /** Message method */
        method?: (protocol.IMethod|null);

        /** Message chat */
        chat?: (protocol.IChatMessage|null);

        /** Message peers */
        peers?: (protocol.IPeer[]|null);

        /** Message entities */
        entities?: (protocol.IEntity[]|null);

        /** Message chunks */
        chunks?: (protocol.IChunk[]|null);

        /** Message events */
        events?: (protocol.IEvent[]|null);

        /** Message updates */
        updates?: (protocol.IUpdate[]|null);

        /** Message worldName */
        worldName?: (string|null);

        /** Message bulkUpdate */
        bulkUpdate?: (protocol.IBulkUpdate|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMessage);

        /** Message type. */
        public type: protocol.Message.Type;

        /** Message json. */
        public json: string;

        /** Message text. */
        public text: string;

        /** Message method. */
        public method?: (protocol.IMethod|null);

        /** Message chat. */
        public chat?: (protocol.IChatMessage|null);

        /** Message peers. */
        public peers: protocol.IPeer[];

        /** Message entities. */
        public entities: protocol.IEntity[];

        /** Message chunks. */
        public chunks: protocol.IChunk[];

        /** Message events. */
        public events: protocol.IEvent[];

        /** Message updates. */
        public updates: protocol.IUpdate[];

        /** Message worldName. */
        public worldName: string;

        /** Message bulkUpdate. */
        public bulkUpdate?: (protocol.IBulkUpdate|null);

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: protocol.IMessage): protocol.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): protocol.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Message {

        /** Type enum. */
        enum Type {
            INIT = 0,
            JOIN = 1,
            LEAVE = 2,
            ERROR = 3,
            PEER = 4,
            ENTITY = 5,
            LOAD = 6,
            UNLOAD = 7,
            UPDATE = 8,
            METHOD = 9,
            CHAT = 10,
            TRANSPORT = 11,
            EVENT = 12,
            ACTION = 13,
            STATS = 14
        }
    }
}
