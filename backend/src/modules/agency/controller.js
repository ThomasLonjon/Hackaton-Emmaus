const { findAllAgenciesByPhoneId, findAll } = require("./model");

const getAllAgenciesByPhoneID = (req, res) => {
  const { id } = req.params;
  findAllAgenciesByPhoneId(id)
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
  getAllAgenciesByPhoneID,
  getAll,
};
