const db = require("../../config/db-config");

const findAll = () => {
  return db
    .query(
      "SELECT * FROM evaluation JOIN agency on agency.id = evaluation.agency_id join models on models.id = evaluation.models_id order by evaluation.id desc" 
    )
    .then((data) => {
      return data;
    });
};

const findById = (id) => {
  return db
    .query(
      "SELECT * FROM evaluation JOIN agency on agency.id = evaluation.agency_id join models on models.id = evaluation.models_id WHERE evaluation.id = ? ",
      [id]
    )
    .then((data) => {
      return data;
    });
};

const deleteOne = (id) => {
  return db
    .execute("delete from evaluation where id = ?", [id])
    .then(([result]) => {
      return result;
    });
};

module.exports = {
  findAll,
  findById,
  deleteOne,
};
