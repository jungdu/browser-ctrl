var socket = io();
socket.on("connect", () => {
  console.log("Connected to web socket server");
});

socket.on("disconnect", () => {
  console.log("Unable from connect");
});
