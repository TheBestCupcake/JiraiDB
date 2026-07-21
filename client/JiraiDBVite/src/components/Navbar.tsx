import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <span>
          <Link key={"/"} to={"/"} className="siteName">
            <h1>
              <strong>JiraiDB</strong>
            </h1>
          </Link>
        </span>

        <nav></nav>
      </div>
    </>
  );
}

export default Navbar;
