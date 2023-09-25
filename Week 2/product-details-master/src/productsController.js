

//import the productService
const productService = require('./productsService');

const getProducts = (done) => {
  //call service getproducts method and pass the parameter
  productService.getProducts(done)
}



const getProductById = (productId, done) => {
   //call service getProductById method and pass the parameter
productService.getProductById(productId, done)
}

const saveProductDetails = (productDetails, done) => {
  //call service saveProductDetails method and pass the parameter
productService.saveProductDetails(productDetails, done)
}


 const deleteProductById = (productId, done) => {
   //call service deleteProductById method and pass the parameter
  productService.deleteProductById(productId, done)
 }

module.exports = {
  getProducts, getProductById, saveProductDetails, deleteProductById
}
