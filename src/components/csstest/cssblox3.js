import "./style3.css";
import { Parallax } from "react-scroll-parallax";

export default function cssBlox2() {
  return (
    <div className="wholepage">
      <div className="page" id="nr1">
        <text>hier staat text</text>
      </div>

      <div className="page" id="nr2">
        <Parallax speed={10}>
          <text id="nr11">nou en toen gebeurde dit </text>
        </Parallax>
        <Parallax speed={20}>
          <text id="nr22">en toen gebeurde dat</text>
        </Parallax>{" "}
        <Parallax speed={40}>
          <text id="nr33">maar daarna gebeurde ook nog dit echt waar</text>
        </Parallax>
      </div>

      <div className="page" id="nr5">
        <Parallax scale={[0, 3, "easeOutQuint"]}>
          <text>lekker inzoomen</text>
        </Parallax>
      </div>

      <Parallax speed={300}>
        <div className="page" id="nr3">
          <div id="blokkie1"></div>
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
          <text id="nr11">nou en toen gebeurde dit </text>

          <text id="nr22">en toen gebeurde dat</text>

          <text id="nr33">maar daarna gebeurde ook nog dit echt waar</text>
        </Parallax>
      </div>

      <div className="page" id="nr3">
        <div id="blokkie1"></div>
      </div>

      <div className="page"></div>

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
