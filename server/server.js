const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const candleRoutes = require("./routes/candles");
const tributeRoutes = require("./routes/tributes");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/candles", candleRoutes);
app.use("/tribute", tributeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
