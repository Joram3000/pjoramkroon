import "./style.css";
import singles from "./singles";

import React from "react";
import ReactDOM from "react-dom";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import "../sidescrolcomp/hideScrollbar.css";

function onWheel(apiObj: scrollVisibilityApiType, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default function BandcampCarousel() {
  return (
    <div className="bandcampcarrousel">
      <p>SINGOLTJES</p>
      <ScrollMenu onWheel={onWheel}>
        <div className="singletjes">
          {singles.map((single) => (
            <iframe
              key={single.id}
              title={single.title}
              style={{
                backgroundColor: "brown",
                padding: "0.5vw",
                width: "20vw",
                height: "20vw",
              }}
              src={single.src}
              seamless
            >
              <a href={single.hRef}>{single.aText}</a>
            </iframe>
          ))}
        </div>
      </ScrollMenu>
    </div>
  );
}

ReactDOM.render(<BandcampCarousel />, document.getElementById("root"));
