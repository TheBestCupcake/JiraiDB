import { Link } from "react-router-dom";
import { logout } from "../utils/loginServices";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <h1>
          <Link key={"/"} to={"/"} className="siteName">
            JiraiDB
          </Link>
        </h1>

        <button onClick={logout}>Logout</button>
        <nav>
          <Link key={"/Login"} to={"/Login"}>
            Login
          </Link>
          <br></br>
          <Link key={"/Upload"} to={"/Upload"}>
            Restricted Page
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
