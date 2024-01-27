const express = require("express");
const router = express.Router();
const productsController = require("./productsController");

//import the modules require

//This method will get all the Product form the product.json 
router.get("/", (req, res) => {
  try {
    //calling the controller getProducts 
    //if error return the response as 400
    //if result return the response as 200 with status OK and  data as result
    productsController.getProducts((err, results) => {
      if(err){
        res.status(400).json({status:400, message:err});
      }
      else{
        res.status(200).json({status:200, data:results});
      }
     
    });
    //Handle the exception return response as 400 with status as some error msg
  } catch (err) {
    res.status(400).json({status:400, message:err});
  }
});

//This method will get the product with given productId form the product.json 
router.get("/:productId", (req, res) => {
  try {
    //get the productid from the req.params
    
    
    //calling the controller getProductById method 
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productsController.getProductById(productId, (err, results) => {
      
    });

  } catch (err) {
     //Handle the exception return response as 400 with status as some error msg
   
  }
});

//This method will save/post a new product in the product.json 
router.post("/", (req, res) => {
  try {
    //get all the productdetails from the req.body
    const productDetails = {
    
    }
    //calling the controller saveProductDetails method 
    //if error return the response as 400
    //if result return the response as 201 with status as OK and  data as result
    productsController.saveProductDetails(productDetails, (err, results) => {
     
    });

  } catch (err) {
      //Handle the exception return response as 400 with status as some error msg
   
  }
});



//This method will delete product with specific productid from the product.json 
router.delete("/:productId", (req, res) => {
  try {
     //get the productid from the req.params
   

    //calling the controller deleteProductById method 
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productsController.deleteProductById(productId, (err, results) => {
      
    });

  } catch (err) {
     //Handle the exception return response as 400 with status as some error msg
    
  }
});

module.exports = router;
