//import the DAO layer
const productsDao = require('./productDao');


const getProducts = function(done){
  //call dao getproducts method and pass the parameter
  productsDao.getProducts((err, results) => {
    if(err){
      console.log(err);
      done(err, undefined);
    }
    else{
      // Make sure results is an array
      if (!Array.isArray(results)) {
        done(new Error('Results is not an array'), undefined);
      } else {
        done(undefined, results);
      } 
    }
  }
  );
  
}

const getProductById = function(id, done){
  //call dao getProductById method and pass the parameter
  productsDao.getProductById(id,(err, results) => {
    if(err){
      console.log(err);
      done(err, undefined);
    }
    else{   
      done(undefined, results);
      
    }
  }
  );
}
const saveProductDetails = function(productDetails, done){
  //call dao saveProductDetails method and pass the parameter
  productsDao.saveProductDetails(productDetails,(err, results) => {
    if(err){
      console.log(err);
      done(err, undefined);
    }
    else{   
      done(undefined, results);
      
    }
  }
  );

}


const deleteProductById = (productId, done) => {
//call dao deleteProductById method and pass the parameter
}



module.exports = {
  getProducts, getProductById,saveProductDetails, deleteProductById
}
