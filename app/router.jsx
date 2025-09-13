import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import FocusSession from "./routes/FocusSession.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/focus",
    element: <FocusSession />,
  },
]);

export default router;
