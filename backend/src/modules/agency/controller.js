const { findAgencyById, findAll } = require("./model");

const getAgencyByID = (req, res) => {
  const { id } = req.params;
  findAgencyById(id)
    .then(([agencies]) => {
      res.status(200).json(agencies);
    })
    .catch((err) => console.error(err));
};

const getAll = (req, res) => {
  findAll()
    .then(([agencies]) => {
      res.status(200).json(agencies);
    })
    .catch((err) => console.error(err));
};

module.exports = {
  getAgencyByID,
  getAll,
};
