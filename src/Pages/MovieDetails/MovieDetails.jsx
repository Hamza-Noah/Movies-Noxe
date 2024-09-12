import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  console.log(id);

  useEffect(() => {
    getDetails();
  }, []);

  async function getDetails(params) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f31de6b44ad5fe28935eff41302201c7`
    );

    setDetails(data);
  }

  console.log(details);
  return (
    <>
      <div className="container">
        <div className="card bg-transparent text-white">
          <img
            src={"https://image.tmdb.org/t/p/w500" + details.backdrop_path}
            className="card-img-top"
            alt="..."
          />

          <div className="card-body d-flex  my-5">
            <img
              src={"https://image.tmdb.org/t/p/w500" + details.poster_path}
              className="card-img-top w-25"
              alt="..."
            />
            <div className="px-4">
              <h5 className="card-title">{details.original_title}</h5>
              <p className="card-text my-3">
              {details.overview}
              </p>
              <p>Relase Date{details.release_date}</p>
              <p>Rate: {details.vote_average}</p>
              <p>language: {details.original_language}</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
