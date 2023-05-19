import socketIOClient from "socket.io-client";

// export const WS = "http://118.69.182.149:8099";
export const WS = "http://localhost:8089";
export const ws = socketIOClient(WS);
