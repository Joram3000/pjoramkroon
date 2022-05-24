import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import { Element } from "parallax-controller";
import { Parallax } from "react-scroll-parallax";

export default function Paraslidelight() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "darkgrey",

          display: "flex",
          flexDirection: "row",
          width: "600vw",
          position: "absolute",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            width: "100vw",
            height: "calc(100vh - 56px)",
            border: "1px solid black",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "darkgreen",
            width: "100vw",

            border: "1px solid black",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "greenyellow",
            width: "100vw",

            border: "1px solid black",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "lightgreen",
            width: "100vw",

            border: "1px solid black",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "forestgreen",
            width: "100vw",

            border: "1px solid black",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "lime    ",
            width: "100vw",

            border: "1px solid black",
          }}
        ></div>
      </div>

      <div
        style={{
          backgroundColor: "red",
          width: "50px",
          height: "50px",
          border: "1px solid black",
          position: "absolute",

          left: "350px",
          top: "350px",
        }}
      >
        RED
      </div>
      <div
        style={{
          backgroundColor: "tomato",
          width: "50px",
          height: "50px",
          border: "1px solid black",
          position: "absolute",

          left: "550px",
          top: "450px",
          overflow: "hidden",
        }}
      >
        DARKRED
      </div>

      <Container
        className="Parallax-module__elementsHorizontal--WeqQZ"
        scrollAxis="horizontal"
      >
        <Parallax
          className="Parallax-module__parallax--skrA3"
          translateX={["-50%", "50%"]}
        >
          <Element name="1" />
        </Parallax>
        <Parallax
          className="Parallax-module__parallax--skrA3"
          translateX={["50%", "-50%"]}
        >
          <Element name="2" />
        </Parallax>
      </Container>
    </div>
  );
}
