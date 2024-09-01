import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "../components/PlayerDetails";
import PlayerControls from "../components/PlayerControls";
import Lyrics from "../components/Lyrics";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeOff, faShuffle } from "@fortawesome/free-solid-svg-icons";
import Preload from "../components/Preload";
import "./Player.css";

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function Player({ songs, currentSongIndex }) {
  const navigate = useNavigate();
  const audioEl = useRef(null);
  const lyricsRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shuffledSongs, setShuffledSongs] = useState([]);
  const [currentSongIndexState, setCurrentSongIndexState] = useState(currentSongIndex);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const currentSong = songs[isShuffling ? shuffledSongs[currentSongIndexState] : currentSongIndexState] || {};
  const nextSongIndex = (currentSongIndexState + 1) % (isShuffling ? shuffledSongs.length : songs.length);
  const nextSong = songs[isShuffling ? shuffledSongs[nextSongIndex] : nextSongIndex] || {};
  
  useEffect(() => {
    if (isShuffling) {
      setShuffledSongs(shuffleArray(songs.map((_, index) => index)));
    }
  }, [isShuffling, songs]);

  useEffect(() => {
    const audio = audioEl.current;
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    if (audioEl.current) {
      isPlaying ? audioEl.current.play() : audioEl.current.pause();
    }
  }, [isPlaying, currentSongIndexState, shuffledSongs]);

  useEffect(() => {
    if (Notification.permission === 'granted') {
      const options = {
        body: `${currentSong.title} by ${currentSong.artist}`,
        actions: [
          { action: 'previous', title: 'Previous' },
          { action: 'next', title: 'Next' },
        ],
        icon: './images/NightVibe.png',
      };
      const notification = new Notification('Now Playing', options);
      notification.onclick = () => console.log('Notification clicked');
    }
  }, [currentSongIndexState]);

  const SkipSong = (forwards = true) => {
    setIsPlaying(false);
    setCurrentSongIndexState((prevIndex) => {
      let newIndex = (prevIndex + (forwards ? 1 : -1) + (isShuffling ? shuffledSongs.length : songs.length)) % (isShuffling ? shuffledSongs.length : songs.length);
      if (isShuffling && newIndex === 0) {
        setShuffledSongs(shuffleArray(songs.map((_, index) => index)));
      }
      return newIndex;
    });
    setIsPlaying(true);
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
  };

  const handleLyricClick = () => {
    lyricsRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollToTop(true);
  };

  const handlePlayerClick = () => {
    playerRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollToTop(false);
  };

  const handleButtonClick = () => showScrollToTop ? handlePlayerClick() : handleLyricClick();

  return (
    <div className="player_conatiner">
      <Preload />
      <div className="player_header flex items-center justify-center w-full" ref={playerRef}>
        <img src="./images/NightVibe.png" className="nightvibe_logo" onClick={() => navigate("/welcome")} />
      </div>
      <audio src={currentSong.src} ref={audioEl} onEnded={() => SkipSong(true)}></audio>
      <div className="h-screen">
        <div className="w-full player_content">
          <div className="player_card">
            <div className="w-full card_header">
              <button className="cursor-pointer ml-2 player_btn" onClick={toggleShuffle}>
                <FontAwesomeIcon icon={faShuffle} className={isShuffling ? "text-blue-500" : "text-gray-500"} />
                {isShuffling ? " Shuffle On" : " Shuffle Off"}
              </button>
            </div>
            <div className="card_media_controller w-full text-center">
              <PlayerDetails song={currentSong} nextSong={nextSong} />
              <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
              <input
                className="song_timeline mb-2"
                type="range"
                min="0"
                max={audioEl.current?.duration || 0}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
              />
              <div className="w-full text-center overflow-hidden">
                <div className="font-medium">Next up:</div>
                <div className="truncate px-4">{nextSong.title || "Unknown"}</div>
                <div className="truncate px-4">by {nextSong.artist || "Unknown"}</div>
              </div>
            </div>
            <div className="card_footer inline-block w-full text-center my-2">
              <FontAwesomeIcon icon={faVolumeOff} className="p-2 align-middle" />
              <input
                className="song_timeline align-middle"
                type="range"
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
          <button className="cursor-pointer player_btn playing" onClick={handleButtonClick}>
            {showScrollToTop ? "Scroll To Top" : "Lyrics"}
          </button>
        </div>
        <Lyrics song={currentSong} />
      </div>
    </div>
  );
}

export default Player;
