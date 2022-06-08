var React = require("react");

export default function PracexGnawaPageSliderCarr() {
  return (
    <div className="pagert showsScrollerbox">
      <p>LIVE SETS & PERFORMANCES</p>

      <div className="scrollerbox">
        <div className="scollerboxitem">
          <div className="showTextBox">
            <p>Performance at Yallah Yallah</p>
            <p>Tweetakt Festival, Neude Utrecht 2019</p>
          </div>

          <div className="mediabox">HOI IK BEN EEN MEDIADOOS</div>
        </div>

        <div className="scollerboxitem">
          <div className="showTextBox">
            <p>With Maallem Hassan for Dancing On The Edge Festival</p>
            <p>Pllek, Amsterdam 2019</p>
          </div>

          <div className="mediabox">HOI IK BEN EEN DOOS</div>
        </div>

        <div className="scollerboxitem">
          <p>With de Black Koyo Group from Brussel</p>
          <p>Couleur Café 2019</p>
          <p>Africadelic festival 2020</p>

          <div className="mediabox">HOI IK BEN EEN DOOS</div>
        </div>
        <div className="scollerboxitem">
          <p>Other performances</p>

          <ul>
            <li>Convoi de Fete (Nijverheid, Utrecht)</li>
            <li>Rarara (Filmcafe Utrecht)</li>
            <li>Buurland Afterparty (Filmcafe Utrecht)</li>
            <li>Djemaa el Fna Festival (Rotterdam) and more...</li>
          </ul>

          <div className="mediabox">HOI IK BEN EEN DOOS</div>
        </div>
      </div>
    </div>
  );
}
