import "./style2.css";
import { Parallax } from "react-scroll-parallax";

export default function cssBlox2() {
  return (
    <div className="wholething">
      <div className="deel1">
        <div className="textblok">
          <text>
            dit is een textjedit is een textjedit is een textjedit is een
            texextjedit is een textjeditt is een textjedit is een textjedit is
            een textjedit is een textje
          </text>
        </div>
      </div>

      <div className="deel2">
        <Parallax
          translateX={["2000px", "-400px"]}
          scale={[1, 1]}
          rotate={[-180, 0]}
          easing="easeInOutQuint"
        >
          <p>gewoon een stukje text dat voorbijvlliegt</p>
        </Parallax>

        <p id="ding1">
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets
        </p>

        <p id="ding2">
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets
        </p>
      </div>

      <Parallax speed={200}>
        <div className="deel3">
          <text>Hele dikke text</text>
        </div>
      </Parallax>

      {/* <div className="deel4">
        <text>
          dit is dan er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog niet aangezien er nog niets staat gebeurd er nog nier nog niets
          staat gebeurd er nog niets aangezien er nog niets staat gebeurd er nog
          niets aangezien er nog niets staat gebeurd er nog niets aangezien er
          nog niets staat gebeurd er nog niets aangezien er nog niets staat
          gebeurd er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog nide ruwe text van deel 3deel3 aangezien er nog niets staat
          gebeurd er nog nier nog niets staat gebeurd er nog niets aangezien er
          nog niets staat gebeurd er nog niets aangezien er nog niets staat
          gebeurd er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog nide ruwe text van deel
          3deel3 aangezien er nog niets staat gebeurd er nog nier nog niets
          staat gebeurd er nog niets aangezien er nog niets staat gebeurd er nog
          niets aangezien er nog niets staat gebeurd er nog niets aangezien er
          nog niets staat gebeurd er nog niets aangezien er nog niets staat
          gebeurd er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog nide ruwe text van deel 3deel3s aangezien er nog niets staat
          gebeurd er nog niets aangezien er nog niets staat gebeurd er nog nier
          nog niets staat gebeurd er nog niets aangezien er nog niets staat
          gebeurd er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog niets aangezien er nog niets staat gebeurd
          er nog niets aangezien er nog niets staat gebeurd er nog niets
          aangezien er nog niets staat gebeurd er nog niets aangezien er nog
          niets staat gebeurd er nog nide ruwe text van deel 3deel3
        </text>
      </div> */}

      <div
        style={{ height: "500px", width: "100%", backgroundColor: "red" }}
        className="deel5"
      >
        <text>hallo daar allemaal</text>
      </div>
      <div
        style={{ height: "500px", width: "100%", backgroundColor: "blue" }}
        className="deel6"
      >
        hallo
      </div>
      <div
        style={{ height: "500px", width: "100%", backgroundColor: "grey" }}
        className="deel7"
      >
        hallo
      </div>
      <div
        style={{ height: "500px", width: "100%", backgroundColor: "purple" }}
        className="deel8"
      >
        hallo
      </div>
    </div>
  );
}
