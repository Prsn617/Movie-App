import React, { useState } from "react";
import axios from "axios";
import MovieDesc from "./components/MovieDesc";
import Home from "./components/Home";
import Error from "./components/Error";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState("");
  const [movieId, setMovieId] = useState("");
  const apiKey = process.env.REACT_APP_MOVIE_API;

  console.log(movieId);
  // console.log(`DOT:::${process}`);
  console.log(`ENV:::${process.env}`);
  console.log(`Pro:::${process.env.REACT_APP_MOVIE_API}`);
  function searchMovie(e) {
    console.log(e.target.value);
    setUserData(e.target.value);
  }

  const fetchMovies = async (e) => {
    e.preventDefault();

    let x = await axios.get(
      `http://www.omdbapi.com/?s=${userData}&apikey=${apiKey}`
    );
    console.log(x);
    let datas = x.data.Search;
    console.log(datas);
    setData(datas);

    // .then((response) => {
    //   let datas = response.data.Search;
    //   // setData([...data, datas]);
    //   setData(datas);
    // })
    // .catch((error) => {
    //   console.log("Nooooo");
    //   setData(null);
    // });
  };
  return (
    <Router>
      <Nav searchMovie={searchMovie} fetchMovies={fetchMovies} />
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            element={<Home data={data} setMovieId={setMovieId} />}
          />

          <Route path={`/${movieId}`} element={<MovieDesc />} />
          <Route path="*" element={<Error />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
