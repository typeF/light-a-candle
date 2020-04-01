const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const candleRoutes = require("./routes/candles");
const tributeRoutes = require("./routes/tributes");
const locationRoutes = require("./routes/location");

// const Model = Sequelize.Model;

// class User extends Model {}
// User.init(
//   {
//     firstName: {
//       type: Sequelize.STRING
//     }
//   },
//   {
//     sequelize,
//     modelName: "user"
//   }
// );

// User.sync({ force: true }).then(() => {
//   return User.create({
//     firstName: "John"
//   });
// });

// User.create({
//   firstName: "Jack"
// }).then(user => {
//   console.log("new user: " + user);
// });

// User.findAll().then(users => {
//   console.log("All users: ", JSON.stringify(users, null, 4));
// });

const PORT = process.env.PORT || 4000;
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/candles", candleRoutes);
app.use("/tribute", tributeRoutes);
app.use("/location", locationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
