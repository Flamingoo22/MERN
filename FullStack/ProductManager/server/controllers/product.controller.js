const { model } = require('mongoose');
const {ProductManager} = require('../models/product.model');

module.exports.createProduct = (req, res) =>{
    const product = new ProductManager(req.body);
    product.save()
        .then(product => res.json(product))
        .catch(err=>res.json(err))
}

module.exports.showAllProduct = (req, res) =>{
    ProductManager.find()
        .then(allProduct => res.json(allProduct))
        .catch(err=>res.json(err))
}

module.exports.findOneProduct = (req, res) =>{
    ProductManager.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = ( req, res ) =>{
    ProductManager.findOne({_id: req.params.id})
        .then(
            product => {
                product.title = req.body.title;
                product.price = req.body.price;
                product.desc  = req.body.desc;
                return product.save();
            })
            .then(newProduct  => res.json(newProduct))
            .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) =>{
    ProductManager.remove({_id: req.params.id})
        .then(deletedProduct => res.json({product: deletedProduct, message:'Successfully removed'}))
        .catch(err => res.json({message: 'Something went wrong', error:err}))
}