const router = require("express").Router();
const { getAll, getById } = require("./controller");
// const { authenticate } = require("../../middlewares/auth");

// router.get("/", authenticate, getAll);
router.get("/", getAll);
router.get("/:id", getById);

module.exports = router;
