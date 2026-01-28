"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const $protobuf = require("protobufjs/minimal.js");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const $protobuf__namespace = /* @__PURE__ */ _interopNamespaceDefault($protobuf);
const $Reader = $protobuf__namespace.Reader, $Writer = $protobuf__namespace.Writer, $util = $protobuf__namespace.util;
const $root = $protobuf__namespace.roots["default"] || ($protobuf__namespace.roots["default"] = {});
const protocol = $root.protocol = (() => {
  const protocol2 = {};
  protocol2.Geometry = function() {
    function Geometry(properties) {
      this.at = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    Geometry.prototype.voxel = 0;
    Geometry.prototype.faceName = null;
    Geometry.prototype.at = $util.emptyArray;
    Geometry.prototype.positions = $util.newBuffer([]);
    Geometry.prototype.uvs = $util.newBuffer([]);
    Geometry.prototype.indices = $util.newBuffer([]);
    Geometry.prototype.lights = $util.newBuffer([]);
    let $oneOfFields;
    Object.defineProperty(Geometry.prototype, "_faceName", {
      get: $util.oneOfGetter($oneOfFields = ["faceName"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    Geometry.create = function create(properties) {
      return new Geometry(properties);
    };
    Geometry.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.voxel != null && Object.hasOwnProperty.call(message, "voxel"))
        writer.uint32(
          /* id 1, wireType 0 =*/
          8
        ).uint32(message.voxel);
      if (message.faceName != null && Object.hasOwnProperty.call(message, "faceName"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.faceName);
      if (message.at != null && message.at.length) {
        writer.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork();
        for (let i = 0; i < message.at.length; ++i)
          writer.int32(message.at[i]);
        writer.ldelim();
      }
      if (message.positions != null && Object.hasOwnProperty.call(message, "positions"))
        writer.uint32(
          /* id 4, wireType 2 =*/
          34
        ).bytes(message.positions);
      if (message.uvs != null && Object.hasOwnProperty.call(message, "uvs"))
        writer.uint32(
          /* id 5, wireType 2 =*/
          42
        ).bytes(message.uvs);
      if (message.indices != null && Object.hasOwnProperty.call(message, "indices"))
        writer.uint32(
          /* id 6, wireType 2 =*/
          50
        ).bytes(message.indices);
      if (message.lights != null && Object.hasOwnProperty.call(message, "lights"))
        writer.uint32(
          /* id 7, wireType 2 =*/
          58
        ).bytes(message.lights);
      return writer;
    };
    Geometry.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Geometry.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.Geometry();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.voxel = reader.uint32();
            break;
          }
          case 2: {
            message.faceName = reader.string();
            break;
          }
          case 3: {
            if (!(message.at && message.at.length))
              message.at = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2)
                message.at.push(reader.int32());
            } else
              message.at.push(reader.int32());
            break;
          }
          case 4: {
            message.positions = reader.bytes();
            break;
          }
          case 5: {
            message.uvs = reader.bytes();
            break;
          }
          case 6: {
            message.indices = reader.bytes();
            break;
          }
          case 7: {
            message.lights = reader.bytes();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    Geometry.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Geometry.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.voxel != null && message.hasOwnProperty("voxel")) {
        if (!$util.isInteger(message.voxel))
          return "voxel: integer expected";
      }
      if (message.faceName != null && message.hasOwnProperty("faceName")) {
        if (!$util.isString(message.faceName))
          return "faceName: string expected";
      }
      if (message.at != null && message.hasOwnProperty("at")) {
        if (!Array.isArray(message.at))
          return "at: array expected";
        for (let i = 0; i < message.at.length; ++i)
          if (!$util.isInteger(message.at[i]))
            return "at: integer[] expected";
      }
      if (message.positions != null && message.hasOwnProperty("positions")) {
        if (!(message.positions && typeof message.positions.length === "number" || $util.isString(message.positions)))
          return "positions: buffer expected";
      }
      if (message.uvs != null && message.hasOwnProperty("uvs")) {
        if (!(message.uvs && typeof message.uvs.length === "number" || $util.isString(message.uvs)))
          return "uvs: buffer expected";
      }
      if (message.indices != null && message.hasOwnProperty("indices")) {
        if (!(message.indices && typeof message.indices.length === "number" || $util.isString(message.indices)))
          return "indices: buffer expected";
      }
      if (message.lights != null && message.hasOwnProperty("lights")) {
        if (!(message.lights && typeof message.lights.length === "number" || $util.isString(message.lights)))
          return "lights: buffer expected";
      }
      return null;
    };
    Geometry.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.Geometry)
        return object;
      let message = new $root.protocol.Geometry();
      if (object.voxel != null)
        message.voxel = object.voxel >>> 0;
      if (object.faceName != null)
        message.faceName = String(object.faceName);
      if (object.at) {
        if (!Array.isArray(object.at))
          throw TypeError(".protocol.Geometry.at: array expected");
        message.at = [];
        for (let i = 0; i < object.at.length; ++i)
          message.at[i] = object.at[i] | 0;
      }
      if (object.positions != null) {
        if (typeof object.positions === "string")
          $util.base64.decode(object.positions, message.positions = $util.newBuffer($util.base64.length(object.positions)), 0);
        else if (object.positions.length >= 0)
          message.positions = object.positions;
      }
      if (object.uvs != null) {
        if (typeof object.uvs === "string")
          $util.base64.decode(object.uvs, message.uvs = $util.newBuffer($util.base64.length(object.uvs)), 0);
        else if (object.uvs.length >= 0)
          message.uvs = object.uvs;
      }
      if (object.indices != null) {
        if (typeof object.indices === "string")
          $util.base64.decode(object.indices, message.indices = $util.newBuffer($util.base64.length(object.indices)), 0);
        else if (object.indices.length >= 0)
          message.indices = object.indices;
      }
      if (object.lights != null) {
        if (typeof object.lights === "string")
          $util.base64.decode(object.lights, message.lights = $util.newBuffer($util.base64.length(object.lights)), 0);
        else if (object.lights.length >= 0)
          message.lights = object.lights;
      }
      return message;
    };
    Geometry.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.arrays || options.defaults)
        object.at = [];
      if (options.defaults) {
        object.voxel = 0;
        if (options.bytes === String)
          object.positions = "";
        else {
          object.positions = [];
          if (options.bytes !== Array)
            object.positions = $util.newBuffer(object.positions);
        }
        if (options.bytes === String)
          object.uvs = "";
        else {
          object.uvs = [];
          if (options.bytes !== Array)
            object.uvs = $util.newBuffer(object.uvs);
        }
        if (options.bytes === String)
          object.indices = "";
        else {
          object.indices = [];
          if (options.bytes !== Array)
            object.indices = $util.newBuffer(object.indices);
        }
        if (options.bytes === String)
          object.lights = "";
        else {
          object.lights = [];
          if (options.bytes !== Array)
            object.lights = $util.newBuffer(object.lights);
        }
      }
      if (message.voxel != null && message.hasOwnProperty("voxel"))
        object.voxel = message.voxel;
      if (message.faceName != null && message.hasOwnProperty("faceName")) {
        object.faceName = message.faceName;
        if (options.oneofs)
          object._faceName = "faceName";
      }
      if (message.at && message.at.length) {
        object.at = [];
        for (let j = 0; j < message.at.length; ++j)
          object.at[j] = message.at[j];
      }
      if (message.positions != null && message.hasOwnProperty("positions"))
        object.positions = options.bytes === String ? $util.base64.encode(message.positions, 0, message.positions.length) : options.bytes === Array ? Array.prototype.slice.call(message.positions) : message.positions;
      if (message.uvs != null && message.hasOwnProperty("uvs"))
        object.uvs = options.bytes === String ? $util.base64.encode(message.uvs, 0, message.uvs.length) : options.bytes === Array ? Array.prototype.slice.call(message.uvs) : message.uvs;
      if (message.indices != null && message.hasOwnProperty("indices"))
        object.indices = options.bytes === String ? $util.base64.encode(message.indices, 0, message.indices.length) : options.bytes === Array ? Array.prototype.slice.call(message.indices) : message.indices;
      if (message.lights != null && message.hasOwnProperty("lights"))
        object.lights = options.bytes === String ? $util.base64.encode(message.lights, 0, message.lights.length) : options.bytes === Array ? Array.prototype.slice.call(message.lights) : message.lights;
      return object;
    };
    Geometry.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    Geometry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.Geometry";
    };
    return Geometry;
  }();
  protocol2.Mesh = function() {
    function Mesh(properties) {
      this.geometries = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    Mesh.prototype.level = 0;
    Mesh.prototype.geometries = $util.emptyArray;
    Mesh.create = function create(properties) {
      return new Mesh(properties);
    };
    Mesh.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.level != null && Object.hasOwnProperty.call(message, "level"))
        writer.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(message.level);
      if (message.geometries != null && message.geometries.length)
        for (let i = 0; i < message.geometries.length; ++i)
          $root.protocol.Geometry.encode(message.geometries[i], writer.uint32(
            /* id 2, wireType 2 =*/
            18
          ).fork()).ldelim();
      return writer;
    };
    Mesh.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Mesh.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.Mesh();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.level = reader.int32();
            break;
          }
          case 2: {
            if (!(message.geometries && message.geometries.length))
              message.geometries = [];
            message.geometries.push($root.protocol.Geometry.decode(reader, reader.uint32()));
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    Mesh.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Mesh.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.level != null && message.hasOwnProperty("level")) {
        if (!$util.isInteger(message.level))
          return "level: integer expected";
      }
      if (message.geometries != null && message.hasOwnProperty("geometries")) {
        if (!Array.isArray(message.geometries))
          return "geometries: array expected";
        for (let i = 0; i < message.geometries.length; ++i) {
          let error = $root.protocol.Geometry.verify(message.geometries[i]);
          if (error)
            return "geometries." + error;
        }
      }
      return null;
    };
    Mesh.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.Mesh)
        return object;
      let message = new $root.protocol.Mesh();
      if (object.level != null)
        message.level = object.level | 0;
      if (object.geometries) {
        if (!Array.isArray(object.geometries))
          throw TypeError(".protocol.Mesh.geometries: array expected");
        message.geometries = [];
        for (let i = 0; i < object.geometries.length; ++i) {
          if (typeof object.geometries[i] !== "object")
            throw TypeError(".protocol.Mesh.geometries: object expected");
          message.geometries[i] = $root.protocol.Geometry.fromObject(object.geometries[i]);
        }
      }
      return message;
    };
    Mesh.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.arrays || options.defaults)
        object.geometries = [];
      if (options.defaults)
        object.level = 0;
      if (message.level != null && message.hasOwnProperty("level"))
        object.level = message.level;
      if (message.geometries && message.geometries.length) {
        object.geometries = [];
        for (let j = 0; j < message.geometries.length; ++j)
          object.geometries[j] = $root.protocol.Geometry.toObject(message.geometries[j], options);
      }
      return object;
    };
    Mesh.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    Mesh.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.Mesh";
    };
    return Mesh;
  }();
  protocol2.Chunk = function() {
    function Chunk(properties) {
      this.meshes = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    Chunk.prototype.x = 0;
    Chunk.prototype.z = 0;
    Chunk.prototype.id = "";
    Chunk.prototype.meshes = $util.emptyArray;
    Chunk.prototype.voxels = $util.newBuffer([]);
    Chunk.prototype.lights = $util.newBuffer([]);
    Chunk.create = function create(properties) {
      return new Chunk(properties);
    };
    Chunk.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.x != null && Object.hasOwnProperty.call(message, "x"))
        writer.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(message.x);
      if (message.z != null && Object.hasOwnProperty.call(message, "z"))
        writer.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(message.z);
      if (message.id != null && Object.hasOwnProperty.call(message, "id"))
        writer.uint32(
          /* id 3, wireType 2 =*/
          26
        ).string(message.id);
      if (message.meshes != null && message.meshes.length)
        for (let i = 0; i < message.meshes.length; ++i)
          $root.protocol.Mesh.encode(message.meshes[i], writer.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork()).ldelim();
      if (message.voxels != null && Object.hasOwnProperty.call(message, "voxels"))
        writer.uint32(
          /* id 5, wireType 2 =*/
          42
        ).bytes(message.voxels);
      if (message.lights != null && Object.hasOwnProperty.call(message, "lights"))
        writer.uint32(
          /* id 6, wireType 2 =*/
          50
        ).bytes(message.lights);
      return writer;
    };
    Chunk.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Chunk.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.Chunk();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.x = reader.int32();
            break;
          }
          case 2: {
            message.z = reader.int32();
            break;
          }
          case 3: {
            message.id = reader.string();
            break;
          }
          case 4: {
            if (!(message.meshes && message.meshes.length))
              message.meshes = [];
            message.meshes.push($root.protocol.Mesh.decode(reader, reader.uint32()));
            break;
          }
          case 5: {
            message.voxels = reader.bytes();
            break;
          }
          case 6: {
            message.lights = reader.bytes();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    Chunk.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Chunk.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.x != null && message.hasOwnProperty("x")) {
        if (!$util.isInteger(message.x))
          return "x: integer expected";
      }
      if (message.z != null && message.hasOwnProperty("z")) {
        if (!$util.isInteger(message.z))
          return "z: integer expected";
      }
      if (message.id != null && message.hasOwnProperty("id")) {
        if (!$util.isString(message.id))
          return "id: string expected";
      }
      if (message.meshes != null && message.hasOwnProperty("meshes")) {
        if (!Array.isArray(message.meshes))
          return "meshes: array expected";
        for (let i = 0; i < message.meshes.length; ++i) {
          let error = $root.protocol.Mesh.verify(message.meshes[i]);
          if (error)
            return "meshes." + error;
        }
      }
      if (message.voxels != null && message.hasOwnProperty("voxels")) {
        if (!(message.voxels && typeof message.voxels.length === "number" || $util.isString(message.voxels)))
          return "voxels: buffer expected";
      }
      if (message.lights != null && message.hasOwnProperty("lights")) {
        if (!(message.lights && typeof message.lights.length === "number" || $util.isString(message.lights)))
          return "lights: buffer expected";
      }
      return null;
    };
    Chunk.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.Chunk)
        return object;
      let message = new $root.protocol.Chunk();
      if (object.x != null)
        message.x = object.x | 0;
      if (object.z != null)
        message.z = object.z | 0;
      if (object.id != null)
        message.id = String(object.id);
      if (object.meshes) {
        if (!Array.isArray(object.meshes))
          throw TypeError(".protocol.Chunk.meshes: array expected");
        message.meshes = [];
        for (let i = 0; i < object.meshes.length; ++i) {
          if (typeof object.meshes[i] !== "object")
            throw TypeError(".protocol.Chunk.meshes: object expected");
          message.meshes[i] = $root.protocol.Mesh.fromObject(object.meshes[i]);
        }
      }
      if (object.voxels != null) {
        if (typeof object.voxels === "string")
          $util.base64.decode(object.voxels, message.voxels = $util.newBuffer($util.base64.length(object.voxels)), 0);
        else if (object.voxels.length >= 0)
          message.voxels = object.voxels;
      }
      if (object.lights != null) {
        if (typeof object.lights === "string")
          $util.base64.decode(object.lights, message.lights = $util.newBuffer($util.base64.length(object.lights)), 0);
        else if (object.lights.length >= 0)
          message.lights = object.lights;
      }
      return message;
    };
    Chunk.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.arrays || options.defaults)
        object.meshes = [];
      if (options.defaults) {
        object.x = 0;
        object.z = 0;
        object.id = "";
        if (options.bytes === String)
          object.voxels = "";
        else {
          object.voxels = [];
          if (options.bytes !== Array)
            object.voxels = $util.newBuffer(object.voxels);
        }
        if (options.bytes === String)
          object.lights = "";
        else {
          object.lights = [];
          if (options.bytes !== Array)
            object.lights = $util.newBuffer(object.lights);
        }
      }
      if (message.x != null && message.hasOwnProperty("x"))
        object.x = message.x;
      if (message.z != null && message.hasOwnProperty("z"))
        object.z = message.z;
      if (message.id != null && message.hasOwnProperty("id"))
        object.id = message.id;
      if (message.meshes && message.meshes.length) {
        object.meshes = [];
        for (let j = 0; j < message.meshes.length; ++j)
          object.meshes[j] = $root.protocol.Mesh.toObject(message.meshes[j], options);
      }
      if (message.voxels != null && message.hasOwnProperty("voxels"))
        object.voxels = options.bytes === String ? $util.base64.encode(message.voxels, 0, message.voxels.length) : options.bytes === Array ? Array.prototype.slice.call(message.voxels) : message.voxels;
      if (message.lights != null && message.hasOwnProperty("lights"))
        object.lights = options.bytes === String ? $util.base64.encode(message.lights, 0, message.lights.length) : options.bytes === Array ? Array.prototype.slice.call(message.lights) : message.lights;
      return object;
    };
    Chunk.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    Chunk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.Chunk";
    };
    return Chunk;
  }();
  protocol2.Peer = function() {
    function Peer(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    Peer.prototype.id = "";
    Peer.prototype.username = "";
    Peer.prototype.metadata = "";
    Peer.create = function create(properties) {
      return new Peer(properties);
    };
    Peer.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.id != null && Object.hasOwnProperty.call(message, "id"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.id);
      if (message.username != null && Object.hasOwnProperty.call(message, "username"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.username);
      if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
        writer.uint32(
          /* id 3, wireType 2 =*/
          26
        ).string(message.metadata);
      return writer;
    };
    Peer.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Peer.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.Peer();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.id = reader.string();
            break;
          }
          case 2: {
            message.username = reader.string();
            break;
          }
          case 3: {
            message.metadata = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    Peer.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Peer.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.id != null && message.hasOwnProperty("id")) {
        if (!$util.isString(message.id))
          return "id: string expected";
      }
      if (message.username != null && message.hasOwnProperty("username")) {
        if (!$util.isString(message.username))
          return "username: string expected";
      }
      if (message.metadata != null && message.hasOwnProperty("metadata")) {
        if (!$util.isString(message.metadata))
          return "metadata: string expected";
      }
      return null;
    };
    Peer.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.Peer)
        return object;
      let message = new $root.protocol.Peer();
      if (object.id != null)
        message.id = String(object.id);
      if (object.username != null)
        message.username = String(object.username);
      if (object.metadata != null)
        message.metadata = String(object.metadata);
      return message;
    };
    Peer.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.defaults) {
        object.id = "";
        object.username = "";
        object.metadata = "";
      }
      if (message.id != null && message.hasOwnProperty("id"))
        object.id = message.id;
      if (message.username != null && message.hasOwnProperty("username"))
        object.username = message.username;
      if (message.metadata != null && message.hasOwnProperty("metadata"))
        object.metadata = message.metadata;
      return object;
    };
    Peer.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    Peer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.Peer";
    };
    return Peer;
  }();
  protocol2.Entity = function() {
    function Entity(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    Entity.prototype.operation = 0;
    Entity.prototype.id = "";
    Entity.prototype.type = "";
    Entity.prototype.metadata = "";
    Entity.create = function create(properties) {
      return new Entity(properties);
    };
    Entity.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
        writer.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(message.operation);
      if (message.id != null && Object.hasOwnProperty.call(message, "id"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.id);
      if (message.type != null && Object.hasOwnProperty.call(message, "type"))
        writer.uint32(
          /* id 3, wireType 2 =*/
          26
        ).string(message.type);
      if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
        writer.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(message.metadata);
      return writer;
    };
    Entity.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Entity.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.Entity();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.operation = reader.int32();
            break;
          }
          case 2: {
            message.id = reader.string();
            break;
          }
          case 3: {
            message.type = reader.string();
            break;
          }
          case 4: {
            message.metadata = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    Entity.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Entity.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.operation != null && message.hasOwnProperty("operation"))
        switch (message.operation) {
          default:
            return "operation: enum value expected";
          case 0:
          case 1:
          case 2:
            break;
        }
      if (message.id != null && message.hasOwnProperty("id")) {
        if (!$util.isString(message.id))
          return "id: string expected";
      }
      if (message.type != null && message.hasOwnProperty("type")) {
        if (!$util.isString(message.type))
          return "type: string expected";
      }
      if (message.metadata != null && message.hasOwnProperty("metadata")) {
        if (!$util.isString(message.metadata))
          return "metadata: string expected";
      }
      return null;
    };
    Entity.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.Entity)
        return object;
      let message = new $root.protocol.Entity();
      switch (object.operation) {
        default:
          if (typeof object.operation === "number") {
            message.operation = object.operation;
            break;
          }
          break;
        case "CREATE":
        case 0:
          message.operation = 0;
          break;
        case "DELETE":
        case 1:
          message.operation = 1;
          break;
        case "UPDATE":
        case 2:
          message.operation = 2;
          break;
      }
      if (object.id != null)
        message.id = String(object.id);
      if (object.type != null)
        message.type = String(object.type);
      if (object.metadata != null)
        message.metadata = String(object.metadata);
      return message;
    };
    Entity.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.defaults) {
        object.operation = options.enums === String ? "CREATE" : 0;
        object.id = "";
        object.type = "";
        object.metadata = "";
      }
      if (message.operation != null && message.hasOwnProperty("operation"))
        object.operation = options.enums === String ? $root.protocol.Entity.Operation[message.operation] === void 0 ? message.operation : $root.protocol.Entity.Operation[message.operation] : message.operation;
      if (message.id != null && message.hasOwnProperty("id"))
        object.id = message.id;
      if (message.type != null && message.hasOwnProperty("type"))
        object.type = message.type;
      if (message.metadata != null && message.hasOwnProperty("metadata"))
        object.metadata = message.metadata;
      return object;
    };
    Entity.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    Entity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.Entity";
    };
    Entity.Operation = function() {
      const valuesById = {}, values = Object.create(valuesById);
      values[valuesById[0] = "CREATE"] = 0;
      values[valuesById[1] = "DELETE"] = 1;
      values[valuesById[2] = "UPDATE"] = 2;
      return values;
    }();
    return Entity;
  }();
  protocol2.Event = function() {
    function Event(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    Event.prototype.name = "";
    Event.prototype.payload = "";
    Event.create = function create(properties) {
      return new Event(properties);
    };
    Event.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.name != null && Object.hasOwnProperty.call(message, "name"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.name);
      if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.payload);
      return writer;
    };
    Event.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Event.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.Event();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.name = reader.string();
            break;
          }
          case 2: {
            message.payload = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    Event.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Event.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.name != null && message.hasOwnProperty("name")) {
        if (!$util.isString(message.name))
          return "name: string expected";
      }
      if (message.payload != null && message.hasOwnProperty("payload")) {
        if (!$util.isString(message.payload))
          return "payload: string expected";
      }
      return null;
    };
    Event.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.Event)
        return object;
      let message = new $root.protocol.Event();
      if (object.name != null)
        message.name = String(object.name);
      if (object.payload != null)
        message.payload = String(object.payload);
      return message;
    };
    Event.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.defaults) {
        object.name = "";
        object.payload = "";
      }
      if (message.name != null && message.hasOwnProperty("name"))
        object.name = message.name;
      if (message.payload != null && message.hasOwnProperty("payload"))
        object.payload = message.payload;
      return object;
    };
    Event.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.Event";
    };
    return Event;
  }();
  protocol2.Method = function() {
    function Method(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    Method.prototype.name = "";
    Method.prototype.payload = "";
    Method.create = function create(properties) {
      return new Method(properties);
    };
    Method.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.name != null && Object.hasOwnProperty.call(message, "name"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.name);
      if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.payload);
      return writer;
    };
    Method.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Method.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.Method();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.name = reader.string();
            break;
          }
          case 2: {
            message.payload = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    Method.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Method.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.name != null && message.hasOwnProperty("name")) {
        if (!$util.isString(message.name))
          return "name: string expected";
      }
      if (message.payload != null && message.hasOwnProperty("payload")) {
        if (!$util.isString(message.payload))
          return "payload: string expected";
      }
      return null;
    };
    Method.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.Method)
        return object;
      let message = new $root.protocol.Method();
      if (object.name != null)
        message.name = String(object.name);
      if (object.payload != null)
        message.payload = String(object.payload);
      return message;
    };
    Method.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.defaults) {
        object.name = "";
        object.payload = "";
      }
      if (message.name != null && message.hasOwnProperty("name"))
        object.name = message.name;
      if (message.payload != null && message.hasOwnProperty("payload"))
        object.payload = message.payload;
      return object;
    };
    Method.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    Method.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.Method";
    };
    return Method;
  }();
  protocol2.Update = function() {
    function Update(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    Update.prototype.vx = 0;
    Update.prototype.vy = 0;
    Update.prototype.vz = 0;
    Update.prototype.voxel = 0;
    Update.prototype.light = 0;
    Update.create = function create(properties) {
      return new Update(properties);
    };
    Update.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.vx != null && Object.hasOwnProperty.call(message, "vx"))
        writer.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(message.vx);
      if (message.vy != null && Object.hasOwnProperty.call(message, "vy"))
        writer.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(message.vy);
      if (message.vz != null && Object.hasOwnProperty.call(message, "vz"))
        writer.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(message.vz);
      if (message.voxel != null && Object.hasOwnProperty.call(message, "voxel"))
        writer.uint32(
          /* id 4, wireType 0 =*/
          32
        ).uint32(message.voxel);
      if (message.light != null && Object.hasOwnProperty.call(message, "light"))
        writer.uint32(
          /* id 5, wireType 0 =*/
          40
        ).uint32(message.light);
      return writer;
    };
    Update.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Update.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.Update();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.vx = reader.int32();
            break;
          }
          case 2: {
            message.vy = reader.int32();
            break;
          }
          case 3: {
            message.vz = reader.int32();
            break;
          }
          case 4: {
            message.voxel = reader.uint32();
            break;
          }
          case 5: {
            message.light = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    Update.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Update.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.vx != null && message.hasOwnProperty("vx")) {
        if (!$util.isInteger(message.vx))
          return "vx: integer expected";
      }
      if (message.vy != null && message.hasOwnProperty("vy")) {
        if (!$util.isInteger(message.vy))
          return "vy: integer expected";
      }
      if (message.vz != null && message.hasOwnProperty("vz")) {
        if (!$util.isInteger(message.vz))
          return "vz: integer expected";
      }
      if (message.voxel != null && message.hasOwnProperty("voxel")) {
        if (!$util.isInteger(message.voxel))
          return "voxel: integer expected";
      }
      if (message.light != null && message.hasOwnProperty("light")) {
        if (!$util.isInteger(message.light))
          return "light: integer expected";
      }
      return null;
    };
    Update.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.Update)
        return object;
      let message = new $root.protocol.Update();
      if (object.vx != null)
        message.vx = object.vx | 0;
      if (object.vy != null)
        message.vy = object.vy | 0;
      if (object.vz != null)
        message.vz = object.vz | 0;
      if (object.voxel != null)
        message.voxel = object.voxel >>> 0;
      if (object.light != null)
        message.light = object.light >>> 0;
      return message;
    };
    Update.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.defaults) {
        object.vx = 0;
        object.vy = 0;
        object.vz = 0;
        object.voxel = 0;
        object.light = 0;
      }
      if (message.vx != null && message.hasOwnProperty("vx"))
        object.vx = message.vx;
      if (message.vy != null && message.hasOwnProperty("vy"))
        object.vy = message.vy;
      if (message.vz != null && message.hasOwnProperty("vz"))
        object.vz = message.vz;
      if (message.voxel != null && message.hasOwnProperty("voxel"))
        object.voxel = message.voxel;
      if (message.light != null && message.hasOwnProperty("light"))
        object.light = message.light;
      return object;
    };
    Update.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    Update.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.Update";
    };
    return Update;
  }();
  protocol2.BulkUpdate = function() {
    function BulkUpdate(properties) {
      this.vx = [];
      this.vy = [];
      this.vz = [];
      this.voxels = [];
      this.lights = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    BulkUpdate.prototype.vx = $util.emptyArray;
    BulkUpdate.prototype.vy = $util.emptyArray;
    BulkUpdate.prototype.vz = $util.emptyArray;
    BulkUpdate.prototype.voxels = $util.emptyArray;
    BulkUpdate.prototype.lights = $util.emptyArray;
    BulkUpdate.create = function create(properties) {
      return new BulkUpdate(properties);
    };
    BulkUpdate.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.vx != null && message.vx.length) {
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let i = 0; i < message.vx.length; ++i)
          writer.int32(message.vx[i]);
        writer.ldelim();
      }
      if (message.vy != null && message.vy.length) {
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork();
        for (let i = 0; i < message.vy.length; ++i)
          writer.int32(message.vy[i]);
        writer.ldelim();
      }
      if (message.vz != null && message.vz.length) {
        writer.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork();
        for (let i = 0; i < message.vz.length; ++i)
          writer.int32(message.vz[i]);
        writer.ldelim();
      }
      if (message.voxels != null && message.voxels.length) {
        writer.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork();
        for (let i = 0; i < message.voxels.length; ++i)
          writer.uint32(message.voxels[i]);
        writer.ldelim();
      }
      if (message.lights != null && message.lights.length) {
        writer.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork();
        for (let i = 0; i < message.lights.length; ++i)
          writer.uint32(message.lights[i]);
        writer.ldelim();
      }
      return writer;
    };
    BulkUpdate.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    BulkUpdate.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.BulkUpdate();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (!(message.vx && message.vx.length))
              message.vx = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2)
                message.vx.push(reader.int32());
            } else
              message.vx.push(reader.int32());
            break;
          }
          case 2: {
            if (!(message.vy && message.vy.length))
              message.vy = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2)
                message.vy.push(reader.int32());
            } else
              message.vy.push(reader.int32());
            break;
          }
          case 3: {
            if (!(message.vz && message.vz.length))
              message.vz = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2)
                message.vz.push(reader.int32());
            } else
              message.vz.push(reader.int32());
            break;
          }
          case 4: {
            if (!(message.voxels && message.voxels.length))
              message.voxels = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2)
                message.voxels.push(reader.uint32());
            } else
              message.voxels.push(reader.uint32());
            break;
          }
          case 5: {
            if (!(message.lights && message.lights.length))
              message.lights = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2)
                message.lights.push(reader.uint32());
            } else
              message.lights.push(reader.uint32());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    BulkUpdate.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    BulkUpdate.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.vx != null && message.hasOwnProperty("vx")) {
        if (!Array.isArray(message.vx))
          return "vx: array expected";
        for (let i = 0; i < message.vx.length; ++i)
          if (!$util.isInteger(message.vx[i]))
            return "vx: integer[] expected";
      }
      if (message.vy != null && message.hasOwnProperty("vy")) {
        if (!Array.isArray(message.vy))
          return "vy: array expected";
        for (let i = 0; i < message.vy.length; ++i)
          if (!$util.isInteger(message.vy[i]))
            return "vy: integer[] expected";
      }
      if (message.vz != null && message.hasOwnProperty("vz")) {
        if (!Array.isArray(message.vz))
          return "vz: array expected";
        for (let i = 0; i < message.vz.length; ++i)
          if (!$util.isInteger(message.vz[i]))
            return "vz: integer[] expected";
      }
      if (message.voxels != null && message.hasOwnProperty("voxels")) {
        if (!Array.isArray(message.voxels))
          return "voxels: array expected";
        for (let i = 0; i < message.voxels.length; ++i)
          if (!$util.isInteger(message.voxels[i]))
            return "voxels: integer[] expected";
      }
      if (message.lights != null && message.hasOwnProperty("lights")) {
        if (!Array.isArray(message.lights))
          return "lights: array expected";
        for (let i = 0; i < message.lights.length; ++i)
          if (!$util.isInteger(message.lights[i]))
            return "lights: integer[] expected";
      }
      return null;
    };
    BulkUpdate.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.BulkUpdate)
        return object;
      let message = new $root.protocol.BulkUpdate();
      if (object.vx) {
        if (!Array.isArray(object.vx))
          throw TypeError(".protocol.BulkUpdate.vx: array expected");
        message.vx = [];
        for (let i = 0; i < object.vx.length; ++i)
          message.vx[i] = object.vx[i] | 0;
      }
      if (object.vy) {
        if (!Array.isArray(object.vy))
          throw TypeError(".protocol.BulkUpdate.vy: array expected");
        message.vy = [];
        for (let i = 0; i < object.vy.length; ++i)
          message.vy[i] = object.vy[i] | 0;
      }
      if (object.vz) {
        if (!Array.isArray(object.vz))
          throw TypeError(".protocol.BulkUpdate.vz: array expected");
        message.vz = [];
        for (let i = 0; i < object.vz.length; ++i)
          message.vz[i] = object.vz[i] | 0;
      }
      if (object.voxels) {
        if (!Array.isArray(object.voxels))
          throw TypeError(".protocol.BulkUpdate.voxels: array expected");
        message.voxels = [];
        for (let i = 0; i < object.voxels.length; ++i)
          message.voxels[i] = object.voxels[i] >>> 0;
      }
      if (object.lights) {
        if (!Array.isArray(object.lights))
          throw TypeError(".protocol.BulkUpdate.lights: array expected");
        message.lights = [];
        for (let i = 0; i < object.lights.length; ++i)
          message.lights[i] = object.lights[i] >>> 0;
      }
      return message;
    };
    BulkUpdate.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.arrays || options.defaults) {
        object.vx = [];
        object.vy = [];
        object.vz = [];
        object.voxels = [];
        object.lights = [];
      }
      if (message.vx && message.vx.length) {
        object.vx = [];
        for (let j = 0; j < message.vx.length; ++j)
          object.vx[j] = message.vx[j];
      }
      if (message.vy && message.vy.length) {
        object.vy = [];
        for (let j = 0; j < message.vy.length; ++j)
          object.vy[j] = message.vy[j];
      }
      if (message.vz && message.vz.length) {
        object.vz = [];
        for (let j = 0; j < message.vz.length; ++j)
          object.vz[j] = message.vz[j];
      }
      if (message.voxels && message.voxels.length) {
        object.voxels = [];
        for (let j = 0; j < message.voxels.length; ++j)
          object.voxels[j] = message.voxels[j];
      }
      if (message.lights && message.lights.length) {
        object.lights = [];
        for (let j = 0; j < message.lights.length; ++j)
          object.lights[j] = message.lights[j];
      }
      return object;
    };
    BulkUpdate.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    BulkUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.BulkUpdate";
    };
    return BulkUpdate;
  }();
  protocol2.ChatMessage = function() {
    function ChatMessage(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    ChatMessage.prototype.type = "";
    ChatMessage.prototype.sender = "";
    ChatMessage.prototype.body = "";
    ChatMessage.prototype.metadata = "";
    ChatMessage.create = function create(properties) {
      return new ChatMessage(properties);
    };
    ChatMessage.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.type != null && Object.hasOwnProperty.call(message, "type"))
        writer.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(message.type);
      if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.sender);
      if (message.body != null && Object.hasOwnProperty.call(message, "body"))
        writer.uint32(
          /* id 3, wireType 2 =*/
          26
        ).string(message.body);
      if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
        writer.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(message.metadata);
      return writer;
    };
    ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    ChatMessage.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.ChatMessage();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.type = reader.string();
            break;
          }
          case 2: {
            message.sender = reader.string();
            break;
          }
          case 3: {
            message.body = reader.string();
            break;
          }
          case 4: {
            message.metadata = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    ChatMessage.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    ChatMessage.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.type != null && message.hasOwnProperty("type")) {
        if (!$util.isString(message.type))
          return "type: string expected";
      }
      if (message.sender != null && message.hasOwnProperty("sender")) {
        if (!$util.isString(message.sender))
          return "sender: string expected";
      }
      if (message.body != null && message.hasOwnProperty("body")) {
        if (!$util.isString(message.body))
          return "body: string expected";
      }
      if (message.metadata != null && message.hasOwnProperty("metadata")) {
        if (!$util.isString(message.metadata))
          return "metadata: string expected";
      }
      return null;
    };
    ChatMessage.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.ChatMessage)
        return object;
      let message = new $root.protocol.ChatMessage();
      if (object.type != null)
        message.type = String(object.type);
      if (object.sender != null)
        message.sender = String(object.sender);
      if (object.body != null)
        message.body = String(object.body);
      if (object.metadata != null)
        message.metadata = String(object.metadata);
      return message;
    };
    ChatMessage.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.defaults) {
        object.type = "";
        object.sender = "";
        object.body = "";
        object.metadata = "";
      }
      if (message.type != null && message.hasOwnProperty("type"))
        object.type = message.type;
      if (message.sender != null && message.hasOwnProperty("sender"))
        object.sender = message.sender;
      if (message.body != null && message.hasOwnProperty("body"))
        object.body = message.body;
      if (message.metadata != null && message.hasOwnProperty("metadata"))
        object.metadata = message.metadata;
      return object;
    };
    ChatMessage.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    ChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.ChatMessage";
    };
    return ChatMessage;
  }();
  protocol2.Message = function() {
    function Message(properties) {
      this.peers = [];
      this.entities = [];
      this.chunks = [];
      this.events = [];
      this.updates = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
      }
    }
    Message.prototype.type = 0;
    Message.prototype.json = "";
    Message.prototype.text = "";
    Message.prototype.method = null;
    Message.prototype.chat = null;
    Message.prototype.peers = $util.emptyArray;
    Message.prototype.entities = $util.emptyArray;
    Message.prototype.chunks = $util.emptyArray;
    Message.prototype.events = $util.emptyArray;
    Message.prototype.updates = $util.emptyArray;
    Message.prototype.worldName = "";
    Message.prototype.bulkUpdate = null;
    Message.create = function create(properties) {
      return new Message(properties);
    };
    Message.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.type != null && Object.hasOwnProperty.call(message, "type"))
        writer.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(message.type);
      if (message.json != null && Object.hasOwnProperty.call(message, "json"))
        writer.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(message.json);
      if (message.text != null && Object.hasOwnProperty.call(message, "text"))
        writer.uint32(
          /* id 3, wireType 2 =*/
          26
        ).string(message.text);
      if (message.method != null && Object.hasOwnProperty.call(message, "method"))
        $root.protocol.Method.encode(message.method, writer.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim();
      if (message.chat != null && Object.hasOwnProperty.call(message, "chat"))
        $root.protocol.ChatMessage.encode(message.chat, writer.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim();
      if (message.peers != null && message.peers.length)
        for (let i = 0; i < message.peers.length; ++i)
          $root.protocol.Peer.encode(message.peers[i], writer.uint32(
            /* id 6, wireType 2 =*/
            50
          ).fork()).ldelim();
      if (message.entities != null && message.entities.length)
        for (let i = 0; i < message.entities.length; ++i)
          $root.protocol.Entity.encode(message.entities[i], writer.uint32(
            /* id 7, wireType 2 =*/
            58
          ).fork()).ldelim();
      if (message.chunks != null && message.chunks.length)
        for (let i = 0; i < message.chunks.length; ++i)
          $root.protocol.Chunk.encode(message.chunks[i], writer.uint32(
            /* id 8, wireType 2 =*/
            66
          ).fork()).ldelim();
      if (message.events != null && message.events.length)
        for (let i = 0; i < message.events.length; ++i)
          $root.protocol.Event.encode(message.events[i], writer.uint32(
            /* id 9, wireType 2 =*/
            74
          ).fork()).ldelim();
      if (message.updates != null && message.updates.length)
        for (let i = 0; i < message.updates.length; ++i)
          $root.protocol.Update.encode(message.updates[i], writer.uint32(
            /* id 10, wireType 2 =*/
            82
          ).fork()).ldelim();
      if (message.worldName != null && Object.hasOwnProperty.call(message, "worldName"))
        writer.uint32(
          /* id 11, wireType 2 =*/
          90
        ).string(message.worldName);
      if (message.bulkUpdate != null && Object.hasOwnProperty.call(message, "bulkUpdate"))
        $root.protocol.BulkUpdate.encode(message.bulkUpdate, writer.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim();
      return writer;
    };
    Message.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Message.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      let end = length === void 0 ? reader.len : reader.pos + length, message = new $root.protocol.Message();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.type = reader.int32();
            break;
          }
          case 2: {
            message.json = reader.string();
            break;
          }
          case 3: {
            message.text = reader.string();
            break;
          }
          case 4: {
            message.method = $root.protocol.Method.decode(reader, reader.uint32());
            break;
          }
          case 5: {
            message.chat = $root.protocol.ChatMessage.decode(reader, reader.uint32());
            break;
          }
          case 6: {
            if (!(message.peers && message.peers.length))
              message.peers = [];
            message.peers.push($root.protocol.Peer.decode(reader, reader.uint32()));
            break;
          }
          case 7: {
            if (!(message.entities && message.entities.length))
              message.entities = [];
            message.entities.push($root.protocol.Entity.decode(reader, reader.uint32()));
            break;
          }
          case 8: {
            if (!(message.chunks && message.chunks.length))
              message.chunks = [];
            message.chunks.push($root.protocol.Chunk.decode(reader, reader.uint32()));
            break;
          }
          case 9: {
            if (!(message.events && message.events.length))
              message.events = [];
            message.events.push($root.protocol.Event.decode(reader, reader.uint32()));
            break;
          }
          case 10: {
            if (!(message.updates && message.updates.length))
              message.updates = [];
            message.updates.push($root.protocol.Update.decode(reader, reader.uint32()));
            break;
          }
          case 11: {
            message.worldName = reader.string();
            break;
          }
          case 15: {
            message.bulkUpdate = $root.protocol.BulkUpdate.decode(reader, reader.uint32());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };
    Message.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Message.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.type != null && message.hasOwnProperty("type"))
        switch (message.type) {
          default:
            return "type: enum value expected";
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
            break;
        }
      if (message.json != null && message.hasOwnProperty("json")) {
        if (!$util.isString(message.json))
          return "json: string expected";
      }
      if (message.text != null && message.hasOwnProperty("text")) {
        if (!$util.isString(message.text))
          return "text: string expected";
      }
      if (message.method != null && message.hasOwnProperty("method")) {
        let error = $root.protocol.Method.verify(message.method);
        if (error)
          return "method." + error;
      }
      if (message.chat != null && message.hasOwnProperty("chat")) {
        let error = $root.protocol.ChatMessage.verify(message.chat);
        if (error)
          return "chat." + error;
      }
      if (message.peers != null && message.hasOwnProperty("peers")) {
        if (!Array.isArray(message.peers))
          return "peers: array expected";
        for (let i = 0; i < message.peers.length; ++i) {
          let error = $root.protocol.Peer.verify(message.peers[i]);
          if (error)
            return "peers." + error;
        }
      }
      if (message.entities != null && message.hasOwnProperty("entities")) {
        if (!Array.isArray(message.entities))
          return "entities: array expected";
        for (let i = 0; i < message.entities.length; ++i) {
          let error = $root.protocol.Entity.verify(message.entities[i]);
          if (error)
            return "entities." + error;
        }
      }
      if (message.chunks != null && message.hasOwnProperty("chunks")) {
        if (!Array.isArray(message.chunks))
          return "chunks: array expected";
        for (let i = 0; i < message.chunks.length; ++i) {
          let error = $root.protocol.Chunk.verify(message.chunks[i]);
          if (error)
            return "chunks." + error;
        }
      }
      if (message.events != null && message.hasOwnProperty("events")) {
        if (!Array.isArray(message.events))
          return "events: array expected";
        for (let i = 0; i < message.events.length; ++i) {
          let error = $root.protocol.Event.verify(message.events[i]);
          if (error)
            return "events." + error;
        }
      }
      if (message.updates != null && message.hasOwnProperty("updates")) {
        if (!Array.isArray(message.updates))
          return "updates: array expected";
        for (let i = 0; i < message.updates.length; ++i) {
          let error = $root.protocol.Update.verify(message.updates[i]);
          if (error)
            return "updates." + error;
        }
      }
      if (message.worldName != null && message.hasOwnProperty("worldName")) {
        if (!$util.isString(message.worldName))
          return "worldName: string expected";
      }
      if (message.bulkUpdate != null && message.hasOwnProperty("bulkUpdate")) {
        let error = $root.protocol.BulkUpdate.verify(message.bulkUpdate);
        if (error)
          return "bulkUpdate." + error;
      }
      return null;
    };
    Message.fromObject = function fromObject(object) {
      if (object instanceof $root.protocol.Message)
        return object;
      let message = new $root.protocol.Message();
      switch (object.type) {
        default:
          if (typeof object.type === "number") {
            message.type = object.type;
            break;
          }
          break;
        case "INIT":
        case 0:
          message.type = 0;
          break;
        case "JOIN":
        case 1:
          message.type = 1;
          break;
        case "LEAVE":
        case 2:
          message.type = 2;
          break;
        case "ERROR":
        case 3:
          message.type = 3;
          break;
        case "PEER":
        case 4:
          message.type = 4;
          break;
        case "ENTITY":
        case 5:
          message.type = 5;
          break;
        case "LOAD":
        case 6:
          message.type = 6;
          break;
        case "UNLOAD":
        case 7:
          message.type = 7;
          break;
        case "UPDATE":
        case 8:
          message.type = 8;
          break;
        case "METHOD":
        case 9:
          message.type = 9;
          break;
        case "CHAT":
        case 10:
          message.type = 10;
          break;
        case "TRANSPORT":
        case 11:
          message.type = 11;
          break;
        case "EVENT":
        case 12:
          message.type = 12;
          break;
        case "ACTION":
        case 13:
          message.type = 13;
          break;
        case "STATS":
        case 14:
          message.type = 14;
          break;
      }
      if (object.json != null)
        message.json = String(object.json);
      if (object.text != null)
        message.text = String(object.text);
      if (object.method != null) {
        if (typeof object.method !== "object")
          throw TypeError(".protocol.Message.method: object expected");
        message.method = $root.protocol.Method.fromObject(object.method);
      }
      if (object.chat != null) {
        if (typeof object.chat !== "object")
          throw TypeError(".protocol.Message.chat: object expected");
        message.chat = $root.protocol.ChatMessage.fromObject(object.chat);
      }
      if (object.peers) {
        if (!Array.isArray(object.peers))
          throw TypeError(".protocol.Message.peers: array expected");
        message.peers = [];
        for (let i = 0; i < object.peers.length; ++i) {
          if (typeof object.peers[i] !== "object")
            throw TypeError(".protocol.Message.peers: object expected");
          message.peers[i] = $root.protocol.Peer.fromObject(object.peers[i]);
        }
      }
      if (object.entities) {
        if (!Array.isArray(object.entities))
          throw TypeError(".protocol.Message.entities: array expected");
        message.entities = [];
        for (let i = 0; i < object.entities.length; ++i) {
          if (typeof object.entities[i] !== "object")
            throw TypeError(".protocol.Message.entities: object expected");
          message.entities[i] = $root.protocol.Entity.fromObject(object.entities[i]);
        }
      }
      if (object.chunks) {
        if (!Array.isArray(object.chunks))
          throw TypeError(".protocol.Message.chunks: array expected");
        message.chunks = [];
        for (let i = 0; i < object.chunks.length; ++i) {
          if (typeof object.chunks[i] !== "object")
            throw TypeError(".protocol.Message.chunks: object expected");
          message.chunks[i] = $root.protocol.Chunk.fromObject(object.chunks[i]);
        }
      }
      if (object.events) {
        if (!Array.isArray(object.events))
          throw TypeError(".protocol.Message.events: array expected");
        message.events = [];
        for (let i = 0; i < object.events.length; ++i) {
          if (typeof object.events[i] !== "object")
            throw TypeError(".protocol.Message.events: object expected");
          message.events[i] = $root.protocol.Event.fromObject(object.events[i]);
        }
      }
      if (object.updates) {
        if (!Array.isArray(object.updates))
          throw TypeError(".protocol.Message.updates: array expected");
        message.updates = [];
        for (let i = 0; i < object.updates.length; ++i) {
          if (typeof object.updates[i] !== "object")
            throw TypeError(".protocol.Message.updates: object expected");
          message.updates[i] = $root.protocol.Update.fromObject(object.updates[i]);
        }
      }
      if (object.worldName != null)
        message.worldName = String(object.worldName);
      if (object.bulkUpdate != null) {
        if (typeof object.bulkUpdate !== "object")
          throw TypeError(".protocol.Message.bulkUpdate: object expected");
        message.bulkUpdate = $root.protocol.BulkUpdate.fromObject(object.bulkUpdate);
      }
      return message;
    };
    Message.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      let object = {};
      if (options.arrays || options.defaults) {
        object.peers = [];
        object.entities = [];
        object.chunks = [];
        object.events = [];
        object.updates = [];
      }
      if (options.defaults) {
        object.type = options.enums === String ? "INIT" : 0;
        object.json = "";
        object.text = "";
        object.method = null;
        object.chat = null;
        object.worldName = "";
        object.bulkUpdate = null;
      }
      if (message.type != null && message.hasOwnProperty("type"))
        object.type = options.enums === String ? $root.protocol.Message.Type[message.type] === void 0 ? message.type : $root.protocol.Message.Type[message.type] : message.type;
      if (message.json != null && message.hasOwnProperty("json"))
        object.json = message.json;
      if (message.text != null && message.hasOwnProperty("text"))
        object.text = message.text;
      if (message.method != null && message.hasOwnProperty("method"))
        object.method = $root.protocol.Method.toObject(message.method, options);
      if (message.chat != null && message.hasOwnProperty("chat"))
        object.chat = $root.protocol.ChatMessage.toObject(message.chat, options);
      if (message.peers && message.peers.length) {
        object.peers = [];
        for (let j = 0; j < message.peers.length; ++j)
          object.peers[j] = $root.protocol.Peer.toObject(message.peers[j], options);
      }
      if (message.entities && message.entities.length) {
        object.entities = [];
        for (let j = 0; j < message.entities.length; ++j)
          object.entities[j] = $root.protocol.Entity.toObject(message.entities[j], options);
      }
      if (message.chunks && message.chunks.length) {
        object.chunks = [];
        for (let j = 0; j < message.chunks.length; ++j)
          object.chunks[j] = $root.protocol.Chunk.toObject(message.chunks[j], options);
      }
      if (message.events && message.events.length) {
        object.events = [];
        for (let j = 0; j < message.events.length; ++j)
          object.events[j] = $root.protocol.Event.toObject(message.events[j], options);
      }
      if (message.updates && message.updates.length) {
        object.updates = [];
        for (let j = 0; j < message.updates.length; ++j)
          object.updates[j] = $root.protocol.Update.toObject(message.updates[j], options);
      }
      if (message.worldName != null && message.hasOwnProperty("worldName"))
        object.worldName = message.worldName;
      if (message.bulkUpdate != null && message.hasOwnProperty("bulkUpdate"))
        object.bulkUpdate = $root.protocol.BulkUpdate.toObject(message.bulkUpdate, options);
      return object;
    };
    Message.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf__namespace.util.toJSONOptions);
    };
    Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === void 0) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/protocol.Message";
    };
    Message.Type = function() {
      const valuesById = {}, values = Object.create(valuesById);
      values[valuesById[0] = "INIT"] = 0;
      values[valuesById[1] = "JOIN"] = 1;
      values[valuesById[2] = "LEAVE"] = 2;
      values[valuesById[3] = "ERROR"] = 3;
      values[valuesById[4] = "PEER"] = 4;
      values[valuesById[5] = "ENTITY"] = 5;
      values[valuesById[6] = "LOAD"] = 6;
      values[valuesById[7] = "UNLOAD"] = 7;
      values[valuesById[8] = "UPDATE"] = 8;
      values[valuesById[9] = "METHOD"] = 9;
      values[valuesById[10] = "CHAT"] = 10;
      values[valuesById[11] = "TRANSPORT"] = 11;
      values[valuesById[12] = "EVENT"] = 12;
      values[valuesById[13] = "ACTION"] = 13;
      values[valuesById[14] = "STATS"] = 14;
      return values;
    }();
    return Message;
  }();
  return protocol2;
})();
exports.default = protocol;
exports.protocol = protocol;
