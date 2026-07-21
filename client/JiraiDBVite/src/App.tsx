import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesProvider from "./utils/routes";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <RoutesProvider />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
