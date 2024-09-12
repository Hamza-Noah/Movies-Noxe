
export default function Person({person}) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card  bg-transparent h-100 text-white">
          <img
            src={"https://image.tmdb.org/t/p/w500" + person.profile_path}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h2>{person.name}</h2>
            <p className={`card-text movie-description`}>{person.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
