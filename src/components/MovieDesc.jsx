import React, { useState, useEffect } from "react";
import "./css/MovieDesc.css";
import axios from "axios";

export default function MovieDesc() {
  const [movie, setMovie] = useState("");
  //const [movieDetail, setMovieDetail] = useState("");
  //let { id } = useParams();
  let id = window.location.pathname;
  let id2 = id.replace("/", "");
  console.log("ID");
  console.log(id2);
  const fetchMovies = () => {
    axios
      .get(`http://www.omdbapi.com/?i=${id2}&apikey=ff586dd2`)
      .then((response) => {
        let datas = response.data;
        // setData([...data, datas]);
        setMovie(datas);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="movieDesc">
      <div className="poster">
        <img src={movie.Poster} alt="movie" />
      </div>
      <div className="desc">
        <h1>{movie.Title}</h1>
        <label>
          <b>{movie.Year}</b>
        </label>
        <label>Director: {movie.Director}</label>
        <label>Genre: {movie.Genre}</label>
        <label>Cast: {movie.Actors}</label>
        <label>imdb Rating: {movie.imdbRating}</label>
        <label>Meta Score: {movie.Metascore}</label>
        <p>{movie.Plot}</p>
        {/* <button onClick={fetchMovies}>Yes</button> */}
      </div>
    </div>
  );
}
