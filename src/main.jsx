import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import WelcomePage from "./Pages/homepage";
import ErrorPage from "./Pages/404";
// array di dalam object 
const router = createBrowserRouter([
  {
    path : "/",
    element : <WelcomePage/>,
    errorElement : <ErrorPage />,

  },
  {
    path : "/Login",
    element : <LoginPage />,
  },
  {
    path : "/Register",
    element :<RegisterPage />,
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App></App> */}
  </React.StrictMode>
);
