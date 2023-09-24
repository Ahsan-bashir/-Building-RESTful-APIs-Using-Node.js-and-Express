
//import axios module
const axios = require("axios");
//After starting the JSOn server check the port on which is running accordingly change 
//the port in url given below
const PORT=process.env.PORT || "8000";
//This method will get all movies from json server
const getMovies = (done) => {
  // This url can be used - axios.get("http://localhost:3000/movies")
  axios.get(`http://localhost:${PORT}/movies`).then((response) => {
    done(null, response.data);
  }
  ).catch((err) => {
    done(err, null);
  }
  )
}

//This method will get specific movie id from json server
const getMovieById = (movieId, done) => {
   axios.get(`http://localhost:${PORT}/movies/${movieId}`).then((response) => {
    done(null, response.data);
}).catch((err) => {
    done(err, null);
})
 
}
//This method will save Movie details in Json server
const saveMovieDetails = (movieDetails, done) => {
   axios.post(`http://localhost:${PORT}/movies`, movieDetails).then((response) => {
    done(null, response.data);
}).catch((err) => {
    done(err, null);

})
 
}

//This method will update MovieDetails in Json Server
const updateMovieDetails = (movieId, movieDetails, done) => {
 axios.patch(`http://localhost:${PORT}/movies/${movieId}`, movieDetails).then((response) => {
    done(null, response.data);  
}).catch((err) => {
    done(err, null);

})
 
}

//This method will delete specific movie from Json Server
const deleteMovieById = (movieId, done) => {
    axios.delete(`http://localhost:${PORT}/movies/${movieId}`).then((response) => {
    done(null, response.data);
}).catch((err) => {
    done(err, null);


})
 
}

module.exports = {
  getMovies, getMovieById, saveMovieDetails, deleteMovieById, updateMovieDetails
}
