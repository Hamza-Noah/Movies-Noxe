import "./App.css";
import AuthContextProvider from "./Contexts/AuthContext";
import router from "./routes/router";





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
