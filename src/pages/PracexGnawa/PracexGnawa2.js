import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParallax } from "react-scroll-parallax";
import { Background } from "react-parallax";

import Sidescrollcomp from "../../components/sidescrolcomp/sidescrollcomp";

import { Parallax } from "react-scroll-parallax";

import "./style.css";

import Africadelic_PracexBlackKoyo from "../../assets/GnawaExploration/Africadelic_PracexBlackKoyo.mp4";
import AtlasElectronic_PracexSattaralSaadiResized2 from "../../assets/GnawaExploration/AtlasElectronic_PracexSattaralSaadiResized3.png";
import AtlasElectronic_2016II from "../../assets/GnawaExploration/AtlasElectronic_2016II.jpeg";
import AtlasElectronic_2018krkb from "../../assets/GnawaExploration/AtlasElectronic_2018krkb.jpeg";
import AtlasElectronic_2018gimbri from "../../assets/GnawaExploration/14290035_532664846926099_8116276477418946410_o.jpeg";
import AtlasElectronic_2018zaal from "../../assets/GnawaExploration/14372389_532664233592827_5396893453420820056_o.jpeg";

import Sahara_Prace from "../../assets/GnawaExploration/Sahara_Prace.mp4";
import DarGnawa_Talking from "../../assets/GnawaExploration/DarGnawa_Talking.jpeg";
import DarGnawa_Abdoul from "../../assets/GnawaExploration/DarGnawa_Abdoul.jpg";

import DarGnawa_AmazighBlues from "../../assets/GnawaExploration/DarGnawa_AmazighBlues.JPG";
import DarGnawa_AmazighBluesHark from "../../assets/GnawaExploration/DarGnawa_AmazighBluesHark.JPG";

export default function PracexGnawa() {
  return (
    <div className="wholepager">
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

      <div className="pager">
        <div id="Aetextbox">
          hoi allemaal <br></br> hier zou een heel leuk textkje kunnen staan,
          maar dat staat er niet <br></br>
          oké doei!
        </div>

        <img
          style={{
            width: "100%",
          }}
          className="bg"
          id="AtlasElectronic_2016II"
          src={AtlasElectronic_2016II}
          alt=""
        />

        <img
          style={{
            width: "100%",
          }}
          className="bg"
          id="AtlasElectronic_2018krkb"
          src={AtlasElectronic_2018krkb}
          alt=""
        />

        <img
          style={{
            width: "100%",
          }}
          className="bg"
          id="AtlasElectronic_2018gimbri"
          src={AtlasElectronic_2018gimbri}
          alt=""
        />

        <img
          style={{
            width: "100%",
          }}
          className="bg"
          id="AtlasElectronic_2018zaal"
          src={AtlasElectronic_2018zaal}
          alt=""
        />
      </div>

      <div className="pager">
        <video className="bgvideosahara" muted loop autoPlay id="Sahara_Prace">
          <source src={Sahara_Prace} type="video/mp4" />
        </video>

        <Parallax id="intoSahara">SO I WENT INTO THE SAHARA</Parallax>
      </div>

      <div className="pager">
        <img
          style={{
            width: "100%",
          }}
          className="bg"
          id="DarGnawa_Talking"
          src={DarGnawa_Talking}
          alt=""
        />

        <div style={{ position: "absolute", zIndex: "12" }}>
          <p>hier staat text</p>
        </div>

        <div id="dargnawatextbox">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          hoi allemaal <br></br> hier zou een heel leuk textkje kunnen staan,
          maar dat staat er niet <br></br>
          oké doei! <br></br>
          hoi allemaal <br></br> hier zou een heel leuk textkje kunnen staan,
          maar dat staat er niet <br></br>
          oké doei! <br></br>
          hoi allemaal <br></br> hier zou een heel leuk textkje kunnen staan,
          maar dat staat er niet <br></br>
          oké doei! <br></br>
          hoi allemaal <br></br> hier zou een heel leuk textkje kunnen staan,
          maar dat staat er niet <br></br>
          oké doei! <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <img
          style={{
            width: "100%",
          }}
          className="bg"
          id="DarGnawa_Abdoul"
          src={DarGnawa_Abdoul}
          alt=""
        />
      </div>

      <div className="pager">
        <img
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
          className="bg"
          id="DarGnawa_AmazighBlues"
          src={DarGnawa_AmazighBlues}
          alt=""
        />
        <img
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
          className="bg"
          id="DarGnawa_AmazighBluesHark"
          src={DarGnawa_AmazighBluesHark}
          alt=""
        />

        <div id="embedAmazigh">
          <iframe
            title="embedAmazigh"
            style={{ border: "0", width: "450px", height: "373px" }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2256435908/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://amazighblues.bandcamp.com/album/amazigh-blues">
              Amazigh Blues by Amazigh Blues
            </a>
          </iframe>
        </div>
      </div>

      {/* <div className="pager">
      

position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


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
    </div>
  );
}
