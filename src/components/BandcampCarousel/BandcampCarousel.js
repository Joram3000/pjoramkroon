import "./style.css";
import singles from "./singles";

export default function BandcampCarousel() {
  return (
    <div>
      <div className="singletjes">
        {singles.map((single) => (
          <iframe
            key={single.id}
            title={single.title}
            style={{ border: "1", width: "300", height: "300px" }}
            src={single.src}
            seamless
          >
            <a href={single.hRef}>{single.aText}</a>
          </iframe>
        ))}
      </div>
    </div>
  );
}
