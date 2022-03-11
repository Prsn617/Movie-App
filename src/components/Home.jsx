import React from "react";

import MovieList from "./MovieList";

export default function Home({ data, setMovieId }) {
  if (data == null) {
    return <h2 align="center">Movie not found</h2>;
  }
  return (
    <div>
      <MovieList movieData={data} setMovieId={setMovieId} />
    </div>
  );
}
