import plaatje from "../../assets/2.jpeg";
import plaatje2 from "../../assets/5.jpeg";
import nogeenplaatje from "../../assets/3.png";

import BandcampCarousel from "../../components/BandcampCarousel/BandcampCarousel";

export default function Homepage() {
  return (
    <div>
      <p>lorem ipsum all the way</p>
      <img src={plaatje} alt="hondelul" />
      <img src={nogeenplaatje} alt="hondelul" />
      <img src={plaatje2} alt="donkes" />

      <BandcampCarousel />
    </div>
  );
}
