const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const crudController = require("./crud.controller");
const authenticate = require("../middlewares/authenticate")

router.post((""), authenticate,  async(req, res)=>{
    try{
        const user_id = req.user._id;
        const item = await Product.create({
            title : req.body.title,
            price : req.body.price,
            user_id : user_id,
        });
        return res.status(201).send(item);
    }catch(err){
        return res.status(500).send({error : err.message});
    }
});
router.get((""), crudController(Product).getAll);
router.get((""), crudController(Product).getOne);
router.delete((""), crudController(Product).patch);
router.patch((""), crudController(Product).patch)

module.exports = router;