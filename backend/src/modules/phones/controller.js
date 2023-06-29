const { findAll, findById,  } = require("./model");

const getAll = ({ req, res }) => {
  findAll()
    .then(([phones]) => {
      res.status(200).json(phones);
    })
    .catch((err) => console.error(err));
};

const getById = (req, res) => {
  const { id } = req.params;
  findById(id)
    .then(([phone]) => {
      !phone ? res.status(400).json("ressource with the specified id does not exist") : res.status(200).json(phone);
    })
    .catch((err) => console.error(err));
};


module.exports = {
  getAll,
  getById
};
