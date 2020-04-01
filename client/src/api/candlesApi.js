import axios from "axios";
import server from "./config";

/* eslint-disable no-console */
// Limit 200 candles in backend
export default async function getAllCandles() {
  try {
    const candles = await axios.get(`${server}/candles`);
    return candles;
  } catch (err) {
    console.log(`Error fetching GeoJSON from server`);
  }
}
