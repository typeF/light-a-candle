const express = require("express");
const helmet = require("helmet");
const candleRoutes = require("./routes/candles");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/candles", candleRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
