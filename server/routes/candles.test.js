const supertest = require("supertest");
const express = require("express");
const candleRoutes = require("./candles");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const request = supertest(app);

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

    saveCandle: (candleData) => {
      if (!candleData.name || !candleData.message) {
        return false;
      }
      return true;
    },
  };
});

describe("GET /candles", () => {
  it("should return status 200 with candles array", (done) => {
    request
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, candles, done);
  });
});

describe("POST /candles", () => {
  it("should return status 400 if no body provided", async (done) => {
    const res = await request.post("/").send({});
    expect(res.status).toBe(400);
    done();
  });

  it("should return status 400 if name provided but no message", async (done) => {
    const res = await request.post("/").send({ name: "John" });
    expect(res.status).toBe(400);
    done();
  });

  it("should return status 400 if message provided but no name", async (done) => {
    const res = await request.post("/").send({ message: "hello" });
    expect(res.status).toBe(400);
    done();
  });

  it("should return status 400 if name is empty", async (done) => {
    const res = await request.post("/").send({ name: "", message: "hello" });
    expect(res.status).toBe(400);
    done();
  });

  it("should return status 400 if message is empty", async (done) => {
    const res = await request.post("/").send({ name: "John", message: "" });
    expect(res.status).toBe(400);
    done();
  });

  it("should return status 200 if name and message provided", async (done) => {
    const res = await request.post("/").send({ name: "John", message: "Hi" });
    expect(res.status).toBe(200);
    done();
  });
});
