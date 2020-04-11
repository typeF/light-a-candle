const supertest = require("supertest");
const express = require("express");
const locationRoutes = require("./location");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const request = supertest(app);

app.use("/", locationRoutes);

jest.mock("../actions/pins", () => {
  return {
    getAllPins: async () => {
      return await [{ pin: 1 }, { pin: 2 }];
    },
  };
});

describe("GET /location", () => {
  it("should return return an array of pins with status 200", async (done) => {
    expect.assertions(2);
    const res = await request.get("/");
    expect(res.body[0]).toHaveProperty("pin");
    expect(res.status).toBe(200);
    done();
  });
});
