import React from "react";

import { Parallax } from "react-scroll-parallax";

import Africadelic_PracexBlackKoyo from "../../assets/GnawaExploration/Africadelic_PracexBlackKoyo.mp4";
import AtlasElectronic_PracexSattaralSaadiResized2 from "../../assets/GnawaExploration/AtlasElectronic_PracexSattaralSaadiResized3.png";

export default function PracexGnawaPageHeader() {
  
  return (
    <div className="header">
      <video className="bgvideo" muted loop autoPlay>
        <source src={Africadelic_PracexBlackKoyo} type="video/mp4" />
      </video>
      <img
        style={{
          width: "100%",
          position: "relative",
          top: "20vw",
        }}
        className="bg"
        id="AtlasElectronic_PracexSattaralSaadiResized2"
        src={AtlasElectronic_PracexSattaralSaadiResized2}
        alt=""
      />

      <Parallax className="headertext">
        The<br></br>Gnawa<br></br>Expedition
      </Parallax>
    </div>
  );
}
