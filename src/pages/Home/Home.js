import "./style.css";

export default function Homepage() {
  return (
    <div className="wholepager">
      <div className="pager">
        <svg id="mySVG">
          <path
            fill="none"
            stroke="red"
            stroke-width="3"
            id="triangle"
            d="M150 0 L75 200 L225 200 Z"
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
    </div>
  );
}
