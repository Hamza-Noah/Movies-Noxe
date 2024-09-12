import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../../Components/Movie/Movie";
import SliderMovies from "../../Components/SliderMovies/SliderMovies"

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=f31de6b44ad5fe28935eff41302201c7"
    );

setTimeout(() => {
  console.log(movies);
  
  
}, 2000);    

    setMovies(data.results);
  }
  console.log(movies);

  return (
    <>
      <div className="container mt-5 pt-5">
        <SliderMovies movies={movies}/>
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
