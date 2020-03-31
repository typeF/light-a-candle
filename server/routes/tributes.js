const express = require("express");
const { getTribute, saveTribute } = require("../actions/tributes");

const router = express.Router();

// TODO: Data validation
router.get("/:id", async (req, res) => {
  const tributeId = req.params.id;
  const data = await getTribute(tributeId);
  return res.status(200).json(data);
});

// TODO: Data validation
router.post("/", async (req, res) => {
  const tribute = req.body;
  console.log(`Tribute data: ${tribute}`);
  await saveTribute(tribute);
  return res.status(200).end();
});

module.exports = router;
