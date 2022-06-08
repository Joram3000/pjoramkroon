import React from "react";

import { Parallax } from "react-scroll-parallax";

import { gnawaMedia } from "./media";

export default function PracexGnawaPageHeader() {
  return (
    <div className="header">
      <video className="bgvideo" muted loop autoPlay>
        <source src={gnawaMedia.Africadelic_PracexBlackKoyo} type="video/mp4" />
      </video>
      <img
        style={{
          width: "100%",
          position: "relative",
          top: "20vw",
        }}
        className="bg"
        id="AtlasElectronic_PracexSattaralSaadiResized2"
        src={gnawaMedia.AtlasElectronic_PracexSattaralSaadiResized2}
        alt=""
      />

      <Parallax className="headertext">
        The<br></br>Gnawa<br></br>Expedition
      </Parallax>
    </div>
  );
}
