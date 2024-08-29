import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "../components/PlayerDetails";
import PlayerControls from "../components/PlayerControls";
import Lyrics from "../components/Lyrics";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeHigh,
  faVolumeOff,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import Preload from "../components/Preload";
import "./Player.css";

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function Player(props) {
  const navigate = useNavigate();
  const audioEl = useRef(null);
  const lyricsRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shuffledSongs, setShuffledSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(
    props.currentSongIndex
  );
  const [batchSize] = useState(10);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    if (isShuffling) {
      const newShuffledSongs = shuffleArray(
        props.songs.map((_, index) => index)
      );
      setShuffledSongs(newShuffledSongs.slice(0, batchSize));
    }
  }, [isShuffling, props.songs, batchSize]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audioEl.current.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audioEl.current.duration);
    };

    if (audioEl.current) {
      audioEl.current.addEventListener("timeupdate", handleTimeUpdate);
      audioEl.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (audioEl.current) {
        audioEl.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioEl.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying, props.currentSongIndex, shuffledSongs, currentSongIndex]);

  const SkipSong = (forwards = true) => {
    let flag = 0;
    if(isPlaying === true){
      setIsPlaying(false)
      flag = 1;
    }
    if (isShuffling) {
      setCurrentSongIndex((prevIndex) => {
        let newIndex =
          (prevIndex + (forwards ? 1 : -1) + shuffledSongs.length) %
          shuffledSongs.length;
        if (newIndex === 0) {
          const newShuffledSongs = shuffleArray(
            props.songs.map((_, index) => index)
          ).slice(0, batchSize);
          setShuffledSongs(newShuffledSongs);
        }
        return newIndex;
      });
    } else {
      setCurrentSongIndex((prevIndex) => {
        let newIndex =
          (prevIndex + (forwards ? 1 : -1) + props.songs.length) %
          props.songs.length;
        return newIndex;
      });
    }
    if(flag === 1){
      setIsPlaying(true)
    }
  };

  const handleSeek = (event) => {
    const newTime = parseFloat(event.target.value);
    audioEl.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioEl.current.volume = newVolume;
  };

  const toggleShuffle = () => {
    setIsPlaying(false);
    setIsShuffling((prev) => !prev);
    if (!isShuffling) {
      const newShuffledSongs = shuffleArray(
        props.songs.map((_, index) => index)
      ).slice(0, batchSize);
      setShuffledSongs(newShuffledSongs);
    }
  };

  const handleLyricClick = () => {
    if (lyricsRef.current) {
      lyricsRef.current.scrollIntoView({ behavior: "smooth" });
      setShowScrollToTop(true);
    }
  };

  const handlePlayerClick = () => {
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: "smooth" });
      setShowScrollToTop(false);
    }
  };

  const handleButtonClick = () => {
    if (showScrollToTop) {
      handlePlayerClick();
    } else {
      handleLyricClick();
    }
  };

  const currentSong =
    props.songs[
      isShuffling ? shuffledSongs[currentSongIndex] : currentSongIndex
    ] || {};
  const nextSongIndex =
    (currentSongIndex + 1) %
    (isShuffling ? shuffledSongs.length : props.songs.length);
  const nextSong =
    props.songs[isShuffling ? shuffledSongs[nextSongIndex] : nextSongIndex] ||
    {};

  return (
    <div className="player_conatiner">
      <Preload />
      <div
        className="player_header flex items-center justify-center w-full"
        ref={playerRef}
      >
        <img
          src="./images/NightVibe.png"
          className="nightvibe_logo"
          onClick={() => {
            navigate("/welcome");
          }}
        />
        <audio
          src={currentSong.src}
          ref={audioEl}
          duration={duration}
          onEnded={() => SkipSong(true)}
        ></audio>
      </div>
      <div className="h-screen">
        <div className="w-full player_content">
          <div className="player_card">
            <div className="w-full card_header">
              <button
                className="cursor-pointer ml-2 player_btn"
                onClick={toggleShuffle}
              >
                <FontAwesomeIcon
                  icon={faShuffle}
                  className={isShuffling ? "text-blue-500" : "text-gray-500"}
                />
                {isShuffling ? " Shuffle On" : " Shuffle Off"}
              </button>
            </div>
            <div className="card_media_controller w-full text-center">
              <PlayerDetails song={currentSong} nextSong={nextSong} />
              <PlayerControls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
              />
              <input
                className="song_timeline mb-2"
                type="range"
                id="seek"
                name="seek"
                min="0"
                max={audioEl.current ? audioEl.current.duration : 0}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
              />
              <div className="w-full text-center overflow-hidden">
                <div className="font-medium">Next up:</div>
                <div className="truncate px-4">
                  {nextSong.title || "Unknown"}
                </div>
                <div className="truncate px-4">
                  by {nextSong.artist || "Unknown"}
                </div>
              </div>
            </div>
            <div className="card_footer inline-block w-full text-center my-2">
              <FontAwesomeIcon icon={faVolumeOff} className="p-2 align-middle" />
              <input
                className="song_timeline align-middle"
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
              <FontAwesomeIcon icon={faVolumeHigh} className="p-2 align-middle" />
            </div>
          </div>
        </div>
      </div>
      <div ref={lyricsRef} className="player_lyrics_content">
        <div className="flex w-full p-2">
          <button
            className="cursor-pointer player_btn playing"
            onClick={handleButtonClick}
          >
            {showScrollToTop ? "Scroll To Top" : "Lyrics"}
          </button>
        </div>
        <Lyrics song={currentSong} />
      </div>
    </div>
  );
}

export default Player;
