import { gnawaMedia } from "./media";

export default function PracexGnawaPageAmazighBlues() {
  return (
    <div className="pager AmazighBlues">
      <img
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
        className="bg"
        id="DarGnawa_AmazighBlues"
        src={gnawaMedia.DarGnawa_AmazighBlues}
        alt=""
      />
      <img
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
        className="bg"
        id="DarGnawa_AmazighBluesHark"
        src={gnawaMedia.DarGnawa_AmazighBluesHark}
        alt=""
      />
      <div id="embedAmazigh">
        <iframe
          title="embedAmazigh"
          style={{ border: "0", width: "450px", height: "373px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2256435908/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://amazighblues.bandcamp.com/album/amazigh-blues">
            Amazigh Blues by Amazigh Blues
          </a>
        </iframe>
      </div>
    </div>
  );
}
