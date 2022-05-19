import wyfr1 from "../../assets/wyfr1.png";
import wyfr2 from "../../assets/wyfr2.png";
import wyfr3 from "../../assets/wyfr3.png";
import wyfr4 from "../../assets/wyfr4.png";
import wyfr5 from "../../assets/wyfr5.png";

import "./style.css";

export default function cssBlox() {
  return (
    <div>
      <div className="page1">
        <img id="bg" src={wyfr1} alt="wyfr1" />

        <h3 id="textje">
          Kijk ik ben een textje die aan het begin staat <br />
          en toen ging ik hier verderen ging ik hier verden ging ik hier verd en
          ging ik hier verden ging ik hier verden ging ik hier verd en ging ik
          hier verd
        </h3>
      </div>

      <div className="page2">
        <img id="bg" src={wyfr2} alt="wyfr2" />

        <p id="textje">Nou en toen gebeurde dit en toen gebeurde dat en toen</p>
      </div>

      {/*       
      <div className="textBoxes">
        <p id="textje2">
          en ik sta hieren ik sta hieren
          <br /> ik sta hieren ik sta hieren ik sta
          <br /> hieren ik sta hieren ik sta hieren ik sta hieren ik sta hier
        </p>

        <p id="textje3">
          hallo ik sta hier
          <br /> ik sta hieren ik sta hieren ik sta
          <br /> ik sta hierhwdren ik sta hoeren ik sta
          <br /> ik sta hieren ik sta huren ik sta
        </p>
      </div> */}

      {/* <div className="backGrounds">
        <img id="bg" src={wyfr1} alt="wyfr1" />
        <img id="bg" src={wyfr2} alt="wyfr2" />
        <img id="bg" src={wyfr3} alt="wyfr3" />
        <img id="bg" src={wyfr4} alt="wyfr4" />
      </div> */}
    </div>
  );
}
