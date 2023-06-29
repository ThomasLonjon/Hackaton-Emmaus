const { findAll, findById } = require("./model");

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
      !phone
        ? res.status(400).json("ressource with the specified id does not exist")
        : res.status(200).json(phone);
    })
    .catch((err) => console.error(err));
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  deleteOne(id)
    .then((result) => {
      res.sendStatus(204).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("error server");
    });
};

module.exports = {
  getAll,
  getById,
  deleteUser,
};
