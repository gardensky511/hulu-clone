import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/riseofskywalker-moviepage-emeagrid-m_a2600ffe.jpeg?region=0,0,800,600"
        alt="poster"
        className="videoCard__img"
      />
      <p className="videoCard__desc">description</p>
      <h2 className="videoCard__title">Movie title</h2>
      <p className="videoCard__likes">number of likes</p>
    </div>
  );
}

export default VideoCard;
