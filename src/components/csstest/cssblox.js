import wyfr1 from "../../assets/wyfr1.png";
import wyfr2 from "../../assets/wyfr2.png";
import wyfr3 from "../../assets/wyfr3.png";
import wyfr4 from "../../assets/wyfr4.png";
import wyfr5 from "../../assets/wyfr5.png";

import "./style.css";

export default function cssBlox() {
  return (
    <div>
      <div className="backGrounds">
        <img id="wyfr1" src={wyfr1} alt="wyfr1" />
        <img id="wyfr2" src={wyfr2} alt="wyfr2" />
        <img id="wyfr3" src={wyfr3} alt="wyfr3" />
        <img id="wyfr4" src={wyfr4} alt="wyfr4" />
      </div>

      <div className="textBoxes">
        <p id="textje1">
          Kijk ik ben een textje die aan het begin staat <br />
          en toen ging ik hier verder typen{" "}
        </p>

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
      </div>
    </div>
  );
}
