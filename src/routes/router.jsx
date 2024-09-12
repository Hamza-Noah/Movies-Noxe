import Home from "../Pages/Home/Home";
import Upcoming from "../Pages/Upcoming/Upcoming";
import TopRated from "../Pages/TopRated/TopRated";
import TvShows from "../Pages/TvShows/TvShows";
import People from "../Pages/People/People";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Layout from "../Components/Layout/Layout";
import ProtectedRoute from "../Pages/ProtectedRoute/ProtectedRoute";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";

import { createBrowserRouter } from "react-router-dom";
import ProtectedAuthRoute from "../Pages/ProtectedAuthRoute/ProtectedAuthRoute";


 const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "upcoming",
          element: (
            <ProtectedRoute>
              <Upcoming />
            </ProtectedRoute>
          ),
        },
        {
          path: "topRated",
          element: (
            <ProtectedRoute>
              <TopRated />
            </ProtectedRoute>
          ),
        },
        {
          path: "tvshows",
          element: (
            <ProtectedRoute>
              <TvShows />
            </ProtectedRoute>
          ),
        },
        {
          path: "people",
          element: (
            <ProtectedRoute>
              <People />
            </ProtectedRoute>
          ),
        },
        {
          path: "moviedetailes/:id",
          element: (
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "Register",
          element: (
            <ProtectedAuthRoute>
              <Register />
            </ProtectedAuthRoute>
          ),
        },
        {
          path: "Login",
          element: (
            <ProtectedAuthRoute>
              <Login />
            </ProtectedAuthRoute>
          ),
        },
      ],
    },
  ]);

  export default router;