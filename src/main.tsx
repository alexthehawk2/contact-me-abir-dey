import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ErrorPage from "./Error.jsx";
import "./assets/styles/style.css";
import Success from "./Success.js";
import Failure from "./Failure.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/success",
    element: <Success />,
    errorElement: <ErrorPage />,
  },
  {
    path: "failure",
    element: <Failure />,
    errorElement: <ErrorPage />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
