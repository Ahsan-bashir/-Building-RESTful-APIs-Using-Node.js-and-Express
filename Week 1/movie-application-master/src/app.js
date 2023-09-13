// Import the required dependencies
const http = require("http");
const moviesService = require("./moviesService");
const getRequestData = require("./utils");

// Define the port at which the application will run
const PORT = 5000;

// Define the server
const server = http.createServer(async (req, res) => {
  // Get all movies
  if (req.url === "/api/movies" && req.method === "GET") {
    moviesService.getMovies((err, results) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results));
      }
    });
  }
    // Get a movie with specified id
  else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    moviesService.getMoviesById(id, (err, results) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results));
      }
    });
  }
  // Save movie details
  else if (req.url === "/api/movies" && req.method === "POST") {
    const body = await getRequestData(req);
    moviesService.saveMovie(body, (err, results) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      } else {
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results));
      }
    });
  }
  // Update a specific movie
  else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    const body = await getRequestData(req);
    moviesService.updateMovie(id, body, (err, results) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results));
      }
    });
  }
  // Delete a specific movie
  else if (req.url.match(/\/api\/movies\/([0-9]+)/) && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    moviesService.deleteMovieById(id, (err, results) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results));
      }
    });
  }
  // If no route present capture in the else part
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route Not Found" }));
  }
  
});
// listen to the server on the specified port
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
server.on("error", (error) => {
  if (error.code === "EADRINUSE") {
    console.log("Port already in use");
  }
});
