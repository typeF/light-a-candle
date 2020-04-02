// TODO: Replace first server with production server
const server = process.env.NODE_ENV === "production" ? "https://light-a-candle.herokuapp.com" : "http://localhost:4000";
export default server;
