const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");
const router = express.Router();
const authToken = require("./services/verifyToken");

require("dotenv/config");
const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//IMPORT Routes

//ROUTES

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  // {  },
  () => {
    console.log("connected to DB");
  }
);

//LISTEN
app.listen(process.env.PORT || 9000);

app.use("/app", router);
