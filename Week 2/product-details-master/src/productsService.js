

//import the DAO layer
const productsDao = require('./productDao');

const getProducts = function(done){
  //call dao getproducts method and pass the parameter
  productsDao.getProducts(done)
}

const getProductById = function(id, done){
  //call dao getProductById method and pass the parameter
 productsDao.getProductById(id, done)
}


const saveProductDetails = (productDetails, done) => {
  //call service saveProductDetails method and pass the parameter
 productsDao.saveProductDetails(productDetails,done)
}



const deleteProductById = (productId, done) => {
//call dao deleteProductById method and pass the parameter
productsDao.deleteProductById(productId,done)
}



module.exports = {
  getProducts, getProductById,saveProductDetails, deleteProductById
}
