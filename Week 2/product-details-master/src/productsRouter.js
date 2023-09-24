

//import the modules require
const router = require("express").Router();
//This method will get all the Product form the product.json 
router.get("/", (req, res) => {
  try {
    //calling the controller getProducts 
    //if error return the response as 400
    //if result return the response as 200 with status OK and  data as result
    productsController.getProducts((err, results) => {
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

    });
    //Handle the exception return response as 400 with status as some error msg
  } catch (err) {
    return res.status(400).json({ 
      status: "error",
      message: err.message
    })
  }
});

//This method will get the product with given productId form the product.json 
router.get("/:productId", (req, res) => {
  try {
    //get the productid from the req.params
    const produvtId = req.params.productId;
    
    //calling the controller getProductById method 
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productsController.getProductById(productId, (err, results) => {
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
    });

  } catch (err) {
     //Handle the exception return response as 400 with status as some error msg
   return res.status(400).json({
      status: "error",
      message: err.message
    })

  }
});

//This method will save/post a new product in the product.json 
router.post("/", (req, res) => {
  try {
    //get all the productdetails from the req.body
    const productDetails = {
    "productId": req.body.productId,
    "productName": req.body.productName,
    "productCode": req.body.productCode,
    "releaseDate": req.body.releaseDate,
    "description": req.body.description,
    "price": req.body.price,
    "starRating": req.body.starRating,
    "imageUrl": req.body.imageUrl
    }
    //calling the controller saveProductDetails method 
    //if error return the response as 400
    //if result return the response as 201 with status as OK and  data as result
    productsController.saveProductDetails(productDetails, (err, results) => {
     if(err){
       return res.status(400).json({
         status: "error",
         message: err.message
       })
     }
      return res.status(201).json({
        status: "success",
        data: results
      })
    });

  } catch (err) {
      //Handle the exception return response as 400 with status as some error msg
   return res.status(400).json({
      status: "error",
      message: err.message
    })

  }
});



//This method will delete product with specific productid from the product.json 
router.delete("/:productId", (req, res) => {
  try {
     //get the productid from the req.params
   const productId = req.params.productId;

    //calling the controller deleteProductById method 
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productsController.deleteProductById(productId, (err, results) => {
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
          });
    

  } catch (err) {
     //Handle the exception return response as 400 with status as some error msg
    return res.status(400).json({
      status: "error",
      message: err.message
    })
  }
});

module.exports = router;
