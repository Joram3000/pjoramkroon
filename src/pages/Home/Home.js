import ImageGallery from "react-image-gallery";

import "./style.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export default function Homepage() {
  return (
    <div className="wholepager">
      <div className="pager">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}
