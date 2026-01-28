import { protocol } from "@voxelize/protocol";
import * as fflate from "fflate";
import * as lz4 from "lz4js";
import { client } from "websocket";
const { Message, Entity } = protocol;
function tryParseJSON(str) {
  if (typeof str !== "string" || str.length === 0) return str;
  const firstChar = str.charCodeAt(0);
  if (firstChar !== 123 && firstChar !== 91 && firstChar !== 34) return str;
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}
function deepParseJSON(value) {
  if (typeof value !== "string") return value;
  const parsed = tryParseJSON(value);
  if (parsed === value) return value;
  return deepParseJSON(parsed);
}
function decompressLz4Block(data) {
  if (data.length < 4) return new Uint8Array(0);
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const uncompressedSize = view.getUint32(0, true);
  if (uncompressedSize === 0) return new Uint8Array(0);
  const compressedData = data.subarray(4);
  const result = new Uint8Array(uncompressedSize);
  lz4.decompressBlock(compressedData, result, 0, compressedData.length, 0);
  return result;
}
function decompressToUint32Array(data) {
  if (!data || data.length === 0) return new Uint32Array(0);
  const bytes = decompressLz4Block(data);
  return new Uint32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 4);
}
function decompressToInt32Array(data) {
  if (!data || data.length === 0) return new Int32Array(0);
  const bytes = decompressLz4Block(data);
  return new Int32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 4);
}
function decompressToFloat32Array(data) {
  if (!data || data.length === 0) return new Float32Array(0);
  const bytes = decompressLz4Block(data);
  return new Float32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 4);
}
const _Transport = class _Transport extends client {
  constructor(reconnectTimeout) {
    super();
    this.reconnectTimeout = reconnectTimeout;
    this.send = (event) => {
      if (!this.connection) return;
      this.connection.sendBytes(Buffer.from(_Transport.encodeSync(event)));
    };
    this.tryReconnect = () => {
      if (this.reconnectTimeout && !this.reconnection) {
        this.reconnection = setTimeout(() => {
          clearTimeout(this.reconnection);
          this.reconnection = void 0;
          console.log("Transport reconnecting...");
          this.connect(this.address, this.secret);
        }, this.reconnectTimeout);
      }
    };
    this.onMessage = (event) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      switch (event.type) {
        case "INIT": {
          (_a = this.onInit) == null ? void 0 : _a.call(this, event);
          break;
        }
        case "JOIN": {
          (_b = this.onJoin) == null ? void 0 : _b.call(this, event);
          break;
        }
        case "LEAVE": {
          (_c = this.onLeave) == null ? void 0 : _c.call(this, event);
          break;
        }
        case "ERROR": {
          (_d = this.onError) == null ? void 0 : _d.call(this, event);
          break;
        }
        case "PEER": {
          (_e = this.onPeer) == null ? void 0 : _e.call(this, event);
          break;
        }
        case "ENTITY": {
          (_f = this.onEntity) == null ? void 0 : _f.call(this, event);
          break;
        }
        case "LOAD": {
          (_g = this.onLoad) == null ? void 0 : _g.call(this, event);
          break;
        }
        case "UNLOAD": {
          (_h = this.onUnload) == null ? void 0 : _h.call(this, event);
          break;
        }
        case "UPDATE": {
          (_i = this.onUpdate) == null ? void 0 : _i.call(this, event);
          break;
        }
        case "METHOD": {
          (_j = this.onMethod) == null ? void 0 : _j.call(this, event);
          break;
        }
        case "CHAT": {
          (_k = this.onChat) == null ? void 0 : _k.call(this, event);
          break;
        }
        case "TRANSPORT": {
          (_l = this.onTransport) == null ? void 0 : _l.call(this, event);
          break;
        }
        case "EVENT": {
          (_m = this.onEvent) == null ? void 0 : _m.call(this, event);
          break;
        }
        case "ACTION": {
          (_n = this.onAction) == null ? void 0 : _n.call(this, event);
          break;
        }
      }
    };
    this.on("connectFailed", (error) => {
      console.log(`Connect Error: ${error.toString()}`);
      if (!this.reconnection) {
        this.tryReconnect();
      }
    });
  }
  async connect(address, secret) {
    this.address = address;
    this.secret = secret;
    if (this.connection) {
      this.connection.drop();
      this.connection.close();
      ["message", "close", "error"].forEach((event) => {
        this.connection.removeAllListeners(event);
      });
      if (this.reconnection) {
        clearTimeout(this.reconnection);
      }
    }
    const url = new URL(address);
    super.connect(`${url.href}ws/?secret=${secret}&is_transport=true`);
    return new Promise((resolve) => {
      this.removeAllListeners("connect");
      this.on("connect", (connection) => {
        this.connection = connection;
        console.log("WebSocket Client Connected");
        clearTimeout(this.reconnection);
        connection.on("message", (message) => {
          if (message.type !== "binary") return;
          const decoded = _Transport.decodeSync(message.binaryData);
          this.onMessage(decoded);
        });
        connection.on("close", () => {
          console.log("Transport connection closed.");
          if (!this.reconnection) {
            this.tryReconnect();
          }
        });
        connection.on("error", (error) => {
          console.log(`Connection Error: ${error.toString()}`);
        });
        resolve();
      });
    });
  }
  static encodeSync(message) {
    if (message.json) {
      message.json = JSON.stringify(message.json);
    }
    message.type = Message.Type[message.type];
    if (message.entities) {
      message.entities.forEach(
        (entity) => entity.metadata = JSON.stringify(entity.metadata)
      );
    }
    if (message.peers) {
      message.peers.forEach(
        (peer) => peer.metadata = JSON.stringify(peer.metadata)
      );
    }
    return Message.encode(Message.create(message)).finish();
  }
};
_Transport.MessageTypes = Message.Type;
_Transport.decodeSync = (buffer) => {
  const isLz4Frame = buffer.length >= 4 && buffer[0] === 4 && buffer[1] === 34 && buffer[2] === 77 && buffer[3] === 24;
  if (isLz4Frame) {
    buffer = lz4.decompress(buffer);
  } else if (buffer[0] === 120 && buffer[1] === 156) {
    buffer = fflate.unzlibSync(buffer);
  }
  const message = Message.toObject(Message.decode(buffer), {
    defaults: true
  });
  message.type = Message.Type[message.type];
  if (message.json) {
    message.json = tryParseJSON(message.json);
  }
  if (message.entities) {
    for (let i = 0; i < message.entities.length; i++) {
      const entity = message.entities[i];
      if (entity.metadata) {
        entity.metadata = tryParseJSON(entity.metadata);
      }
      entity.operation = Entity.Operation[entity.operation];
    }
  }
  if (message.peers) {
    for (let i = 0; i < message.peers.length; i++) {
      const peer = message.peers[i];
      if (peer.metadata) {
        peer.metadata = tryParseJSON(peer.metadata);
      }
    }
  }
  if (message.events) {
    for (let i = 0; i < message.events.length; i++) {
      const event = message.events[i];
      if (event.payload) {
        event.payload = deepParseJSON(event.payload);
      }
    }
  }
  if (message.chunks) {
    for (let i = 0; i < message.chunks.length; i++) {
      const chunk = message.chunks[i];
      if (chunk.lights) {
        chunk.lights = decompressToUint32Array(chunk.lights);
      }
      if (chunk.voxels) {
        chunk.voxels = decompressToUint32Array(chunk.voxels);
      }
      if (chunk.meshes) {
        for (let j = 0; j < chunk.meshes.length; j++) {
          const mesh = chunk.meshes[j];
          if (mesh.geometries) {
            for (let k = 0; k < mesh.geometries.length; k++) {
              const geometry = mesh.geometries[k];
              if (geometry) {
                if (geometry.indices) {
                  const decompressedI32 = decompressToInt32Array(
                    geometry.indices
                  );
                  const indices = new Uint16Array(decompressedI32.length);
                  for (let idx = 0; idx < decompressedI32.length; idx++) {
                    indices[idx] = decompressedI32[idx];
                  }
                  geometry.indices = indices;
                }
                if (geometry.lights) {
                  geometry.lights = decompressToInt32Array(geometry.lights);
                }
                if (geometry.positions) {
                  geometry.positions = decompressToFloat32Array(
                    geometry.positions
                  );
                }
                if (geometry.uvs) {
                  geometry.uvs = decompressToFloat32Array(geometry.uvs);
                }
              }
            }
          }
        }
      }
    }
  }
  return message;
};
let Transport = _Transport;
export {
  Transport
};
