import { BrowserRouter } from "react-router-dom";
import RoutesProvider from "./utils/routes";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="containerHeader">
            <Navbar />
          </div>
          <div className="containerBody">
            <RoutesProvider />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
