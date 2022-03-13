import React from "react";
import "./css/Nav.css";
import { Link } from "react-router-dom";

export default function Nav({ searchMovie, fetchMovies }) {
  return (
    <div className="NavBar">
      <Link to="/" className="link">
        <h1>Movie App</h1>
      </Link>

      <form action="" className="search">
        <input
          type="text"
          name=""
          placeholder=" Search..."
          onChange={searchMovie}
        />
        <button type="submit" onClick={fetchMovies}>
          <span className="material-icons" id="search-btn">
            search
          </span>
        </button>
      </form>
    </div>
  );
}
