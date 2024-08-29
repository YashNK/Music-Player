import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

function PlayerControls(props) {
  return (
    <div className="p-2">
      <button
        className="p-2 w-[50px]"
        onClick={() => props.SkipSong(false)}
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="p-2 w-[50px]"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="p-2 w-[50px]" onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default PlayerControls;
