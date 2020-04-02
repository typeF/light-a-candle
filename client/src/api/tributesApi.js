import axios from "axios";
import server from "./config";

/* eslint-disable no-console */
export async function getTributesForLocation(locationId) {
  if (!locationId || locationId === "") {
    console.error("Missing locationId");
    return;
  }
  try {
    return await axios.get(`${server}/tributes/${locationId}`);
  } catch (err) {
    console.log(`Error while fetching tributesForLocation: ${err}`);
  }
}

export async function saveTribute(data) {
  // TODO: Data validation
  try {
    const tribute = await axios.post(`${server}/tributes`, data);
    return tribute;
  } catch (err) {
    console.error(`Error while fetching tributesForLocation: ${err}`);
  }
}
