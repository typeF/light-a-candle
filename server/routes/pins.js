const express = require("express");
const { getAllPins, savePin } = require("../actions/pins");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await getAllPins();
  return res.status(200).json(data);
});

// TODO: Data validation
router.post("/", async (req, res) => {
  const pin = req.body;
  console.log(`Pin data: ${pin}`);
  await savePin(pin);
  return res.status(200).end();
});

module.exports = router;
