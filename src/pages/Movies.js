import { useState } from "react";
import { Link } from "react-router-dom";

import { Reviews } from "../components/Movies/Reviews";
import { Stars } from "../components/Movies/Stars";

import moviesList from "../components/listor/movies";

export const Movies = () => {
  const [movies, setMovies] = useState(moviesList);
  const [search, setSearch] = useState("");
  // const [genre, setGenre] = useState("");

  const styles = {
    "border-top": "1px solid black",
  };
  return (
    <section>
      <label htmlFor="searchMovie">Search muvis:</label>
      <input
        onInput={(e) => setSearch(e.target.value)}
        type="text"
        name="searchMovie"
        id=""
      />
      {movies.map((movie) => {
        if (!isNaN(movie)) {
          return;
        }
        if (movie.title.includes(search)) {
          return (
            <section style={styles}>
              <Link to={`/book/${movie.title}`}>{movie.title}</Link>
              <Stars movie1={movie} />
              <Reviews movies={movies} setMovies={setMovies} movie={movie} />
            </section>
          );
        }
      })}
    </section>
  );
};
