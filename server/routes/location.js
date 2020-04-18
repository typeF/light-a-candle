const express = require("express");
const { getAllPins } = require("../actions/pins");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await getAllPins();
  if (!data) {
    return res.status(500).end();
  }
  return res.status(200).json(data);
});

module.exports = router;
