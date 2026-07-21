import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <h1>
          <Link key={"/"} to={"/"} className="siteName">
            JiraiDB
          </Link>
        </h1>

        <nav></nav>
      </div>
    </>
  );
}

export default Navbar;
