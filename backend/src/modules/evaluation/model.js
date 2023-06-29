const db = require("../../config/db-config");

const findAllModels = async () => {
    const [models] = await db.query('SELECT * FROM models')
    return models
} 

const findAllBrands = async () => {
    const [brands] = await db.query('SELECT DISTINCT brand FROM models')
    return brands
} 

module.exports = {
    findAllModels,
    findAllBrands
}