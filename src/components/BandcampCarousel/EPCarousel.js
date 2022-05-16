import "./style.css";
import React, { useState } from "react";

export default function EPCarousel() {
  return (
    <div className="dingetjes">
      <iframe
        title="Amazigh"
        style={{ border: "0", width: "350px", height: "600px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=4174013145/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/"
        seamless
      >
        <a href="https://pracemusic.bandcamp.com/album/amazigh-ep">
          Amazigh EP by PRACE
        </a>
      </iframe>
      <iframe
        style={{ width: "350px", height: "800px" }}
        title="tfs"
        src="https://bandcamp.com/EmbeddedPlayer/album=2125252706/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/"
        seamless
      >
        <a href="https://pracemusic.bandcamp.com/album/the-first-statement">
          The First Statement by PRACE
        </a>
      </iframe>

      <iframe
        title="die andere"
        style={{ border: "0", width: "350px", height: "700px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=1480816174/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/"
        seamless
      >
        <a href="https://pracemusic.bandcamp.com/album/trencadis">
          Trencadis by PRACE
        </a>
      </iframe>

      <iframe
        title="opus1"
        style={{ border: "0", width: "350px", height: "555px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2943098670/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/"
        seamless
      >
        <a href="https://pracemusic.bandcamp.com/album/opus-1">
          Opus 1 by PRACE
        </a>
      </iframe>

      <iframe
        title="sis"
        style={{ border: "0", width: "350px", height: "522px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2987643578/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/"
        seamless
      >
        <a href="https://pracemusic.bandcamp.com/album/signatures-in-sound">
          Signatures In Sound by PRACE
        </a>
      </iframe>
    </div>
  );
}
