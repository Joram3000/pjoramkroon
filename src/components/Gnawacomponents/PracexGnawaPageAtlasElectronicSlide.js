import { gnawaMedia } from "./media";

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
        src={gnawaMedia.AtlasElectronic_2016II}
        alt=""
      />

      <img
        style={{
          width: "100%",
        }}
        className="bg"
        id="AtlasElectronic_2018krkb"
        src={gnawaMedia.AtlasElectronic_2018krkb}
        alt=""
      />

      <img
        style={{
          width: "100%",
        }}
        className="bg"
        id="AtlasElectronic_2018gimbri"
        src={gnawaMedia.AtlasElectronic_2018gimbri}
        alt=""
      />

      <img
        style={{
          width: "100%",
        }}
        className="bg"
        id="AtlasElectronic_2018zaal"
        src={gnawaMedia.AtlasElectronic_2018zaal}
        alt=""
      />
    </div>
  );
}
