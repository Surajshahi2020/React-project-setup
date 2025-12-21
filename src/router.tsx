import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";
import PublicLayout from "./layouts/public.layout";
import LoginPage from "./pages/authentication/login";
import RegisterPage from "./pages/authentication/register";
import HomeLayout from "./layouts/home.layout";
import PageNotFound from "./pages/404";
import SessionLayout from "./layouts/Session.Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SessionLayout />,
    children: [
      {
        path: "",
        element: <HomeLayout  />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
      {
        path: "",
        element: <PublicLayout  />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
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



