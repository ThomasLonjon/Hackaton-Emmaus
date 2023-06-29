const router = require("express").Router();


const { getAllModels, getAllBrands, createEvaluation } = require('./controller')


router.get('/', getAllModels)
router.get('/brands', getAllBrands)
router.post('/', createEvaluation)


module.exports = router;
