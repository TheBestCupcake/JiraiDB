import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Upload from "../pages/Upload";
import ProtectedRoute from "../components/ProtectedRoute";
import SignUp from "../pages/SignUp";

let routeVariables = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/Clothes/:id", name: ":id", component: <Home /> },
  { path: "/Login", name: "Login", component: <Login /> },
  {
    path: "/Upload",
    name: "Upload",
    component: (
      <ProtectedRoute>
        <Upload />
      </ProtectedRoute>
    ),
  },
  { path: "/SignUp", name: "Sign Up", component: <SignUp /> },
];

function RoutesProvider() {
  const routesObjects = routeVariables.map((variable) => (
    <Route
      key={variable.path}
      path={variable.path}
      element={variable.component}
    />
  ));

  return <Routes>{routesObjects}</Routes>;
}

export default RoutesProvider;
