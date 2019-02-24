var socket = io();
var ioscreen = document.querySelector("#ioscreen");

var events = {
  alert(msg) {
    alert(msg);
  },
  loaduri(html) {
    ioscreen.innerHTML = html;
  }
};

socket.on("connect", () => {
  console.log("Slave node connected to web socket server");
});

socket.emit("join", { room: "slave" });

socket.on("frommaster", ({ type, args }) => {
  events[type].apply(this, args);
});
