import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import CandidateSearch from "./pages/CandidateSearch";
import SavedCandidates from "./pages/SavedCandidates";
import ErrorPage from "./pages/ErrorPage";

console.log("Script starting");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CandidateSearch />,
      },
      {
        path: "saved",
        element: <SavedCandidates />,
      },
    ],
  },
], {
  future: {
    v7_relativeSplatPath: true,
  },
});

try {
  const root = document.getElementById("root");
  console.log("Root element found:", root);

  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
    console.log("Render called");
  }
} catch (error) {
  console.error("Error in main:", error);
}
