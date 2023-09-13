// Import the axios library
const axios = require('axios')
const movies = require('../data/movies.json')

const getMovies = (done) => {
  // get all movies
  axios.get('http://localhost:3000/movies').then((response) => {
    done(response.data)
  }).catch((error) => {
    done(error)
  })
}

const getMoviesById = (movieId, done) => {
  // get movie by id
  axios.get('http://localhost:3000/movies/' + movieId).then((response) => {
    done(response.data)
  }).catch((error) => {
    done(error)
  })
}

const saveMovie = function (newMovie, done) {
  // save the details of a movie read from the request body
  axios.post('http://localhost:3000/movies', newMovie)
  .then((response) => {
    const movie = response.data
    movies.push(movie)
    done(movies)
  })
  .catch((error) => {
    done(error)
  })
}

const updateMovie = function (movieId, updateData, done) {
  // update movie details of a specific movie
  axios.post('')
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
