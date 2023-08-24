//Import the necessary dependencies
const http = require('http')
// Define a prot at which the server will run
const PORT=process.env.PORT|| 5000

const productsService = require("./productsService");
const getRequestData = require('./utils');
const productsList = require("./products.json").products;

const server = http.createServer(async (req, res) => {
  // Get all products
  if(req.url==='/api/v1/productsList' && req.method==='GET'){
    res.writeHead(200,{
      'content-type':'application/json'
    })
    res.end(JSON.stringify(productsList))
  }

  // Get a product with specified id

  // Create a new product

  // Update a specific product

  // Delete a specific Product

});

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})