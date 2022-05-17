import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GX030755 from "../../assets/GX030755.mp4";

export default function PracexGnawa() {
  return (
    <div className="backgroundstuff">
      <video muted loop autoPlay id="GX030755">
        <source src={GX030755} type="video/mp4" />
      </video>
    </div>
  );
}
