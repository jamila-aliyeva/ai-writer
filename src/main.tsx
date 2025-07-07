import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardLayouts from "./components/layouts/dashboard-layouts";
import DashboardHome from "./pages/dashboardHome";
import { AppContextProvider } from "./context/app.context";
import { Toaster } from "react-hot-toast";
import { ContentContextProvider } from "./context/content.context";

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
        element: <DashboardHome />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    <AppContextProvider>
      <ContentContextProvider>
        <RouterProvider router={router} />
      </ContentContextProvider>
    </AppContextProvider>
  </StrictMode>
);
