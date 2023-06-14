const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./Routes/User.routes");
const app = express();
require("dotenv").config;

app.use(express.json());

app.use("/users", userRouter);

app.listen(process.env.PORT, async (req, res) => {
  try {
    await connection;
    console.log("Connected to Database Successfully");
  } catch (error) {
    console.log("Cannot Connect to Datatbase");
  }
});
