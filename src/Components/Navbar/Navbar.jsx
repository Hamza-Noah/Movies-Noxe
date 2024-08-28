import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Navbar() {
  const { userToken, setUserToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    setUserToken("");
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg my-2">
        <div className="container-fluid">
          <h1 className="navbar-brand fw-bolder m-0">Noxe</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {userToken && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active fw-bolder"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bolder" to="/people">
                      People
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link fw-bolder" to="/tvshows">
                      Tv shows
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bolder" to="/toprated">
                      Top Rated
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bolder" to="/upcoming">
                      Upcoming
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>

              {!userToken && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active fw-bolder"
                      aria-current="page"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bolder" to="/Login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              {userToken && (
                <li className="nav-item">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="nav-link fw-bolder"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
