const router = require("express").Router();


const { getAllModels, getAllBrands } = require('./controller')


router.get('/', getAllModels)
router.get('/brands', getAllBrands)


module.exports = router;
