import React from "react";
import { render } from "react-dom";
import { useParallax } from "react-scroll-parallax";
import { Parallax, Background } from "react-parallax";
import image2 from "../../assets/pracexgnawablackkoyocouleurcafe.jpeg";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  border: "4px dotted orange",
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

export default function Parallaxtest() {
  const SlowAndFast = () => (
    <>
      <Parallax speed={-5}>
        <div className="slow" />
      </Parallax>
      <Parallax speed={5}>
        <div className="fast" />
      </Parallax>
    </>
  );

  return (
    <div>
      <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Dynamic Blur</div>
        </div>
      </Parallax>

      <SlowAndFast />

      <Parallax strength={500}>
        <div>
          <div style={insideStyles}>
            <p>hallo dikke ballo</p>
          </div>
        </div>
      </Parallax>
      <Parallax speed={-800}>
        <div>hallo dikke </div>
      </Parallax>

      <Parallax bgImage={image2} strength={-100}>
        <div style={{ height: 1080, width: "100%" }}>
          <div style={insideStyles}>
            Reverse direction so here i can write everything i want whatever it
            is and you know get on with it
          </div>
        </div>
      </Parallax>
    </div>
  );
}
