import axios from "axios";
import server from "./config";

/* eslint-disable no-console */
export default async function getPinGeoJson() {
  try {
    const pins = await axios.get(`${server}/location`);
    return pins.data;
  } catch (err) {
    console.log(`Error fetching GeoJSON from server`);
  }
}
