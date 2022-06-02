import { Parallax } from "react-scroll-parallax";

import Sahara_Prace from "../../assets/GnawaExploration/Sahara_Prace.mp4";

export default function PracexGnawaPageIntoSahara() {
  return (
    <div className="pager">
      <video className="bgvideosahara" muted loop autoPlay id="Sahara_Prace">
        <source src={Sahara_Prace} type="video/mp4" />
      </video>

      <Parallax id="intoSahara">SO I WENT INTO THE SAHARA</Parallax>
    </div>
  );
}
