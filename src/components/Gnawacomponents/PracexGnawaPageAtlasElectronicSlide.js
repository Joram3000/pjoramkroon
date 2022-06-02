import AtlasElectronic_2016II from "../../assets/GnawaExploration/AtlasElectronic_2016II.jpeg";
import AtlasElectronic_2018krkb from "../../assets/GnawaExploration/AtlasElectronic_2018krkb.jpeg";
import AtlasElectronic_2018gimbri from "../../assets/GnawaExploration/14290035_532664846926099_8116276477418946410_o.jpeg";
import AtlasElectronic_2018zaal from "../../assets/GnawaExploration/14372389_532664233592827_5396893453420820056_o.jpeg";

export default function PracexGnawaPageAtlasElectronicSlide() {
  return (
    <div className="pager AtlasElectronicslide">
      <div id="Aetextbox">
        hoi allemaal <br></br> hier zou een heel leuk textkje kunnen staan, maar
        dat staat er niet <br></br>
        oké doei!
      </div>

      <img
        style={{
          width: "100%",
        }}
        className="bg"
        id="AtlasElectronic_2016II"
        src={AtlasElectronic_2016II}
        alt=""
      />

      <img
        style={{
          width: "100%",
        }}
        className="bg"
        id="AtlasElectronic_2018krkb"
        src={AtlasElectronic_2018krkb}
        alt=""
      />

      <img
        style={{
          width: "100%",
        }}
        className="bg"
        id="AtlasElectronic_2018gimbri"
        src={AtlasElectronic_2018gimbri}
        alt=""
      />

      <img
        style={{
          width: "100%",
        }}
        className="bg"
        id="AtlasElectronic_2018zaal"
        src={AtlasElectronic_2018zaal}
        alt=""
      />
    </div>
  );
}
