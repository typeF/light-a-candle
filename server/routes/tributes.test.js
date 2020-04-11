const supertest = require("supertest");
const express = require("express");
const tributesRoutes = require("./tributes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const request = supertest(app);

app.use("/", tributesRoutes);

jest.mock("../actions/tributes", () => {
  return {
    getTributesForLocation: async (locationId) => {
      const locationIds = [1, 2];
      if (locationIds.includes(parseInt(locationId))) {
        return await [
          {
            locationId,
            firstName: "Bob",
            lastName: "Smith",
            middleName: "",
            img: "",
            dob: Date.now(),
            dod: Date.now(),
            tribute: "abcd",
            occupation: "Nurse",
            workplace: "VGH",
          },
        ];
      }
      return;
    },

    saveTribute: async () => {
      return;
    },
  };
});

describe("GET /tributes/:locationId", () => {
  it("should return 404 if no location id provided", async (done) => {
    expect.assertions(1);
    const res = await request.get("/");
    expect(res.status).toBe(404);
    done();
  });

  it("should return 400 if location id not found", async (done) => {
    expect.assertions(1);
    const res = await request.get("/3");
    expect(res.status).toBe(400);
    done();
  });

  it("should return 200 with valid tribute structure if location id found", async (done) => {
    expect.assertions(2);
    const res = await request.get("/1");
    expect(res.body[0]).toHaveProperty("firstName");
    expect(res.status).toBe(200);
    done();
  });
});
