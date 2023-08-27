// Import the necessary dependencies
const lodash = require("lodash");
const productsList = require("./products.json").products;


const getProducts = () => {
  return JSON.stringify(productsList)
}

const getProductsById = (productId, done) => {
  let product = null

  // get a product by ID
product=productsList.find(product=>product.id===productId)
if(!product){
  console.log("No Product Found ...");
  return done( "Requested product doesn't exist..!",null);
}
return done(null,JSON.stringify(product)); 
}

const saveProduct = (newProduct, done) => {
 // save a product
 const isProduct=productsList.find(product=>product.id===newProduct.id)
 if(!isProduct){
   productsList.push(newProduct)
   return done(null, JSON.stringify(productsList));
 }else{

   return done("Product already exists..!", null);
 }
}

const updateProduct = (productId, updateData, done) => {
 
 const product= productsList.find(product=>product.id===productId)
 if(product){
  product.name=updateData.name
  product.price=updateData.price
  product.quantity=updateData.quantity
  product.description=updateData.description

  

  done(null, JSON.stringify(productsList));
 }else{
    // update the product list
    done("Requested product doesn't exist..!", null);
 }

}

const deleteProduct = (productId, done) => {
  const product= productsList.find(product=>product.id===productId)
  if(product){
    const index=productsList.indexOf(product)
    productsList.splice(index,1)
    done(null, JSON.stringify(productsList));
  }else{
    done("Requested product doesn't exist..!", null);
  }
  // delete a product    
}


module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}