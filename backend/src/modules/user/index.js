const router = require("express").Router();
const { getAll, getById, register, login, logout, updateUser, deleteUser, getCurrentUser } = require("./controller");
const { hashPassword, authenticate, isAdmin } = require("../../middlewares/auth");

router.get("/", authenticate, isAdmin, getAll);
router.get("/me", authenticate, getCurrentUser);

router.get("/logout", authenticate, logout);
router.get("/:id", getById);

router.post("/register",hashPassword, register);
router.post("/login", login);

router.put("/:id", authenticate, updateUser);

router.delete("/:id", authenticate, isAdmin, deleteUser);

module.exports = router;
