import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParallax } from "react-scroll-parallax";
import { Parallax, Background } from "react-parallax";

import "./style.css";

import Africadelic_PracexBlackKoyo from "../../assets/GnawaExploration/Africadelic_PracexBlackKoyo.mp4";
import AtlasElectronic_PracexSattaralSaadiResized from "../../assets/GnawaExploration/AtlasElectronic_PracexSattaralSaadiResized.png";
import AtlasElectronic_2016II from "../../assets/GnawaExploration/AtlasElectronic_2016II.jpeg";
import Sahara_Prace from "../../assets/GnawaExploration/Sahara_Prace.mp4";
import DarGnawa_Talking from "../../assets/GnawaExploration/DarGnawa_Talking.jpeg";

export default function PracexGnawa() {
  return (
    <div className="dikzak">
      <div className="pager" id="pager1">
        <video
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

        <p className="floaty" id="headorr">
          The <br></br>
          Gnawa <br></br>
          Exploration
        </p>
      </div>

      <div className="pager">
        <img
          style={{ width: "100%", height: "100%" }}
          id="AtlasElectronic_PracexSattaralSaadiResized"
          src={AtlasElectronic_PracexSattaralSaadiResized}
          alt="AtlasElectronic_PracexSattaralSaadiResized"
        />

        <p
          className="floaty"
          style={{
            fontSize: "4vw",
            display: "flex",
            justifyContent: "right",
          }}
        >
          In 2017 me and Sattar al Saadi were invited to play at the Atlas
          Electronic Festival in Marrakech.
        </p>
      </div>

      <div className="pager"></div>
      <img
        id="AtlasElectronic_2016II"
        src={AtlasElectronic_2016II}
        alt="AtlasElectronic_2016II"
      />

      <div className="pager">
        <video
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

      <div className="pager">
        <img
          id="DarGnawa_Talking"
          src={DarGnawa_Talking}
          alt="DarGnawa_Talking"
        />
      </div>
    </div>
  );
}

// <div>
//     <div className="pager">

//       <h1 id="heador">
//
//       </h1>
//     </div>

//     <div className="pager">

//     </div>

//     <div className="pager">
//
//     </div>

//   </div>
