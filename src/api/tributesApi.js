import axios from "axios";
import server from "./config";

/* eslint-disable no-console */
export async function getTributesForLocation(searchParams) {
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

// TODO: Add implementation
export async function saveTribute(data) {
  try {
    await axios.post(`${server}/tributes`, data).then((res) =>
      console.log(res).catch((err) => {
        console.log(err);
      })
    );
  } catch (err) {
    console.log(`Error while fetching tributesForLocation: ${err}`);
  }
}
