import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter }   
from 'react-router-dom';  
import Home from "./components/Home";
import StartingPage from "./components/StartingPage";
import Player from "./components/Player";
import './App.css';
function App() {

  const [songs] = useState([
    {
      title: "Running Up The Hill",
      artist: "Kate Bush",
      img_src: "./images/Running up the hill.png",
      src: "./music/Kate Bush  Running Up That Hill  Official Music Video.mp3"
    },
    {
      title: "The Night We Met",
      artist: "Lord Huron",
      img_src: "./images/The night we met.jpg",
      src: "./music/Lord Huron The Night We Met Official Audio.mp3"
    },
    {
      title: "Roslyn",
      artist: "Bon Iver & St. Vincent",
      img_src: "./images/Roslyn.jpg",
      src: "./music/Roslyn.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongindex] = useState(currentSongIndex + 1);

  useEffect(() => {
setNextSongindex(() => {
  if (currentSongIndex + 1 > songs.length-1) {
    return 0;
  }
  else {
    return currentSongIndex + 1;
  }
})
  },[currentSongIndex])

  return (
    <div>
      
    <BrowserRouter>
      <Routes>  
      <Route exact path='/' element={< StartingPage />}></Route>  
        <Route exact path='player' element={

        <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs} />
      
      }></Route>
        <Route exact path='home' element={< Home />}></Route>   
      </Routes>  
    </BrowserRouter>
    </div>
  );
}

export default App;
