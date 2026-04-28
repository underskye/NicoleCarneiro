import { createBrowserRouter } from "react-router-dom"; // 👈 corrige aqui também
import { Layout } from "./components/Layout";
import { Homepage } from "./components/Homepage";
import { Project } from "./components/Project";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "project", element: <Project /> },
      ],
    },
  ],
  {
    basename: "/NicoleCarneiro", // 👈 ESSA LINHA resolve o 404
  }
);