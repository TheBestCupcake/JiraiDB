import horizontal from "../assets/horizontalimgexmaple.jpg";
import vertical from "../assets/verticalimgexample.jpg";
import square from "../assets/squareimgexample.jpg";

function Home() {
  return (
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
  );
}

export default Home;
