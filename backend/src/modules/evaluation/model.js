const db = require("../../config/db-config");

const findAllModels = async () => {
    const [models] = await db.query('SELECT * FROM models')
    return models
} 

const findAllBrands = async () => {
    const [brands] = await db.query('SELECT distinct brand FROM models')
    return brands
} 

const insertEvaluation = async (evaluation) => {
    const { ram, storage, network, os, condition, price, agency, model } = evaluation;
    const [data] = await db.query(
        "INSERT INTO evaluation (ram, storage, network, os, `condition`, price, agency_id, models_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
        [ram, storage, network, os, condition, price, agency, model]
    );
    return data;
};

module.exports = {
    findAllModels,
    findAllBrands,
    insertEvaluation
}