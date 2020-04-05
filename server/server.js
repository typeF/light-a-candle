const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const http = require("http");
const candleRoutes = require("./routes/candles");
const tributeRoutes = require("./routes/tributes");
const locationRoutes = require("./routes/location");

const PORT = process.env.PORT || 4000;
const app = express();

// start socket server
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/candles", candleRoutes);
app.use("/tributes", tributeRoutes);
app.use("/location", locationRoutes);

// use to serve react static files
app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

// test connection
io.on("connection", function (socket) {
  console.log("new client connected");
  socket.emit("test", "You are connected !");

  socket.on("disconnect", function () {
    io.emit("user disconnected");
  });
});

server.listen(PORT, () => console.log(`Socket Server running on port ${PORT}`));
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
