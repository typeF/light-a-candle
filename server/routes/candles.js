const express = require("express");
const { getAllCandles, saveCandle } = require("../actions/candles");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await getAllCandles();
  return res.status(200).json(data);
});

router.post("/", async (req, res) => {
  const candle = req.body;
  await saveCandle(candle);
  return res.status(200).end();
});

module.exports = router;
