const router = require("express").Router();
const { getAll, getById, deleteUser } = require("./controller");
// const { authenticate } = require("../../middlewares/auth");

// router.get("/", authenticate, getAll);
router.get("/", getAll);
router.get("/:id", getById);

router.delete("/:id", deleteUser);

module.exports = router;
