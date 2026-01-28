import DOMUrl from "domurl";
import { NetIntercept } from "./intercept";
export * from "./intercept";
export { WebRTCConnection } from "./webrtc";
export type ProtocolWS = WebSocket & {
    sendEvent: (event: any) => void;
};
export type NetworkOptions = {
    maxPacketsPerTick: number;
    maxBacklogFactor: number;
};
export type NetworkConnectionOptions = {
    reconnectTimeout?: number;
    secret?: string;
    useWebRTC?: boolean;
};
export declare class Network {
    options: NetworkOptions;
    clientInfo: {
        id: string;
        username: string;
        metadata?: Record<string, any>;
    };
    intercepts: NetIntercept[];
    ws: ProtocolWS;
    url: DOMUrl<{
        [key: string]: any;
    }>;
    world: string;
    socket: URL;
    connected: boolean;
    joined: boolean;
    onJoin: (world: string) => void;
    onLeave: (world: string) => void;
    onConnect: () => void;
    onDisconnect: () => void;
    private pool;
    private priorityWorker;
    private reconnection;
    private joinResolve;
    private joinReject;
    private packetQueue;
    private joinStartTime;
    private waitingForInit;
    private initPacketReceived;
    private rtc;
    private useWebRTC;
    constructor(options?: Partial<NetworkOptions>);
    connect: (serverURL: string, options?: NetworkConnectionOptions) => Promise<Network>;
    join: (world: string) => Promise<Network>;
    connectWebRTC: () => Promise<void>;
    leave: () => void;
    action: (type: string, data?: any) => Promise<void>;
    sync: () => void;
    flush: () => void;
    register: (...intercepts: NetIntercept[]) => this;
    unregister: (...intercepts: NetIntercept[]) => this;
    disconnect: () => void;
    send: (event: any) => void;
    setID: (id: string) => void;
    setUsername: (username: string) => void;
    setMetadata: (metadata: Record<string, any>) => void;
    get concurrentWorkers(): number;
    get packetQueueLength(): number;
    get rtcConnected(): boolean;
    private onMessage;
    private static encodeSync;
    private decodePriority;
    private decode;
}
//# sourceMappingURL=index.d.ts.map