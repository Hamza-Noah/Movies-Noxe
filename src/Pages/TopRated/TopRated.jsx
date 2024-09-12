import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../../Components/Movie/Movie";

export default function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=f31de6b44ad5fe28935eff41302201c7"
      );

      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="container mt-5 pt-5">
        <h1 className="mb-5">
          <span className="d-block mb-3"> Welcome.</span>
          Millions of movies, TV shows and people to discover. Explore now.
        </h1>
        <div className="row g-3 mt-5">
          {movies.map((movie, index) => {
            return <Movie movie={movie} key={index}></Movie>;
          })}
        </div>
      </div>
    </>
  );
}
