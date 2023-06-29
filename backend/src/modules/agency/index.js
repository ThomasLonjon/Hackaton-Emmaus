const router = require("express").Router();
const { getAgencyByID, getAll } = require("./controller");

router.get("/:id", getAgencyByID);
router.get("/", getAll);

module.exports = router;
