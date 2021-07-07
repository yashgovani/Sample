const path = require('path');
const express = require('express');

//const rootDir = require('../util/path');
const adminController = require('../controllers/admin');

const router = express.Router();

//const products = [];

/* router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir,../, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
}); */

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

/* router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
}); */

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

exports.routes = router;
//exports.products = products;
