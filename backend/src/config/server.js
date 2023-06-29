const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet"),
  app = express();

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(helmet());
app.use(cookieParser());

const user_rooter = require("../modules/user");
const agency_rooter = require("../modules/agency");
const phone_rooter = require("../modules/phones");
const evaluation_rooter = require("../modules/evaluation");

app.use("/users", user_rooter);
app.use("/agencies", agency_rooter);
app.use("/evaluation", evaluation_rooter);
app.use("/phones", phone_rooter);
<<<<<<< HEAD
=======

>>>>>>> 47311d6df0497b5eaebb692cbf0ba4042e00402e

module.exports = app;
