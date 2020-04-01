import axios from "axios";
import server from "./config";

/* eslint-disable no-console */
export default async function getTributesForLocation(searchParams) {
  const { city, province, country } = searchParams;
  if (!city || !province || !country) {
    console.error("Missing city/province/country");
    return;
  }
  try {
    return await axios.get(`${server}/location/tributes?city=${city}&province=${province}&country=${country}`);
  } catch (err) {
    console.log(`Error while fetching tributesForLocation: ${err}`);
  }
}
