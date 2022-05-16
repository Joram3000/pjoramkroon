import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";

import DSCN0094 from "../../assets/DSCN0094.jpg";
import DSCN0105 from "../../assets/DSCN0105.jpg";
import DSCN0109 from "../../assets/DSCN0109.jpg";

import tfsprace from "../../assets/tfsprace.png";

export default function TheFirstStatementpage() {
  return (
    <div>
      <div className="backgroundImg">
        <img src={DSCN0094} alt="plaatje1" />

        <img src={DSCN0105} alt="plaatje2" />
        <img src={DSCN0109} alt="plaatje3" />
      </div>

      <div className="textBlokkie">
        <p>
          here is some text, let's see whats happening next in the beginning
          there was this and that and zus and zo
        </p>
      </div>

      <div className="textBlokkie2">
        <p>
          here is some text, let's see whats happening next in the beginning
          there was this and that and zus and zothere was<br></br> this and that
          and zus and zothere was this and that and zus and zothere was this and
          that and zus and zothere was this and that and zus and
          <br></br>zothere was this and that and zus and zothere was this and
          that and zus and zo
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

      <div className="tfsPrace">
        <img title="tfsPrace" src={tfsprace} alt="tfsprace" />
      </div>
    </div>
  );
}
