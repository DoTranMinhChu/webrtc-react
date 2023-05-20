import socketIOClient from "socket.io-client";

// export const WS = "http://118.69.182.149:8099";
export const WS = "http://gitlab.spacenet.vn:8099";
export const ws = socketIOClient(WS);
