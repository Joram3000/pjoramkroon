import DarGnawa_Talking from "../../assets/GnawaExploration/DarGnawa_Talking.jpeg";
import DarGnawa_Abdoul from "../../assets/GnawaExploration/DarGnawa_Abdoul.jpg";

export default function PracexGnawaPageDarGnawa() {
  return (
    <div className="pager">
      <img
        style={{
          width: "100%",
        }}
        className="bg"
        id="DarGnawa_Talking"
        src={DarGnawa_Talking}
        alt=""
      />

      <div style={{ position: "absolute", zIndex: "12" }}>
        <p>hier staat text</p>
      </div>

      <div id="dargnawatextbox">
        <br></br>
        <iframe
          title="dargnawafb"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPrace.music%2Fvideos%2F493019624764675%2F&show_text=false&width=476&t=0"
          width="100%"
          height="75%"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        ></iframe>
        hoi allemaal <br></br> hier zou een heel leuk textkje kunnen staan, maar
        dat staat er niet <br></br>
        oké doei! <br></br>
        hoi allemaal <br></br> hier zou een heel leuk textkje kunnen staan, maar
        dat staat er niet <br></br>
        oké doei! <br></br>
        hoi allemaal <br></br> hier zou een heel leuk textkje kunnen staan, maar
        dat staat er niet <br></br>
        oké doei! <br></br>
        hoi allemaal <br></br> hier zou een heel leuk textkje kunnen staan, maar
        dat staat er niet <br></br>
        oké doei! <br></br>
      </div>

      <img
        style={{
          width: "100%",
        }}
        className="bg"
        id="DarGnawa_Abdoul"
        src={DarGnawa_Abdoul}
        alt=""
      />
    </div>
  );
}
