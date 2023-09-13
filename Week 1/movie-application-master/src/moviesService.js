// Import the axios library
const axios = require('axios')
const movies = require('../data/movies.json')

const getMovies = (done) => {
  // get all movies
  axios.get('http://localhost:3000/movies')
    .then((response) => {
      done(null, response.data); // Pass the data to the callback
    })
    .catch((error) => {
      done(error, null); // Pass the error to the callback
    });
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
  axios.put('http://localhost:3000/movies/' + movieId, updateData).then((response) => {
    const movie = movies.find(movie => movie.id == movieId)
    movie.title = updateData.title
    movie.director = updateData.director
    movie.year = updateData.year
    movie.rating = updateData.rating
    done(movies)
  }).catch((error) => {
    done(error)
  })
}

const deleteMovieById = function (movieId, done) {
  // delete a specific movie 
  axios.delete('http://localhost:3000/movies/' + movieId).then((response) => {
    const movie = movies.find(movie => movie.id == movieId)
    const index = movies.indexOf(movie)
    movies.splice(index, 1)
    done(movies)
  }).catch((error) => {
    done(error)
  })
}



module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
}
