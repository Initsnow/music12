import {createHashRouter, Navigate} from "react-router-dom";
import App from "./App.tsx";
import MainLayout from "./MainLayout.tsx";
import Home from "./pages/Home.tsx";

const r = createHashRouter([
  {
    path: "",
    element: <Navigate to={"/home"}/>
  },
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "home",
        element: <Home/>,
      },
    ],
  }
])

export default r
