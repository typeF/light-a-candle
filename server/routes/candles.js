const express = require("express");
const { getAllCandles, saveCandle } = require("../actions/candles");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await getAllCandles();
  return res.status(200).json(data);
});

router.post("/", async (req, res) => {
  const candle = req.body;
  const savedCandle = await saveCandle(candle);
  if (!savedCandle) {
    return res.status(400).end();
  }
  return res.status(200).end();
});

module.exports = router;
