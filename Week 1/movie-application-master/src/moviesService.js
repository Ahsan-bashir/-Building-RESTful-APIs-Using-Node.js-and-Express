// Import the axios library
const axios = require('axios')

const getMovies = (done) => {
  // get all movies
  axios.get(url)
  .then((response)=>{
      
  })
  .catch((error)=>{

  })
}

const getMoviesById = (movieId, done) => {
  // get movie by id
}

const saveMovie = function (newMovie, done) {
  // save the details of a movie read from the request body
}

const updateMovie = function (movieId, updateData, done) {
 // update movie details of a specific movie
}

const deleteMovieById = function (movieId, done) {
  // delete a specific movie 
}



module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
}
