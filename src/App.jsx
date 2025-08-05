import React from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/projects",
    element: (
      <Projects />
    ),
  },
  {
    path: "/experience",
    element: (
      <Experience />
    ),
  },
  {
    path: "/skills",
    element: (
      <Skills />
    ),
  },
  {
    path: "/profile",
    element: (
      <Profile />
    ),
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

