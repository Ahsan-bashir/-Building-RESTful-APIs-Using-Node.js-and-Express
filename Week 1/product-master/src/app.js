//Import the necessary dependencies
const http = require('http')
// Define a prot at which the server will run
const PORT = process.env.PORT || 5000

const productsService = require("./productsService");

const getRequestData = require('./utils');
const productsList = require("./products.json").products;

const server = http.createServer(async (req, res) => {
  // Get all products

  if (req.url === '/api/v1/productsList' && req.method === 'GET') {
    res.writeHead(200, {
      'content-type': 'application/json'
    })
    res.end(JSON.stringify(productsList))
  }

  // Get a product with specified id

  else if (req.url.match('/\/api\/v1\/productsList\/([0-9])/') && req.method === 'GET') {
    const id = parseInt(req.url.split('/')[4])
    const product = productsService.getProductsById(id)
    if (product) {

      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(product))
    } else {
      res.writeHead(404, {
        'content-type': 'application/json'
      })
      res.end("No such Id is present !")
    }

  }
  // Create a new product

  else if (req.url === '/api/v1/productsList' && req.method === 'POST') {
    let req_body = ""
    req_body = await getRequestData(req)
    if (req_body) {
      let isProduct = productsList.find(product => product.id === req_body.id)
      if (!isProduct) {
        productsList.push(JSON.parse(req_body))
        res.writeHead(201, {
          'content-type': 'application/json'
        })
        res.end(JSON.stringify(JSON.parse(req_body)))
      } else {
        res.writeHead(400, {
          'Content-Type': 'application/json'
        });
        res.end("Product already exit !")
      }
    } else {
      res.writeHead(400, {
        'Content-Type': 'application/json'
      });
      res.end("Unable to retrieve data from request")
    }
  }
  // Update a specific product
  if(req.url.match('/\/api\/v1\/productsList\/([0-9])/') && req.method === 'PUT'){
    const id = parseInt(req.url.split('/')[4])
    const product = productsService.updateProduct(id)
    

  }
  // Delete a specific Product

});

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})