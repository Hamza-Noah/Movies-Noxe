import "./App.css";
import Home from "./Components/Home/Home";
import Upcoming from "./Components/Upcoming/Upcoming";
import TopRated from "./Components/TopRated/TopRated";
import TvShows from "./Components/TvShows/TvShows";
import People from "./Components/People/People";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
      {
        path: "topRated",
        element: <TopRated />,
      },
      {
        path: "tvshows",
        element: <TvShows />,
      },
      {
        path: "people",
        element: <People />,
      },
      { path: "Register", element: <Register /> },
      { path: "Login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
