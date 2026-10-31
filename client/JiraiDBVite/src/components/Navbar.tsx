import { Link } from "react-router-dom";
import { logout } from "../utils/loginServices";
import pudding from "../assets/pudding.png";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <h1>
          <Link key={"/"} to={"/"} className="siteName">
            <img src={pudding} className="siteImage" />
            JiraiDB
          </Link>
        </h1>

        <button onClick={logout}>Logout</button>
        <nav>
          <Link key={"/Login"} to={"/Login"}>
            Login
          </Link>
          <br />
          <Link key={"/Upload"} to={"/Upload"}>
            Restricted Page
          </Link>
          <br />
          <Link key={"/SignUp"} to={"/SignUp"}>
            Sign Up
          </Link>
          <br />
          <Link key={"/Clothes"} to={"/Clothes"}>
            All Items
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
