import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardLayouts from "./components/layouts/dashboard-layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page</h1>,
  },
  {
    path: "login",
    element: <h1>Login Page</h1>,
  },
  {
    path: "dashboard",
    element: <DashboardLayouts />,
    children: [
      {
        index: true,
        element: <h1>Dashboard Prompt Page</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
