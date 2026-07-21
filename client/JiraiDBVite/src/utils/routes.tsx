import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

let routeVariables = [{ path: "/", name: "Home", component: <Home /> }];

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
