const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet"),
  app = express();

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(helmet());
app.use(cookieParser());

<<<<<<< HEAD
// const recipe_rooter = require("../modules/recipe");
// const session_rooter = require("../modules/session");
// const tag_rooter = require("../modules/tag");
// const user_rooter = require("../modules/user");
// const wine_rooter = require("../modules/wine");

// app.use("/recipes", recipe_rooter);
// app.use("/sessions", session_rooter);
// app.use("/tags", tag_rooter);
// app.use("/users", user_rooter);
// app.use("/wines", wine_rooter);

const userRouter = require("../modules/user")

app.use("/users", userRouter)

=======
const user_rooter = require("../modules/user");
const phone_rooter = require("../modules/phones");
const evaluation_rooter = require("../modules/evaluation");

app.use("/evaluation", evaluation_rooter);
app.use("/users", user_rooter);
app.use("/phones", phone_rooter);
>>>>>>> 2c32c9507a0d8c3e9e796d80abe04df9cbf5e860

module.exports = app;
