const { findAllModels, findAllBrands } = require("./model");
const argon = require("argon2");
const jwt = require("jsonwebtoken");

const getAllModels = async (req, res, next) => {
    try {
        const models = await findAllModels();
        res.status(200).json(models);
    } catch (err) {
        console.log(err);
    }
}

const getAllBrands = async (req, res, next) => {
    try {
        const brands = await findAllBrands();
        res.status(200).json(brands);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllModels,
    getAllBrands
}