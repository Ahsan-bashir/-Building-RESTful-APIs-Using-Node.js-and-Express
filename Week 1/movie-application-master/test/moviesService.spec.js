const sinon = require("sinon");
const moviesService = require("../src/moviesService");

describe("Test movie service", () => {
  let create, getAll, findById, updateById, remove;

  beforeEach(() => {
    create = sinon.stub(moviesService, "saveMovie");
    getAll = sinon.stub(moviesService, "getMovies");
    findById = sinon.stub(moviesService, "getMoviesById");
    updateById = sinon.stub(moviesService, "updateMovie");
    remove = sinon.stub(moviesService, "deleteMovieById");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should save movie and return that object", (done) => {
    let movie = {
      id: 2,
      movieName: "Shawshank Redemption",
      director: "Franklin",
      rating: "9.9",
    };
    moviesService.saveMovie(movie, (err, results) => {});
    sinon.assert.calledOnceWithMatch(create, movie);
    done();
  });

  it("should return all movies", (done) => {
    moviesService.getMovies((err, results) => {});
    sinon.assert.calledOnce(getAll);
    done();
  });

  it("should return movie given the movie id", (done) => {
    moviesService.getMoviesById((err, results) => {});
    sinon.assert.calledOnce(findById);
    done();
  });

  it("should update movie given the movie id", (done) => {
    let updatedMovie = {
      id: 7,
      movieName: "Shawshank Redemption",
      director: "Franklin",
      rating: "9.9",
    };
    moviesService.updateMovie(updatedMovie.id, updatedMovie, (err, results) => {});
    sinon.assert.calledOnceWithMatch(updateById, updatedMovie.id, updatedMovie);
    done();
  });

  it("should delete movie given the movie id", (done) => {
    const id = 1;
    moviesService.deleteMovieById(id, (err, results) => {});
    sinon.assert.calledOnceWithMatch(remove, id);
    done();
  });
});
