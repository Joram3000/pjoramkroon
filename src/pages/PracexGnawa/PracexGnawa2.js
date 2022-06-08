import React from "react";

import "./style.css";

import PracexGnawaPageHeader from "../../components/Gnawacomponents/PracexGnawaPageAtlasHeader";
import PracexGnawaPageAtlasElectronicSlide from "../../components/Gnawacomponents/PracexGnawaPageAtlasElectronicSlide";
import PracexGnawaPageDarGnawa from "../../components/Gnawacomponents/PracexGnawaPageDarGnawa";
import PracexGnawaPageIntoSahara from "../../components/Gnawacomponents/PracexGnawaPageIntoSahara";
import PracexGnawaPageAmazighBlues from "../../components/Gnawacomponents/PracexGnawaPageAmazighBlues";
import PracexGnawaPageAmazighEP from "../../components/Gnawacomponents/PracexGnawaPageAmazighEP";
import PracexGnawaPageSliderCarr from "../../components/Gnawacomponents/PracexGnawaPageSliderCarr";

export default function PracexGnawa() {
  return (
    <div className="wholepager">
      <PracexGnawaPageHeader />
      <PracexGnawaPageAtlasElectronicSlide />
      <PracexGnawaPageIntoSahara />

      <PracexGnawaPageDarGnawa />
      <PracexGnawaPageAmazighBlues />
      <PracexGnawaPageAmazighEP />

      <PracexGnawaPageSliderCarr />
    </div>
  );
}
