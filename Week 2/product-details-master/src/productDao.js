//import fs module
const fs = require("fs");
const path = require("path");



//The getProducts function take done as callback
//It will read the product.json file

// productDao.js
const getProducts = function(done){
  let productData;
  try {
    productData = fs.readFileSync(path.join(__dirname, 'products.json'));
  } catch (err) {
    return done(err, undefined);
  }

  const productDetails = JSON.parse(productData);
  // console.log(productDetails);
  if(productDetails.length === 0){
    return done(new Error("No products found"), undefined);
  }
console.log(productDetails);
  done(undefined, productDetails);   
}


//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function(id, done) {
  try {
    const productData = fs.readFileSync(path.join(__dirname, 'products.json'));
    const productDetails = JSON.parse(productData);
    const product = productDetails.find((p) => p.id == id);
    console.log(product);
    done(undefined, product);
  } catch (err) {
    done(err, undefined);
  }
}
    
      



//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
      
  //Write the productData into the file 
     
  //return the callback with undefined and ProductDetails
  const parsedData = JSON.stringify(ProductDetails);
  fs.writeFileSync(path.join(__dirname, 'products.json'), parsedData);
  done(undefined, ProductDetails);
     
    
  }

  //The method deleteProductById will take productId and done as parameters
  //It will read the product.json file

  const deleteProductById = function(productId, done){
    //Write all the logical steps
     //return the callback with first parameter as undefined and second parameter as productDetails
  }


module.exports ={
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById
    
}