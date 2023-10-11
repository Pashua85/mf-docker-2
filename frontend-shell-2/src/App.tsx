import React from "react";
import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// @ts-ignore
const RemoteMain = React.lazy(() => import("Main/App"));
// @ts-ignore
const RemoteAdmin = React.lazy(() => import("Admin/App"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RemoteMain />,
  },
  {
    path: "/admin",
    element: <RemoteAdmin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
