
//import fs module
const fs = require("fs");
const productsJSONData = require("./products.json");
const path=require('path');
const { log } = require("console");

const dirPath=path.join(__dirname,'products.json')
//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function (done) {
  
  console.log(dirPath);
  //parse the filecontent and save it in another varible say productdata
  //return the callback with first parameter as undefined and second parameter as productdata
  fs.readFile(dirPath, (err, fileContent) => {
    if (err) {
      console.log(err);
      return done(err, undefined);
    }
    const productData = JSON.parse(fileContent);
    return done(null, productData);
  })
}


//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function (id, done) {
  //write all the logical steps
  //return the callback with first parameter as undefined and second parameter as productDetails
    fs.readFile(dirPath, (err, fileContent) => {
    if (err) {
      return done(err, undefined);
    }
    const productsData = JSON.parse(fileContent);
    const productDetails = productsData.find((product) => product.id === id);

    return done(undefined, productDetails);
  })
}


//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
   const productData=JSON.parse(productsJSONData)
   productData.push(ProductDetails)
   
  //Write the productData into the file 
  fs.writeFile(dirPath, JSON.stringify(productData), (err) => {
    if (err) {
      return done(err, undefined);
    }
  //return the callback with undefined and ProductDetails
  return done(undefined, productData);
  })

}

//The method deleteProductById will take productId and done as parameters
//It will read the product.json file

const deleteProductById = function (productId, done) {
  const productData = JSON.parse(productsJSONData);
  const productDetails = productData.filter((product) => product.id !== productId);

  fs.writeFile(dirPath, JSON.stringify(productDetails), (err) => {
    if (err) {
      return done(err, undefined);
    }
    
    return done(undefined, productDetails);
  });
}



module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById

}