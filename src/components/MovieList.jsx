import React from "react";
import "./css/MovieList.css";
import { Link } from "react-router-dom";

export default function MovieList({ movieData, setMovieId }) {
  return (
    <div className="movieContainer">
      {movieData.map((movie) => (
        <div className="movieList" key={movie.imdbID}>
          <Link
            onClick={() => {
              setTimeout(() => setMovieId(movie.imdbID), 0);
            }}
            to={{
              pathname: `/${movie.imdbID}`,
            }}
          >
            <img src={movie.Poster} key={movie.imdbID} alt="movie" />
          </Link>
          <label>
            <b>{movie.Title}</b>
          </label>
          <label>Year: {movie.Year}</label>
        </div>
      ))}
    </div>
  );
}
