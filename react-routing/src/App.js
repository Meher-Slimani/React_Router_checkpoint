import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovie from "./components/AddMovie";
import { Movies } from "./components/Movies";
import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Trailer from "./components/Trailer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //HERE ARE STATE STUFF
  const [movies, setMovies] = useState(Movies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");
  const [filteredMoviesTitle, setFilteredMoviesTitle] = useState([]);
  const [filteredMoviesRate, setFilteredMoviesRate] = useState([]);

  //HERE ARE useEffect STUFF
  useEffect(() => {
    setFilteredMoviesRate(
      filterRate &&
        !filterTitle &&
        movies.filter((movie) => {
          return movie.Rating <= filterRate;
        })
    );
    // setFilterRate("");
  }, [filterRate, filterTitle, movies]);

  useEffect(() => {
    setFilteredMoviesTitle(
      filterTitle !== ""
        ? movies.filter((movie) =>
            movie.Title.toLowerCase().includes(filterTitle)
          )
        : []
    );
  }, [filterTitle, movies]);
  //HERE ARE FUNCTIONS...
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <>
                  <Filter
                    setFilterTitle={setFilterTitle}
                    setFilterRate={setFilterRate}
                  />
                  <div className="col d-flex mt-3 justify-content-between">
                    <MovieList
                      movies={movies}
                      setMovies={setMovies}
                      filterTitle={filterTitle}
                      filteredMoviesTitle={filteredMoviesTitle}
                      filteredMoviesRate={filteredMoviesRate}
                      filterRate={filterRate}
                    />
                    <AddMovie addMovie={addMovie} />
                  </div>
                </>
              );
            }}
          />
          <Route
            path="/trailer/:id/:name"
            render={(props) => {
              return <Trailer {...props} movies={movies} />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
