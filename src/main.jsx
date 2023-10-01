import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import RepoList from "./routes/RepoList";
import Blogs from "./routes/Blogs";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "repos/:lang",
        element: <RepoList />,
      },
      {
        path: "/blogs/",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
