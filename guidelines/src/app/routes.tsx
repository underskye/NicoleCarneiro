import { createHashRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Homepage } from "./components/Homepage";
import { Project } from "./components/Project";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "project", element: <Project /> },
    ],
  },
]);