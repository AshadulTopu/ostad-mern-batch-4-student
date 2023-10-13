const productModel = require("../models/productsModel");

exports.createProduct = (req, res) => {
    const { title, short_des, price, discount, image, stock, star, remark } =
        req.body;
        console.log(req.body);
    const newProduct = new productModel({
        title,
        short_des,
        price,
        discount,
        image,
        stock,
        star,
        remark,
    })
    newProduct.save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({
                message: err,
            })
        })
}

// read single product 

exports.getSingleProduct = (req, res) => {
    const { id } = req.params;
    productModel.findById(id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({
                message: err,
            })
        })
}


// delete single product

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    productModel.findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({
                message: err,
            })
        })
}

// update single product

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    productModel.findByIdAndUpdate(id, req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({
                message: err,
            })
        })
}
