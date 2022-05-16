import "./style.css";
import React, { useState } from "react";

export default function SingleCarousel() {
  const [singles, setSingles] = useState([
    {
      title: "Bayeke",
      src: "https://bandcamp.com/EmbeddedPlayer/album=4049309442/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1545093390/transparent=true/",
      href: "https://afriquoi.bandcamp.com/album/time-is-a-gift-which-we-share-all-the-time-remixed",
      aText: "Time is A Gift Which We Share All The Time - Remixed by Afriquoi",
    },
    {
      title: "LetsGetReady",
      src: "https://bandcamp.com/EmbeddedPlayer/track=2872430859/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/",
      href: "https://pracemusic.bandcamp.com/track/prace-ft-marlon-penn-lets-get-ready",
      aText: "Prace ft Marlon Penn - Let&#39;s get ready by PRACE",
    },
  ]);

  console.log(singles);

  return (
    <div>
      <iframe
        title="bayeke"
        style={{ border: "0", width: "350px", height: "350px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=4049309442/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1545093390/transparent=true/"
        seamless
      >
        <a href="https://afriquoi.bandcamp.com/album/time-is-a-gift-which-we-share-all-the-time-remixed">
          Time is A Gift Which We Share All The Time - Remixed by Afriquoi
        </a>
      </iframe>
    </div>
  );
}
