import { Parallax } from "react-scroll-parallax";

import { gnawaMedia } from "./media";

export default function PracexGnawaPageIntoSahara() {
  return (
    <div className="pager intoSaharapage">
      <div id="intoSaharatextbox">
        <p>
          hier staat text het mag wel wat meer zijn maar hoeft niet meer zijn
          maar hoeft niet meer zijn maar hoeft niet meer zijn maar hoeft niet
          persee
          <br></br>
          hier staat text het mag wel wat meer zijn maar hoeft niet persee
        </p>
      </div>

      <video className="bgvideosahara" muted loop autoPlay id="Sahara_Prace">
        <source src={gnawaMedia.Sahara_Prace} type="video/mp4" />
      </video>

      <Parallax id="intoSahara">SO I WENT INTO THE SAHARA</Parallax>
    </div>
  );
}
