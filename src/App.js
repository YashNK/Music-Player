import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter }   
from 'react-router-dom';  
import Home from "./components/Home";
import StartingPage from "./components/StartingPage";
import Player from "./components/Player";
import './App.css';
import Lyrics from "./components/Lyrics";
function App() {

  const [songs] = useState([
    {
      title: "Running Up The Hill",
      artist: "Kate Bush",
      img_src: "./images/Running up the hill.png",
      src: "./music/Kate Bush  Running Up That Hill  Official Music Video.mp3",
      Lyrics: "It doesn't hurt me (yeah, yeah, yo) Do you wanna feel how it feels? (Yeah, yeah, yo) Do you wanna know, know that it doesn't hurt me? (Yeah, yeah, yo) Do you wanna hear about the deal that I'm making? (Yeah, yeah, yo) You It's you and me And if I only could I'd make a deal with God And I'd get Him to swap our places Be runnin' up that road Be runnin' up that hill Be runnin' up that building Say, if I only could, oh You don't wanna hurt me (yeah, yeah, yo) But see how deep the bullet lies (yeah, yeah, yo) Unaware I'm tearin' you asunder (yeah, yeah, yo) Oh, there is thunder in our hearts (yeah, yeah, yo) Is there so much hate for the ones we love? (Yeah, yeah, yo) Oh, tell me, we both matter, don't we? (Yeah, yeah, yo) You It's you and me It's you and me Won't be unhappy And if I only could I'd make a deal with God And I'd get Him to swap our places Be runnin' up that road Be runnin' up that hill Be runnin' up that building (yo) Say, if I only could, oh You (yeah, yeah, yo) It's you and me It's you and me Won't be unhappy (yeah, yeah, yo) Oh, come on, baby (yeah) Oh, come on, darlin' (yo) Let me steal this moment from you now Oh, come on, angel Come on, come on, darlin' Let's exchange the experience (yo), oh, ooh, ooh And if I only could I'd make a deal with God And I'd get Him to swap our places I'd be runnin' up that road Be runnin' up that hill With no problems Say, if I only could I'd make a deal with God And I'd get Him to swap our places I'd be runnin' up that road Be runnin' up that hill With no problems Say, if I only could I'd make a deal with God And I'd get Him to swap our places I'd be runnin' up that road Be runnin' up that hill With no problems Say, if I only could I'd be runnin' up that hill With no problems"
    },
    {
      title: "The Night We Met",
      artist: "Lord Huron",
      img_src: "./images/The night we met.jpg",
      src: "./music/Lord Huron  The Night We Met Official Audio.mp3",
      Lyrics: "fsbsbfusbifsbuifbsuibfisbfibsuidfbuis"
    },
    {
      title: "Roslyn",
      artist: "Bon Iver & St. Vincent",
      img_src: "./images/Roslyn.jpg",
      src: "./music/Roslyn.mp3",
      Lyrics: "fsbsbfusbifsbuifbsuibfisbfibsuidfbuis"
    },
    {
      title: "Hotline Bling",
      artist: "Drake",
      img_src: "./images/Hotline Bling.png",
      src: "./music/Drake  Hotline Bling.mp3",
      Lyrics: "fsbsbfusbifsbuifbsuibfisbfibsuidfbuis"
    },
    {
      title: "Gods Plan",
      artist: "Drake",
      img_src: "./images/Gods Plan.jpg",
      src: "./music/Drake  Gods Plan.mp3",
      Lyrics: "fsbsbfusbifsbuifbsuibfisbfibsuidfbuis"
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
        <Route exact path='/' element={< StartingPage />}>
        </Route>  
        <Route exact path='player' element={

          <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs} />

        }></Route>
         <Route exact path='lyrics' element={< Lyrics />}></Route>
        <Route exact path='home' element={< Home />}></Route>   
      </Routes>  
    </BrowserRouter>
    </div>
  );
}

export default App;
