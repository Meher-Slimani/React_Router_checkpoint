import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({
  movies,
  filteredMoviesTitle,
  filterTitle,
  setMovies,
  filteredMoviesRate,
  filterRate,
}) => {
  return (
    <div className="movie-container col-9 d-flex flex-wrap justify-content-around">
      {filteredMoviesTitle.length === 0 &&
      filterTitle === "" &&
      filteredMoviesRate.length === 0
        ? movies.map((movie) => (
            <Link to={`/trailer/${movie.ImdbID}/${movie.Title}`}>
              <MovieCard
                key={movie.ImdbID}
                poster={movie.Poster}
                title={movie.Title}
                rating={movie.Rating}
                description={movie.Description}
                movies={movies}
                setMovies={setMovies}
                movie={movie}
              />
            </Link>
          ))
        : filteredMoviesRate && !filterTitle
        ? filteredMoviesRate.map((movie) => (
            <Link to={`/trailer/${movie.ImdbID}/${movie.Title}`}>
              <MovieCard
                key={movie.ImdbID}
                poster={movie.Poster}
                title={movie.Title}
                rating={movie.Rating}
                description={movie.Description}
                movies={movies}
                setMovies={setMovies}
                filterRate={filterRate}
              />
            </Link>
          ))
        : filteredMoviesTitle.map((movie) => (
            <Link to={`/trailer/${movie.ImdbID}/${movie.Title}`}>
              <MovieCard
                key={movie.ImdbID}
                poster={movie.Poster}
                title={movie.Title}
                rating={movie.Rating}
                description={movie.Description}
                movies={movies}
                setMovies={setMovies}
              />
            </Link>
          ))}
    </div>
  );
};

export default MovieList;
