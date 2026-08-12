import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

let routeVariables = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/Clothes/:id", name: ":id", component: <Home /> },
  { path: "/Login", name: "Login", component: <Login /> },
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
