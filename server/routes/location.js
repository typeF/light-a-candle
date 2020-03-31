const express = require("express");
const { getAllPins, savePin } = require("../actions/pins");
const { getTributesForLocation } = require("../actions/tributes");

const router = express.Router();

router.get("/pins", async (req, res) => {
  const data = await getAllPins();
  return res.status(200).json(data);
});

// TODO: Data validation
router.post("/pins", async (req, res) => {
  const pin = req.body;
  console.log(`Pin data: ${pin}`);
  await savePin(pin);
  return res.status(200).end();
});

// Pass in city, province, country query parameters to search for tributes in a location
// Ex. localhost:4000/location/tributes?city=vancouver&province=bc&country=canada
router.get("/tributes", async (req, res) => {
  const { city, province, country } = req.query;
  const searchParams = { city, province, country };
  const data = await getTributesForLocation(searchParams);
  return res.status(200).json(data);
});

module.exports = router;
