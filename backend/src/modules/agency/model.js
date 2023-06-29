const db = require("../../config/db-config");

const findAgencyById = (id) => {
  return db.execute("SELECT * FROM agency WHERE agency.id = ?", [id]).then((data) => {
    return data;
  });
};

const findAll = () => {
  return db.execute("SELECT * FROM agency ").then((data) => {
    return data;
  });
};

module.exports = {
  findAgencyById,
  findAll,
};
