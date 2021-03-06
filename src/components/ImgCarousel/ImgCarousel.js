import SimpleImageSlider from "react-simple-image-slider";

const images = [{ url: "../../assets/3.png" }, { url: "../../assets/2.jpeg" }];

export default function ImgCarousel() {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
 