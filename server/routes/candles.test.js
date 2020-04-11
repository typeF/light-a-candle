const request = require("supertest");
const express = require("express");
const candleRoutes = require("./candles");
const app = express();

app.use("/", candleRoutes);

const candles = [
  {
    name: "Amy",
    message: "Thank you",
  },
  {
    name: "Bob",
    message: "Keep it up!",
  },
];

jest.mock("../actions/candles", () => {
  return {
    getAllCandles: () => {
      // Jest doesn't like external variables in their mocks hence the duplication
      return [
        {
          name: "Amy",
          message: "Thank you",
        },
        {
          name: "Bob",
          message: "Keep it up!",
        },
      ];
    },
  };
});

describe("GET /candles", () => {
  it("should return status 200 with candles array", (done) => {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, candles, done);
  });
});
