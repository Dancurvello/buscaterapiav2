import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Favorites from './pages/Favorites';
import DownloadApp from './pages/DownloadApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/MyAccount",
    element: <MyAccount/>,
  },
  {
    path: "/Favorites",
    element: <Favorites/>,
  },
  {
    path: "/DownloadApp",
    element: <DownloadApp/>,
  }
  

])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
