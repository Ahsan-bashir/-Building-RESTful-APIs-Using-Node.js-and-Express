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

  else if (req.url.match(/^\/api\/v1\/productsList\/([0-9]+)$/i) && req.method === 'GET') {
    const id = parseInt(req.url.split('/')[4])
    productsService.getProductsById(id, (error, product) => {
      if (!error) {
        res.writeHead(200, {
          'content-type': 'application/json'
        })
        res.end(product)
      } else {
        console.log(error);
        res.writeHead(404, {
          'content-type': 'application/json'
        })
        res.end(JSOn.stringify({ error: "No such Id is present !" }))
      }
    })
  }

  // Create a new product

  else if (req.url === '/api/v1/productsList' && req.method === 'POST') {

    let req_body = await getRequestData(req)
    try {
      if (req_body) {
        productsService.saveProduct(JSON.parse(req_body), (error, req_body) => {
          if (!error) {

            res.writeHead(201, {
              'content-type': 'application/json'
            })
            res.end(req_body)
          } else {
            res.writeHead(400, {
              'Content-Type': 'application/json'
            });
            res.end("Product already exit !")
          }
        })

      } else {
        res.writeHead(400, {
          'Content-Type': 'application/json'
        });
        res.end("Unable to retrieve data from request")
      }
    } catch (error) {
      res.writeHead(500, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify({ error: 'Internal Server error ' }))
    }
  }

  // Update a specific product
  else if (req.url.match(/^\/api\/v1\/productsList\/([0-9]+)$/i) && req.method === 'PUT') {
    try {
      const id = parseInt(req.url.split('/')[4]);
      let req_body = await getRequestData(req);
  
      if (req_body) {
        productsService.updateProduct(id, JSON.parse(req_body), (error, product) => {
          if (!error) {
            res.writeHead(204, {
              'content-type': 'application/json'
            });
            res.end(JSON.stringify({ result: "Updated" }));
          } else {
            res.writeHead(404, {
              'Content-Type': 'application/json'
            });
            res.end('Product not found');
          }
        });
      } else {
        res.writeHead(400, {
          'content-type': 'application/json'
        });
        res.end(JSON.stringify({ error: 'Unable to retrieve data' }));
      }
    } catch (error) {
      res.writeHead(500, {
        'content-type': 'application/json'
      });
      res.end(JSON.stringify({ error: 'Internal Server Error !!' }));
    }
  }
  
  // Delete a specific Product

  if (req.url.match(/\/api\/v1\/productsList\/([0-9])/) && req.method === 'DELETE') {
    const id = parseInt(req.url.split('/')[4]);
    productsService.deleteProduct(id, (error, product) => {
      if (error) {
        res.writeHead(404, {
          'Content-Type': 'application/json'
        });
        res.end("No such Id is present !");
      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.end("Id is Deleted !");
      }
    });
  }

});

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})

server.on('error',(error)=>{
  if(error==='EADRINUSE'){
    console.log("Server already in Use");
  }
})