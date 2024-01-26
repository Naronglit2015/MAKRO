const express = require('express');
const adminController = require('../controllers/admin-controller');

const router = express.Router();

router.post("/product", adminController.createProduct)

router.patch("/product/:productId", adminController.updateProduct);

router.post("/category", adminController.createCategory);
router.post("/brand", adminController.createBrand);
router.post("/promotion", adminController.createPromotion);


module.exports = router;