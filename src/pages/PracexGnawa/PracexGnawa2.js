import React from "react";

import "./style.css";

import PracexGnawaPageHeader from "../../components/Gnawacomponents/PracexGnawaPageAtlasHeader";
import PracexGnawaPageAtlasElectronicSlide from "../../components/Gnawacomponents/PracexGnawaPageAtlasElectronicSlide";
import PracexGnawaPageDarGnawa from "../../components/Gnawacomponents/PracexGnawaPageDarGnawa";
import PracexGnawaPageIntoSahara from "../../components/Gnawacomponents/PracexGnawaPageIntoSahara";
import PracexGnawaPageAmazighBlues from "../../components/Gnawacomponents/PracexGnawaPageAmazighBlues";
import PracexGnawaPageAmazighEP from "../../components/Gnawacomponents/PracexGnawaPageAmazighEP";

export default function PracexGnawa() {
  return (
    <div className="wholepager">
      <PracexGnawaPageHeader />
      <PracexGnawaPageAtlasElectronicSlide />
      <PracexGnawaPageIntoSahara />
      <PracexGnawaPageDarGnawa />
      <PracexGnawaPageAmazighBlues />
      <PracexGnawaPageAmazighEP />

      <div className="pager shows">
        <div className="scrollerbox">
          <div className="scollerboxitem">TWEETAKT 6 APR</div>
          <div className="scollerboxitem">PLLEK MAALLEM</div>
          <div className="scollerboxitem">BLACK KOYO GNAWA</div>
          <div className="scollerboxitem">Sterkte verhaalte</div>
        </div>
      </div>
    </div>
  );
}
