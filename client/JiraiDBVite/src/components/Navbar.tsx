import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div id="Navbar">
        <span>
          <Link key={"/"} to={"/"}>
            <strong>JiraiDB</strong>
          </Link>
        </span>
      </div>
    </>
  );
}

export default Navbar;
