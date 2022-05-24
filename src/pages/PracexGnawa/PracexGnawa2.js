import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParallax } from "react-scroll-parallax";
import { Parallax, Background } from "react-parallax";

import "./style.css";

import Africadelic_PracexBlackKoyo from "../../assets/GnawaExploration/Africadelic_PracexBlackKoyo.mp4";
import AtlasElectronic_PracexSattaralSaadiResized from "../../assets/GnawaExploration/AtlasElectronic_PracexSattaralSaadiResized.png";
import AtlasElectronic_PracexSattaralSaadiResized2 from "../../assets/GnawaExploration/AtlasElectronic_PracexSattaralSaadiResized3.png";
import AtlasElectronic_2016II from "../../assets/GnawaExploration/AtlasElectronic_2016II.jpeg";
import Sahara_Prace from "../../assets/GnawaExploration/Sahara_Prace.mp4";
import DarGnawa_Talking from "../../assets/GnawaExploration/DarGnawa_Talking.jpeg";

export default function PracexGnawa() {
  return (
    <div className="wholepager">
      <div className="pager header">
        <video
          className="bgvideo"
          style={{
            width: "100%",
          }}
          muted
          loop
          autoPlay
          id="Sahara_Prace"
        >
          <source src={Africadelic_PracexBlackKoyo} type="video/mp4" />
        </video>

        {/* <img
          style={{
            width: "100%",
            position: "absolute",
            transform: "translate(0, 25%)",
          }}
          className="bg"
          id="AtlasElectronic_PracexSattaralSaadiResized2"
          src={AtlasElectronic_PracexSattaralSaadiResized2}
          alt=""
        /> */}
      </div>

      <div style={{ height: "460px" }} className="pager"></div>
      <div className="pager">
        <img
          style={{
            width: "100%",
          }}
          className="bg"
          id="AtlasElectronic_2016II"
          src={AtlasElectronic_2016II}
          alt="AtlasElectronic_2016II"
        />
      </div>

      {/* <div className="pager">
        <p> effe wat text </p>

        <img
          style={{
            width: "100%",
          }}
          className="bg"
          id="AtlasElectronic_PracexSattaralSaadiResized"
          src={AtlasElectronic_PracexSattaralSaadiResized}
          alt="AtlasElectronic_PracexSattaralSaadiResized"
        />
      </div> */}
      <div className="pager"></div>
      <div className="pager">
        <video
          className="bgvideo"
          style={{
            width: "100%",
          }}
          muted
          loop
          autoPlay
          id="Sahara_Prace"
        >
          <source src={Sahara_Prace} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
