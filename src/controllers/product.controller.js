const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const crudController = require("./crud.controller");

router.post((""), crudController(Product).post);
router.get((""), crudController(Product).getAll);
router.get((""), crudController(Product).getOne);
router.delete((""), crudController(Product).patch);
router.patch((""), crudController(Product).patch)

module.exports = router;