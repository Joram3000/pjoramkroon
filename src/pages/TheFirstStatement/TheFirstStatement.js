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
    <div>
      <div className="backgroundImg">
        <img src={DSCN0094} alt="plaatje1" />

        {/* <img src={DSCN0105} alt="plaatje2" />
        <img src={DSCN0109} alt="plaatje3" />
        <img src={DSCN0124} alt="plaatje1" /> */}
      </div>

      <div className="textBlokkie">
        <h1>The First Statement: a musical panorama of the Middle East</h1>
        <h4>
          back in 2010 Joram Kroon was exploring traditional Indian Music. by
          coincidence he found himself in Israel and the West-bank. Then he
          discovered the similarities between Arabic music and Indian Carnatic
          music and he started to appreciate and study the Arabic culture.
        </h4>
      </div>

      <div className="textBlokkie2">
        <p>
          here is some text, let's see whats happening next in the beginning
          there was this and that and zus and zothere was this and that and zus
          and zothere was this and that and zus and zothere was this and that
          and zus and zothere <br></br> <br></br>was this and that and zus and
          zothere was this and that and zus and zothere was this and that and
          zus and zo here is some text, let's see whats happening next in the
          beginning there was this and that and zus and zothere was this and
          that and zus and zothere was this and that and zus and zothere was
          this and that and zus and zothere was this and that and zus and
          zothere was this and that and zus and zothere was this and that and
          zus and zo here is some text, let's see whats happening next in the
          beginning there was this and
          <br></br> <br></br>
          that and zus and zothere was this and that and zus and zothere was
          this and that and zus and zothere was this and that and zus and
          zothere was this and that and zus and zother<br></br> <br></br>e was
          this and that and zus and zothere was this and that and zus and zo
          here is some text, let's see whats happening next in the beginning
          there was this and that and zus and zothere was this and that{" "}
          <br></br> <br></br>and zus and zothere was this and that and zus and
          zothere was this and that and zus and zothere was this and that and
          zus and zothere was this and that and zus and zothere was <br></br>{" "}
          <br></br>his and that and zus and zo here is some text, let's see
          whats happening next in the beginning there was this and that and zus
          and zothere was this and that and zus and zothere was this and that
          and zus and zothere was this and that and zus and zothe<br></br>{" "}
          <br></br>sre was this and that and zus and zothere was this and that
          and zus and zothere was this and that and zus and zo
        </p>
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

      <div className="inspectionPoint">
        <img
          style={{ width: "300px", height: "300px" }}
          title="inspectionPoint"
          src={inspectionpoint}
          alt="inspectionpoint"
        />
      </div>

      <div className="tfsPrace">
        <img title="tfsPrace" src={tfsprace} alt="tfsprace" />
      </div>
    </div>
  );
}
