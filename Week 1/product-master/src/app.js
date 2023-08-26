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

  // else if (req.url === '/api/v1/productsList' && req.method === 'POST') {
  //   let req_body = ""
  //   req_body = await getRequestData(req)
  //   if (req_body) {
  //     const isProduct=productsService.saveProduct(JSON.parse(req_body))
  //     if (isProduct!==null) {
       
  //       res.writeHead(201, {
  //         'content-type': 'application/json'
  //       })
  //       res.end(JSON.stringify(JSON.parse(req_body)))
  //     } else {
  //       res.writeHead(400, {
  //         'Content-Type': 'application/json'
  //       });
  //       res.end("Product already exit !")
  //     }
  //   } else {
  //     res.writeHead(400, {
  //       'Content-Type': 'application/json'
  //     });
  //     res.end("Unable to retrieve data from request")
  //   }
  // }


  else if (req.url === '/api/v1/productsList' && req.method === 'POST') {
    try {
        const req_body = await getRequestData(req);

        if (req_body) {
            const productToAdd = JSON.parse(req_body);
            productsService.saveProduct(productToAdd, (error, isProduct) => {
                if (error) {
                    res.writeHead(400, {
                        'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify({ error: "Product already exists!" }));
                } else {
                    res.writeHead(201, {
                        'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify(productToAdd));
                }
            });
        } else {
            res.writeHead(400, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({ error: "Unable to retrieve data from request" }));
        }
    } catch (error) {
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ error: "Internal server error" }));
    }
}

  // Update a specific product
  if(req.url.match('/\/api\/v1\/productsList\/([0-9])/') && req.method === 'PUT'){
    const id = parseInt(req.url.split('/')[4])
    const product = productsService.updateProduct(id)
    if(product){
      res.writeHead(204,{
        'content-type':'application/json'
      })
      res.end(JSON.stringify(product))
    }else{
      res.writeHead(404, {
        'Content-Type': 'application/json'
      });
      res.end('Product not found');
    }

  }
  // Delete a specific Product
  // if(req.url.match('/\/api\/v1\/productsList\/([0-9])/') && req.method === 'DELETE'){
  //   const id = parseInt(req.url.split('/')[4])
  //   const product = productsService.deleteProduct(id)
  //   if(product){
  //     response.writeHead(200, {
  //       'content-type': 'application/json'
  //   })
  //   response.end("Id is Deleted !")
  //   }else{
  //     response.writeHead(404, {
  //       'content-type': 'application/json'
  //   })
  //   response.end("No such Id is present !")
  //   }
  // }


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