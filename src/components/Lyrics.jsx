import React from "react";
import "./Lyrics.css";

function Lyrics(props) {
  const formattedLyrics = props.song.Lyrics.split('\n').map((line, index) => (
    <div key={index}>
      {line}
      <br />
    </div>
  ));

  return (
    <div className="lyrics_container pb-5">
      <div className="lyrics_content">
        <h1 className="lyrics_title pt-3 pb-2">Lyrics</h1>
        <h1 className="song_title pb-3">{props.song.title}</h1>
        <h2 className="song_lyrics">{formattedLyrics}</h2>
      </div>
    </div>
  );
}

export default Lyrics;
