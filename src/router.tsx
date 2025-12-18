import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";
import PageNotFound from "./pages/404";
import SessionLayout from "./layouts/Session.Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SessionLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
        children: [
          {
            path: "*",
            element: <PageNotFound />,
          },
        ],
      },
    ],
  },
]);


export default function Router() {
  return <RouterProvider router={router} />;
}



