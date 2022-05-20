import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParallax, Parallax } from "react-scroll-parallax";
import "./style.css";

import DSCN0094 from "../../assets/DSCN0094p.png";
import DSCN0105 from "../../assets/DSCN0105.jpg";
import DSCN0109 from "../../assets/DSCN0109.jpg";
import DSCN0124 from "../../assets/DSCN0124.jpg";

import tfsprace from "../../assets/tfsprace.png";
import inspectionpoint from "../../assets/inspectionpoint.png";

export default function TheFirstStatementpage() {
  return (
    <div className="wholepagetfs">
      <div className="pagetfs" id="tfsp1">
        <img src={DSCN0109} alt="bg" id="bg" />

        <div className="textbox">hoi</div>
      </div>

      <div className="pagetfs" id="tfsp2">
        <img src={DSCN0105} alt="bg" id="bg" />
      </div>

      <div className="bandcampEmbed">
        <iframe
          title="bandcampplayer"
          style={{ border: "0", width: "400px", height: "472px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2125252706/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://pracemusic.bandcamp.com/album/the-first-statement">
            The First Statement by PRACE
          </a>
        </iframe>
      </div>

      <img title="tfsPrace" src={tfsprace} alt="tfsprace" id="tfsPrace" />

      
      <div className="pagetfs" id="tfsp3">
        <img src={DSCN0124} alt="bg" id="bg" />

        <div className="scrollbox">
          <h2>nergens over gaat </h2>
          <p>
            dit is een enorme lap text die nergens over gaat dit is een enorme
            lap text die nergens over gaat dit is een enorme lap text die
            nergens over gaat dit is een enorme lap text die nergens over gaat
            dit is een enorme lap text die nergens over gaat dit is een enorme
            lap text die nergens over gaat dit is een enorme lap text die
          </p>
          <br></br>
          <br></br>
          <h2>nergens over gaat </h2>
          <p>
            dit is een enorme lap text die nergens over gaat dit is een enorme
            lap text die nergens over gaat dit is een enorme lap text die
            nergens over gaat dit is een enorme lap text die nergens over gaat
            dit is een enorme lap text die nergens over gaat dit is een enorme
            lap text die nergens over gaat dit is een enorme lap text die
            nergens over gaat di{" "}
          </p>
          <br></br>
          <br></br>
          <h2>nergens over gaat </h2>
          <p>
            t is een enorme lap text die nergens over gaat dit is een enorme lap
            text die nergens over gaat dit is een enorme lap text die nergens
            over gaat dit is een enorme lap text die nergens over gaat dit is
            een enorme lap text die nergens over gaat dit is een enorme lap text
            die nergens over gaat dit is een enorme lap text die nergens over
            gaat dit is een enorme lap text die nergens over gaat dit is een
            enorme lap text die nergens over gaat dit is een enorme lap text die
            nergens over gaat dit is een enorme lap text die nergens over gaat
            dit is een enorme lap text die nergens over gaat
          </p>
        </div>
      </div>

      {/* 
        

        <div className="inspectionPoint">
          <img
            style={{ width: "300px", height: "300px" }}
            title="inspectionPoint"
            src={inspectionpoint}
            alt="inspectionpoint"
          />
        </div>
</div>
  */}
    </div>
  );
}
