const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const http = require("http");

const PORT = process.env.PORT || 4000;
const app = express();

// start socket server
const server = http.createServer(app);
const io = require("socket.io")(server);

// test connection
io.on("connection", function (socket) {
  console.log("new client connected");

  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});

const candleRoutes = require("./routes/candles")(express, io);
const tributeRoutes = require("./routes/tributes");
const locationRoutes = require("./routes/location");

// bind socket to instance of app
app.set("io", io);

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

server.listen(PORT, () => console.log(`Socket Server running on port ${PORT}`));
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
