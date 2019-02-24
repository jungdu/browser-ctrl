const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const axios = require("axios");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  socket.emit("message", {
    message: "Hello from server"
  });

  socket.on("disconnect", () => {
    console.log("user was disconnected");
  });

  socket.broadcast.emit("message", {
    message: "every body hello!!!!!!"
  });
  socket.on("message", data => {
    console.log(data);
  });

  socket.on("join", ({ room }) => {
    console.log(`Join to ${room}`);
    socket.join(room);
  });

  socket.on("toslaves", message => {
    socket.broadcast.to("slave").emit("frommaster", message);
  });

  socket.on("toslavehtml", message => {
    console.log(message);
    axios
      .get(message.args[0])
      .then(res => {
        console.log(res.data);
        message.args[0] = res.data;
        socket.broadcast.to("slave").emit("frommaster", message);
      })
      .catch(e => {
        socket.emit("alert", "axios error ::: invalid uri");
      });
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
