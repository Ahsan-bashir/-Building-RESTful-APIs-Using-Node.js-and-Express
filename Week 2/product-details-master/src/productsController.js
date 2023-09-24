

//import the productService
const productService = require('./productsService');

const getProducts = (done) => {
   //call service getproducts method and pass the parameter
productService.getProducts((err, results) => {
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


const getProductById = (productId, done) => {
   //call service getProductById method and pass the parameter
productService.getProductById(productId, (err, results) => {
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

const saveProductDetails = (productDetails, done) => {
  //call service saveProductDetails method and pass the parameter
productService.saveProductDetails(productDetails, (err, results) => {
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
   //call service deleteProductById method and pass the parameter
  productService.deleteProductById(productId, (err, results) => {
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
  getProducts, getProductById, saveProductDetails, deleteProductById
}
