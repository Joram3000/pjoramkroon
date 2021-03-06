import "./style3.css";
import { Parallax } from "react-scroll-parallax";

import Sidescrollcomp from "../sidescrolcomp/sidescrollcomp";
import BandcampCarousel from "../BandcampCarousel/BandcampCarousel";

import raket from "../../assets/raket.png";

export default function cssBlox2() {
  return (
    <div className="wholepage">

    
      <div className="page" id="nr1">
        <text style={{ fontSize: "10vh" }}>hier staat text</text>
      </div>

      <div className="page" id="nr2">
        <Parallax speed={10}>
          <text
            style={{
              color: "rgb(46, 69, 115)",
              backgroundColor: "cornflowerblue",
              position: "relative",
            }}
          >
            nou en toen gebeurde dit
          </text>
        </Parallax>
        <Parallax speed={20}>
          <text
            style={{
              color: "rgb(113, 41, 90)",
              backgroundColor: "chocolate",
              position: "relative",
            }}
          >
            en toen gebeurde dat
          </text>
        </Parallax>{" "}
        <Parallax speed={40}>
          <text
            style={{
              color: "rgb(41, 113, 41)",
              backgroundColor: "rgb(51, 68, 58)",
              position: "relative",
            }}
          >
            maar daarna gebeurde ook nog dit echt waar
          </text>
        </Parallax>
      </div>

      <Sidescrollcomp />
      <BandcampCarousel />

      <div className="page" id="nr5">
        <Parallax scale={[0, 3, "easeOutQuint"]}>
          <text>lekker inzoomen</text>
        </Parallax>
      </div>

      <Parallax speed={200}>
        <div className="page" id="zoef">
          <img
            style={{ width: "100px", height: "auto" }}
            src={raket}
            alt="raket"
            id="raket"
          />
        </div>
      </Parallax>

      <div className="page" id="nr4">
        <div id="blokje">nr4</div>
        <div id="blokje">nr4</div>
        <div id="blokje">nr4</div>
        <div id="blokje">nr4</div>
        <div id="blokje">nr4</div>
      </div>

      <div className="page" id="nr6">
        <Parallax rotate={[0, 4050]}>
          <text id="nr11">PROPELLOORRRR</text>
        </Parallax>
      </div>

      <div style={{ backgroundColor: "grey" }} className="page" id="nr3">
        <div id="blokkie1"></div>
      </div>

      <div style={{ backgroundColor: "blue" }} className="page"></div>

      <div className="page" id="nr4">
        <div id="blokje">nr4</div>
        <div id="blokje">nr4</div>
        <div id="blokje">nr4</div>
        <div id="blokje">nr4</div>
        <div id="blokje">nr4</div>
      </div>
    </div>
  );
}
