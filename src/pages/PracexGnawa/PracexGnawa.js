import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParallax } from "react-scroll-parallax";
import { Parallax, Background } from "react-parallax";

import "./style.css";

import Africadelic_PracexBlackKoyo from "../../assets/GnawaExploration/Africadelic_PracexBlackKoyo.mp4";
import AtlasElectronic_PracexSattaralSaadi from "../../assets/GnawaExploration/AtlasElectronic_PracexSattaralSaadi.png";
import AtlasElectronic_2016II from "../../assets/GnawaExploration/AtlasElectronic_2016II.jpeg";
import Sahara_Prace from "../../assets/GnawaExploration/Sahara_Prace.mp4";
import DarGnawa_Talking from "../../assets/GnawaExploration/DarGnawa_Talking.jpeg";

export default function PracexGnawa() {
  return (
    <div>
      <div className="pager">
        <video
          style={{
            width: "100%",
            marginBottom: "-6px",
            position: "relative",
          }}
          muted
          loop
          autoPlay
          id="Africadelic_PracexBlackKoyo"
        >
          <source src={Africadelic_PracexBlackKoyo} type="video/mp4" />
        </video>

        <h1
          style={{
            position: "absolute",
            alignItems: "center",
          }}
        >
          HALLO
        </h1>
      </div>

      <div className="pager">
        <img
          style={{ backgroundColor: "blue", width: "100%", height: "100%" }}
          id="AtlasElectronic_PracexSattaralSaadi"
          src={AtlasElectronic_PracexSattaralSaadi}
          alt="AtlasElectronic_PracexSattaralSaadi"
        />
      </div>

      <div className="pager">
        <img
          style={{ width: "100%", height: "100%" }}
          id="AtlasElectronic_2016II"
          src={AtlasElectronic_2016II}
          alt="AtlasElectronic_2016II"
        />
      </div>

      <div className="pager">
        <video
          style={{
            width: "100%",
            marginBottom: "-6px",
          }}
          muted
          loop
          autoPlay
          id="Sahara_Prace"
        >
          <source src={Sahara_Prace} type="video/mp4" />
        </video>
      </div>

      <div className="pager">
        <img
          style={{ width: "100%", height: "100%" }}
          id="DarGnawa_Talking"
          src={DarGnawa_Talking}
          alt="DarGnawa_Talking"
        />
      </div>
    </div>
  );
}
