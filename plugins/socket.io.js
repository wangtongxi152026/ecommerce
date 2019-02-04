import io from "socket.io-client";

const socket = io(process.env.SOCKET_HOST_URL); // Change to process.env.SOCKET_HOST_URL in future

export default socket;
