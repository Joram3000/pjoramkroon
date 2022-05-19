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
        strength={-900}
      >
        Blur transition from min to max
        <div style={{ height: "1080px" }} />
      </Parallax>

      <div id="overflowtje">
        As you can see, once there's enough text in this box, the box will grow
        scroll bars... that's why we call it a scroll box! You could also place
        an image into the scroll box. scroll bars... that's why we call it a
        scroll box! You could also place an image into the scroll box. scroll
        bars... that's why we call it a scroll box! You could also place an
        image into the scroll box. scroll bars... that's why we call it a scroll
        box! You could also place an image into the scroll box.
      </div>

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
