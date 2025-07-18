import React from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";

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
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

