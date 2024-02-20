import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:"",
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
]);