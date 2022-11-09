const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/products', ProductController.showAllProduct);
    app.get('/:id', ProductController.findOneProduct);
    app.delete('/:id', ProductController.deleteProduct);
    app.post('/products/new', ProductController.createProduct);
    app.put('/:id', ProductController.updateProduct);
}

//add api for rest conv