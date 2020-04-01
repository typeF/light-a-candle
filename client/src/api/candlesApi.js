import axios from "axios";
import server from "./config";

/* eslint-disable no-console */
// Limit 200 candles in backend
export async function getAllCandles() {
  try {
    const candles = await axios.get(`${server}/candles`);
    return candles;
  } catch (err) {
    console.log(`Error fetching candles: ${err}`);
  }
}

export async function saveCandle(data) {
  try {
    const candles = await axios.post(`${server}/candles`, data); // data should be in format {name: "John", message: "Message"}
    return candles;
  } catch (err) {
    console.log(`Error saving candle: ${err}`);
  }
}
