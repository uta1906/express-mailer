const express = require("express");
const cors = require("cors");
const sequelize = require("./model/connection");
const users = require("./routes/users_routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("connect to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", users);

app.listen(PORT, () => {
  console.log("Listen to port " + PORT);
});
