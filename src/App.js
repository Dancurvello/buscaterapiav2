import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Favorites from './pages/Favorites';

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
  }
  

])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
