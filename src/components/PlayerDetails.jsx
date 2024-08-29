import React from "react";
import "./PlayerDetails.css";

function PlayerDetails(props) {
  return (
    <div className="player_details text-center">
      <img
        className="player_song_image mb-4"
        src={props.song.img_src}
        alt={`${props.song.title} cover`}
      />
      <h3 className="player_song_title truncate px-4">{props.song.title}</h3>
      <h4 className="player_song_artist truncate px-5">{props.song.artist}</h4>
    </div>
  );
}

export default PlayerDetails;
