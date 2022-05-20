import React from "react";
import ReactDOM from "react-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import wyfr1 from "../../assets/wyfr1.png";
import wyfr2 from "../../assets/wyfr2.png";
import wyfr3 from "../../assets/wyfr3.png";
import wyfr4 from "../../assets/wyfr4.png";
import wyfr5 from "../../assets/wyfr5.png";

import "./hideScrollbar.css";
// import "./firstItemMargin.css";

const elemPrefix = "test";
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function Sidescrollcomp() {
  const [items] = React.useState(getItems);

  return (
    <>
      <div className="example">
        <div>
          <ScrollMenu onWheel={onWheel}>
            <img src={wyfr1} alt="bg" id="scrl" />
            <img src={wyfr2} alt="bg" id="scrl" />
            <img src={wyfr3} alt="bg" id="scrl" />
            <img src={wyfr4} alt="bg" id="scrl" />
            <img src={wyfr5} alt="bg" id="scrl" />
            <img src={wyfr1} alt="bg" id="scrl" />
            <img src={wyfr2} alt="bg" id="scrl" />
            <img src={wyfr3} alt="bg" id="scrl" />
            <img src={wyfr4} alt="bg" id="scrl" />
            <img src={wyfr5} alt="bg" id="scrl" />
          </ScrollMenu>

          <ScrollMenu onScroll={true}>
            <img src={wyfr1} alt="bg" id="scrl" />
            <img src={wyfr2} alt="bg" id="scrl" />
            <img src={wyfr3} alt="bg" id="scrl" />
            <img src={wyfr4} alt="bg" id="scrl" />
            <img src={wyfr5} alt="bg" id="scrl" />
            <img src={wyfr1} alt="bg" id="scrl" />
            <img src={wyfr2} alt="bg" id="scrl" />
            <img src={wyfr3} alt="bg" id="scrl" />
            <img src={wyfr4} alt="bg" id="scrl" />
            <img src={wyfr5} alt="bg" id="scrl" />
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default Sidescrollcomp;

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

ReactDOM.render(<Sidescrollcomp />, document.getElementById("root"));
