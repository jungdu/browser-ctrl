var socket = io();

socket.on("connect", () => {
  console.log("Master node connected to web socket server");
});

socket.on("message", data => {
  console.log(data);
});

socket.on("disconnect", () => {
  console.log("Unable from connect");
});

socket.on("alert", message => {
  alert(message);
});

document.querySelector("#alert_btn").addEventListener("click", () => {
  let msg = document.querySelector("#alt_msg").value;
  socket.emit("toslaves", { type: "alert", args: [msg] });
});

document.querySelector("#loaduri_btn").addEventListener("click", () => {
  let uri = document.querySelector("#uri").value;
  socket.emit("toslavehtml", { type: "loaduri", args: [uri] });
});
