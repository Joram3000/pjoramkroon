import "./style.css";
import singles from "./singles";

export default function BandcampCarousel() {
  return (
    <div>
      <div className="ep-style">
        {singles.map((single, i) => (
          <div className="eptje">
            <iframe
              key={i}
              title={single.title}
              style={{ border: "1", width: "300", height: "300px" }}
              src={single.src}
              seamless
            >
              <a href={single.hRef}>{single.aText}</a>
            </iframe>
          </div>
        ))}
      </div>

      <div className="singles-style">
        {singles.map((single, i) => (
          <div className="singletje">
            <iframe
              key={i}
              title={single.title}
              style={{ border: "1", width: "300", height: "300px" }}
              src={single.src}
              seamless
            >
              <a href={single.hRef}>{single.aText}</a>
            </iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
