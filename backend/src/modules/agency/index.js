const router = require("express").Router();
const { getAllAgenciesByPhoneID, getAll } = require("./controller");

router.get("/", getAll);
router.get("/:id", getAllAgenciesByPhoneID);

module.exports = router;
