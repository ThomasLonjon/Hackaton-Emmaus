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

app.use("/users", user_rooter);
app.use("/agencies", agency_rooter);

module.exports = app;
