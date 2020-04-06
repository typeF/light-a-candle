const socketio = require("socket.io");
module.exports.listen = function (app) {
  io = socketio.listen(app);

  // configuration for production
  io.configure("production", function () {
    io.enable("browser client minification"); // send minified client
    io.enable("browser client etag"); // apply etag caching logic based on version number
    io.set("log level", 1); // reduce logging
    io.set("transports", [
      // enable all transports (optional if you want flashsocket)
      "websocket",
      "flashsocket",
      "htmlfile",
      "xhr-polling",
      "jsonp-polling",
    ]);
  });
  io.sockets.on("connection", function (socket) {
    console.log(`new connection: ${socket.id}`);

    socket.on("disconnect", function () {
      console.log(`${socket.id} has disconnected`);
    });
  });

  return io;
};
