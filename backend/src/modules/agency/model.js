const db = require("../../config/db-config");

const findAllAgenciesByPhoneId = (id) => {
  return db
    .execute(
      "SELECT * FROM agency JOIN evaluation ON agency.id = evaluation.agency_id JOIN models ON models.id=evaluation.models_id WHERE models.id = ?",
      [id]
    )
    .then((data) => {
      return data;
    });
};

const findAll = () => {
  return db.execute("SELECT * FROM agency ").then((data) => {
    return data;
  });
};

module.exports = {
  findAllAgenciesByPhoneId,
  findAll,
};
