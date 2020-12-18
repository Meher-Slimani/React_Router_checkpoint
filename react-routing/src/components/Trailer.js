import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Trailer = ({ movies, match }) => {
  const [theMovie, setTheMovie] = useState({});
  console.log(match);
  console.log(theMovie);
  useEffect(() => {
    const item = movies.find((movie) => movie.ImdbID === match.params.id);
    setTheMovie(item);
  }, []);
  return (
    <div className="d-flex flex-column ">
      <div className="d-flex">
        <Link to="/">
          <button type="button" class="home btn btn-success">
            Home
          </button>
        </Link>
        <span className="title">{theMovie.Title}</span>
      </div>
      <div className="my-4 mx-auto">
        <iframe
          className="rounded"
          width="700"
          height="394"
          src={theMovie.Trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mx-5">
        <p>{theMovie.Description}</p>
      </div>
    </div>
  );
};

export default Trailer;
