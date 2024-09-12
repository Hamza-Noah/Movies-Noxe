import axios from "axios";
import { useState, useEffect } from "react";
import Person from "../../Components/Person/Person";

export default function People() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/person/day?api_key=3a8d4bff99757bb1b549c063f2ed3401"
    );

    setMovies(data.results);
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
            return <Person person={movie} key={index}></Person>;
          })}
        </div>
      </div>
    </>
  );
}
