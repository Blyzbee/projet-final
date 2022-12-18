import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import AllCollaborators from "./views/AllCollaborators/AllCollaborators";
import Profile from "./views/Profile/Profile";
import ErrorPage from "./views/ErrorPage/ErrorPage";
import "./index.css";
import { UserProvider } from "./contexts/UserContext";
import AddCollaborator from "./views/AddCollaborator/AddCollaborator";
import EditCollaborator from "./views/EditCollaborator/EditCollaborator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/all-collaborators",
    element: <AllCollaborators />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/add-collaborator",
    element: <AddCollaborator />,
  },
  {
    path: "/edit-collaborator/:id",
    element: <EditCollaborator />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
