import horizontal from "../assets/horizontalimgexmaple.jpg";
import vertical from "../assets/verticalimgexample.jpg";
import square from "../assets/squareimgexample.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchItemByID } from "../utils/itemServices";

function Home() {
  const [itemIMG, setItemIMG] = useState("");

  //This returns everything after localhost:5173
  let location = useLocation();
  let id = location.pathname;

  useEffect(() => {
    const loadIMG = async () => {
      const item = await fetchItemByID(id);
      setItemIMG(item.imgPath);
    };

    loadIMG();
  }, []);

  return (
    <>
      <section>
        <div className="split">
          <div className="split-left">
            <img src={itemIMG} className="displayImage" />
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

      <section>
        <div>
          <input type="search" placeholder="Search" className="searchbar" />
        </div>
      </section>
    </>
  );
}

export default Home;
