import Home from "../Pages/Home";
import Upcoming from "../Pages/Upcoming";
import TopRated from "../Pages/TopRated";
import TvShows from "../Pages/TvShows";
import People from "../Pages/People";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Layout from "../Components/Layout";
import ProtectedRoute from "../Pages/ProtectedRoute";
import MovieDetails from "../Pages/MovieDetails";

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