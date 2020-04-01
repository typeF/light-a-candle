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
    // Data should contain everything in the inputfields + coordinates
    /* { firstname: "a", lastName: "b", middleName(optional): "c", city: "a", province: "a", 
         country: "a", latitude: 1, longitude: 2, img: "", tribute: "", occupation: "" } 
    */
    await axios.post(`${server}/tributes`, data).then((res) =>
      console.log(res).catch((err) => {
        console.log(err);
      })
    );
  } catch (err) {
    console.log(`Error while fetching tributesForLocation: ${err}`);
  }
}
