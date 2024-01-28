//import the productService
const productService = require('./productsService');



// productsController.js
const getProducts = (done) => {
   //call service getproducts method and pass the parameter
    productService.getProducts((err, results) => {
      if(err){
        console.log(err);
        done(err, null);
      }
      else{
        done(null,  results);
        // console.log(results);
      }
    });
}

const getProductById = (productId, done) => {
   //call service getProductById method and pass the parameter
    productService.getProductById(productId,(err, results) => {
      if(err){
        console.log(err);
        done(err, null);
      }
      else{
        done(null,  results);
        // console.log(results);
      }
    });

}

const saveProductDetails = (productDetails, done) => {
  //call service saveProductDetails method and pass the parameter
  productService.saveProductDetails(productDetails,(err, results) => {
    if(err){
      console.log(err);
      done(err, null);
    }
    else{
      done(null,  results);
      // console.log(results);
    }
  });

}


 const deleteProductById = (productId, done) => {
   //call service deleteProductById method and pass the parameter
  
 }

module.exports = {
  getProducts, getProductById, saveProductDetails, deleteProductById
}
