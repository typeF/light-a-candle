const express = require("express");
const { getTributesForLocation, saveTribute } = require("../actions/tributes");

const router = express.Router();

// TODO: Data validation
router.get("/:locationId/", async (req, res) => {
  const locationId = req.params.locationId;
  if (!locationId) {
    console.error("Error: No location id provided");
    return res.status(400).end();
  }
  const data = await getTributesForLocation(locationId);
  return res.status(200).json(data);
});

// TODO: Data validation
router.post("/", async (req, res) => {
  const tributeData = req.body;
  const tribute = await saveTribute(tributeData);
  return res.status(200).json(tribute);
});

module.exports = router;
