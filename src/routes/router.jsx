import Home from "./Components/Home/Home";
import Upcoming from "./Components/Upcoming/Upcoming";
import TopRated from "./Components/TopRated/TopRated";
import TvShows from "./Components/TvShows/TvShows";
import People from "./Components/People/People";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout/Layout";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedAuthRoute from "./Components/ProtectedAuthRoute/ProtectedAuthRoute";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

import { createBrowserRouter } from "react-router-dom";

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