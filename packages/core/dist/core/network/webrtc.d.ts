export declare class WebRTCConnection {
    private pc;
    private dc;
    private fragments;
    private nextMessageId;
    onMessage: ((data: ArrayBuffer) => void) | null;
    onOpen: (() => void) | null;
    onClose: (() => void) | null;
    get isConnected(): boolean;
    connect(serverUrl: string, clientId: string): Promise<void>;
    close(): void;
    private handleMessage;
}
//# sourceMappingURL=webrtc.d.ts.map