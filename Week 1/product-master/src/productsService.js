// Import the necessary dependencies
const lodash = require("lodash");
const productsList = require("./products.json").products;


const getProducts = () => {
  return productsList
}

const getProductsById = (productId, done) => {
  let product = null

  // get a product by ID
product=productsList.find(product=>product.id===productId)
if(!product){
  console.log("No Product Found ...");
}
  return done(null, "Requested product doesn't exist..!");
}

const saveProduct = (newProduct, done) => {
 // save a product
  return done(null, JSON.stringify(productsList));
}

const updateProduct = (productId, updateData, done) => {
  let updatedProductList = null;
  // update the product list
  done(null, JSON.stringify(updatedProductList));
}

const deleteProduct = (productId, done) => {
  // delete a product    
  done(null, JSON.stringify(productsList));
}


module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}