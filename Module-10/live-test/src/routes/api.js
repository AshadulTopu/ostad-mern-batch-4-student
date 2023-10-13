const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

router.post("/createProduct", productController.createProduct);

router.get("/getSingleProduct/:id", productController.getSingleProduct);

router.delete("/deleteProduct/:id", productController.deleteProduct);

router.put("/updateProduct/:id", productController.updateProduct);


module.exports = router;