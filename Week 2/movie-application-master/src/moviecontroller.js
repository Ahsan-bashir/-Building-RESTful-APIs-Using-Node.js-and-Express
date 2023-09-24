//import service layer
const movieservice = require("./movieservice");

const getMovies = (done) => {
//call service method getMovies method
 movieservice.getMovies((err, results) => {
      if(err){
       return res.status(500).json({
          message: "Error while fetching movies"
        })
      }
      return res.status(200).json({
        message: "Movies fetched successfully",
        data: results     
    })
    }
    );
}

const getMovieById = (movieId, done) => {
    //call service method getMovieById method
 movieservice.getMovieById(movieId, (err, results) => {
      if(err){
       return res.status(500).json({
          message: "Error while fetching movies"
        })
      }
      return res.status(200).json({
        message: "Movies fetched successfully",
        data: results     
    })
    }
    );
}

const saveMovieDetails = (movieDetails, done) => {
  //call service method saveMovieDetails method
  movieservice.saveMovieDetails(movieDetails, (err, results) => {
      if(err){
       return res.status(500).json({
          message: "Error while fetching movies"
        })
      }
      return res.status(200).json({
        message: "Movies fetched successfully",
        data: results     
    })
    }
    );
}

const updateMovieDetails = (movieId, movieDetails, done) => {
  //call service method updateMovieDetails method
 movieservice.updateMovieDetails(movieId, movieDetails, (err, results) => {
      if(err){
       return res.status(500).json({
          message: "Error while fetching movies"
        })
      }
      return res.status(200).json({
        message: "Movies fetched successfully",
        data: results     
    })
    }
    );
}

const deleteMovieById = (movieId, done) => {
  //call service method deleteMovieById method
  movieservice.deleteMovieById(movieId, (err, results) => { 
      if(err){
       return res.status(500).json({
          message: "Error while fetching movies"
        })
      }
      return res.status(200).json({
        message: "Movies fetched successfully",
        data: results     
    })
    }
    );
}

module.exports = {
  getMovies, getMovieById, saveMovieDetails, updateMovieDetails, deleteMovieById
}
