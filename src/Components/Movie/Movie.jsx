import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  console.log(movie);

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card  bg-transparent h-100 text-white">
          <Link  to={`/moviedetailes/${movie.id}`}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              className="card-img-top"
              alt="..."
            />
          </Link>
          <div className="card-body">
            <Link to={`/moviedetailes/${movie.id}`}>
              <h2>{movie.original_title}</h2>
            </Link>
            <p className={`card-text movie-description`}>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
