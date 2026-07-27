import horizontal from "../assets/horizontalimgexmaple.jpg";
import vertical from "../assets/verticalimgexample.jpg";
import square from "../assets/squareimgexample.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section>
        <div className="split">
          <div className="split-left">
            <img src={vertical} className="displayImage" />
          </div>
          <div className="split-right">
            <h1>Home</h1>
            <h2>Display</h2>
            <p>Hi</p>
            <h2>Waow</h2>
            <p>Mwah</p>
          </div>
        </div>
      </section>

      <section>
        <div className="dropdown">
          <Link className="dropdownButton" to="/Test0">
            Dropdown
          </Link>
          <div className="dropdownContent">
            <Link to="/Test1">DropdownSize1</Link>
            <Link to="/Test2">Drop2</Link>
            <Link to="/Test3">DropdownS3</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
