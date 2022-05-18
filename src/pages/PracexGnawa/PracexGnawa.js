import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParallax } from "react-scroll-parallax";
import { Parallax, Background } from "react-parallax";

import "./style.css";

import GX030755 from "../../assets/GX030755.mp4";
import pracexgnawablackkoyocouleurcafe from "../../assets/pracexgnawablackkoyocouleurcafe.jpeg";
import kindjes from "../../assets/kindjes.png";

export default function PracexGnawa() {
  return (
    <div>
      <div className="PG1">
        <Parallax>hallo allemaal dikke ballen dermee</Parallax>

        <video
          style={{ width: "100%", height: "100%" }}
          muted
          loop
          autoPlay
          id="GX030755"
        >
          <source src={GX030755} type="video/mp4" />
          bladiebla{" "}
        </video>
      </div>

      <Parallax
        style={{ width: "100%" }}
        bgImage={pracexgnawablackkoyocouleurcafe}
        bgImageAlt="pracexgnawablackkoyocouleurcafe"
        strength={-200}
      >
        Blur transition from min to max
        <div style={{ height: "1080px" }} />
      </Parallax>

      <div className="PG2">
        <p>
          nou en toen gebeurde dit en toen gebeurde dat en toen gebeurde dit en
          toen gebeurde dat hallo allemaal dikke ballen dermee
        </p>

        <img
          style={{ width: "100%", height: "100%" }}
          id="pracexgnawablackkoyocouleurcafe"
          src={pracexgnawablackkoyocouleurcafe}
          alt="pracexgnawablackkoyocouleurcafe"
        />
      </div>
    </div>
  );
}
