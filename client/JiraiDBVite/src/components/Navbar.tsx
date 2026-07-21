import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div id="navbar">
        <span>
          <Link key={"/"} to={"/"}>
            <h1>
              <strong className="siteName">JiraiDB</strong>
            </h1>
          </Link>
        </span>

        <nav></nav>
      </div>
    </>
  );
}

export default Navbar;
