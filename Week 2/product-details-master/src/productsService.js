

//import the DAO layer
const productsDao = require('./productDao');

const getProducts = function(done){
  //call dao getproducts method and pass the parameter
  productsDao.getProducts((err, results) => {
    if(err){
      return res.status(400).json({
        status: "error",
        message: err.message
      })
    }
    return res.status(200).json({
        status: "success",
        data: results
      })
  }
)
}

const getProductById = function(id, done){
  //call dao getProductById method and pass the parameter
 productsDao.getProductById(id, (err, results) => {
    if(err){
      return res.status(400).json({
        status: "error",
        message: err.message
      })
    }
    return res.status(200).json({
        status: "success",
        data: results
      })
  }
)
}
const saveProductDetails = function(productDetails, done){
  //call dao saveProductDetails method and pass the parameter
productsDao.saveProductDetails(productDetails, (err, results) => {
    if(err){
      return res.status(400).json({
        status: "error",
        message: err.message
      })
    }
    return res.status(200).json({
        status: "success",
        data: results
      })
  }
)
}


const deleteProductById = (productId, done) => {
//call dao deleteProductById method and pass the parameter
productsDao.deleteProductById(productId, (err, results) => {
    if(err){
      return res.status(400).json({
        status: "error",
        message: err.message
      })
    }
    return res.status(200).json({
        status: "success",
        data: results
      })
  }
)
}



module.exports = {
  getProducts, getProductById,saveProductDetails, deleteProductById
}
