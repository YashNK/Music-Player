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
      img_src: './images/Running up the hill.png',
      src: "./music/Kate Bush  Running Up That Hill  Official Music Video.mp3",
      Lyrics: "It doesn't hurt me (yeah, yeah, yo)\nDo you wanna feel how it feels? (Yeah, yeah, yo)\nDo you wanna know, know that it doesn't hurt me? (Yeah, yeah, yo)\nDo you wanna hear about the deal that I'm making? (Yeah, yeah, yo)\nYou\nIt's you and me\nAnd if I only could\nI'd make a deal with God\nAnd I'd get Him to swap our places\nBe runnin' up that road\nBe runnin' up that hill\nBe runnin' up that building\nSay, if I only could, oh\n\nYou don't wanna hurt me (yeah, yeah, yo)\nBut see how deep the bullet lies (yeah, yeah, yo)\nUnaware I'm tearin' you asunder (yeah, yeah, yo)\nOh, there is thunder in our hearts (yeah, yeah, yo)\nIs there so much hate for the ones we love? (Yeah, yeah, yo)\nOh, tell me, we both matter, don't we? (Yeah, yeah, yo)\n\nYou\nIt's you and me\nIt's you and me\nWon't be unhappy\n\nAnd if I only could\nI'd make a deal with God\nAnd I'd get Him to swap our places\nBe runnin' up that road\nBe runnin' up that hill\nBe runnin' up that building (yo)\nSay, if I only could, oh\n\nYou (yeah, yeah, yo)\nIt's you and me\nIt's you and me\nWon't be unhappy (yeah, yeah, yo)\\nnOh, come on, baby (yeah)\nOh, come on, darlin' (yo)\nLet me steal this moment from you now\nOh, come on, angel\nCome on, come on, darlin'\nLet's exchange the experience (yo), oh, ooh, ooh\n\nAnd if I only could\nI'd make a deal with God\nAnd I'd get Him to swap our places\nI'd be runnin' up that road\nBe runnin' up that hill\nWith no problems\nSay, if I only could\nI'd make a deal with God\nAnd I'd get Him to swap our places\nI'd be runnin' up that road\nBe runnin' up that hill\nWith no problems\nSay, if I only could\nI'd make a deal with God\nAnd I'd get Him to swap our places\nI'd be runnin' up that road\nBe runnin' up that hill\nWith no problems\nSay, if I only could\nI'd be runnin' up that hill\nWith no problems"
    },
    {
      title: "The Night We Met",
      artist: "Lord Huron",
      img_src: "./images/The night we met.jpg",
      src: "./music/Lord Huron  The Night We Met Official Audio.mp3",
      Lyrics: "I am not the only traveler\nWho has not repaid his debt\nI've been searching for a trail to follow again\nTake me back to the night we met\nAnd then I can tell myself\nWhat the hell I'm supposed to do\nAnd then I can tell myself\nNot to ride along with you\nI had all and then most of you\nSome and now none of you\nTake me back to the night we met\nI don't know what I'm supposed to do\nHaunted by the ghost of you\nOh, take me back to the night we met\nWhen the night was full of terrors\nAnd your eyes were filled with tears\nWhen you had not touched me yet\nOh, take me back to the night we met\nI had all and then most of you\nSome and now none of you\nTake me back to the night we met\nI don't know what I'm supposed to do\nHaunted by the ghost of you\nTake me back to the night we met"
    },
    {
      title: "Roslyn",
      artist: "Bon Iver & St. Vincent",
      img_src: "./images/Roslyn.jpg",
      src: "./music/Roslyn.mp3",
      Lyrics: "Up with your turret\nAren't we just terrified?\nShale, screen your worry\nFrom what you won't ever find\nDon't let it fool you\nDon't let it fool you down\nDown's sitting around\nFolds in the gown\nSea and the rock below\nCocked to the undertow\nBones, blood and teeth erode\nWith every crashing node\nWings wouldn't help you\nWings wouldn't help you down\nDown fills the ground\nGravity's proud\nYou barely are blinking\nWagging your face around\nWhen'd this just become a mortal home?\nWon't, won't, won't, won't\nWon't let you talk me\nWon't let you talk me down\nWill pull it taut\nNothing let out"
    },
    {
      title: "Hotline Bling",
      artist: "Drake",
      img_src: "./images/Hotline Bling.png",
      src: "./music/Drake  Hotline Bling.mp3",
      Lyrics: "You used to call me on my\nYou used to, you used to\nYeah\nYou used to call me on my cell phone\nLate night when you need my love\nCall me on my cell phone\nLate night when you need my love\nAnd I know when that hotline bling\nThat can only mean one thing\nI know when that hotline bling\nThat can only mean one thing\nEver since I left the city, you\nGot a reputation for yourself now\nEverybody knows and I feel left out\nGirl, you got me down, you got me stressed out\n'Cause ever since I left the city, you\nStarted wearing less and goin' out more\nGlasses of champagne out on the dance floor\nHangin' with some girls I've never seen before\nYou used to call me on my cell phone\nLate night when you need my love\nCall me on my cell phone\nLate night when you need my love\nI know when that hotline bling\nThat can only mean one thing\nI know when that hotline bling\nThat can only mean one thing\nEver since I left the city, you, you, you\nYou and me, we just don't get along\nYou make me feel like I did you wrong\nGoing places where you don't belong\nEver since I left the city, you\nYou got exactly what you asked for\nRunning out of pages in your passport\nHanging with some girls I've never seen before\nYou used to call me on my cell phone\nLate night when you need my love\nCall me on my cell phone\nLate night when you need my love\nAnd I know when that hotline bling\nThat can only mean one thing\nI know when that hotline bling\nThat can only mean one thing\nThese days, all I do is\nWonder if you're bendin' over backwards for someone else\nWonder if you're rollin' up a Backwoods for someone else\nDoing things I taught you, gettin' nasty for someone else\nYou don't need no one else\nYou don't need nobody else, no\nWhy you never alone?\nWhy you always touchin' road?\nUsed to always stay at home, be a good girl\nYou was in the zone\nYeah, you should just be yourself\nRight now, you're someone else\nYou used to call me on my cell phone\nLate night when you need my love\nCall me on my cell phone\nLate night when you need my love\nAnd I know when that hotline bling\nThat can only mean one thing\nI know when that hotline bling\nThat can only mean one thing\nEver since I left the city"
    },
    {
      title: "Gods Plan",
      artist: "Drake",
      img_src: "./images/Gods Plan.jpg",
      src: "./music/Drake  Gods Plan.mp3",
      Lyrics: "And, they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me, yeah\nI been movin' calm, don't start no trouble with me\nTryna keep it peaceful is a struggle for me\nDon't pull up at 6 AM to cuddle with me\nYou know how I like it when you lovin' on me\nI don't wanna die for them to miss me\nYes, I see the things that they wishin' on me\nHope I got some brothers that outlive me\nThey gon' tell the story, shit was different with me\nGod's plan, God's plan\nI hold back, sometimes I won't, yeah\nI feel good, sometimes I don't, ayy, don't\nI finessed down Weston Road, ayy, 'nessed\nMight go down a G-O-D, yeah, wait\nI go hard on Southside G, yeah, Way\nI make sure that north side eat\nAnd still\nBad things\nIt's a lot of bad things\nThat they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me\nBad things\nIt's a lot of bad things\nThat they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me\nYeah, ayy, ayy (ayy)\nShe say, 'Do you love me?' I tell her, 'Only partly\nI only love my bed and my momma, I'm sorry;\nFifty Dub, I even got it tatted on me\n81, they'll bring the crashers to the party\nAnd you know me\nTurn a O2 into the O3, dog\nWithout 40, Oli', there'd be no me\n'Magine if I never met the broskis\nGod's plan, God's plan\nI can't do this on my own, ayy, no, ayy\nSomeone watchin' this shit close, yep, close\nI've been me since Scarlett Road, ayy, road, ayy\nMight go down as G-O-D, yeah, wait\nI go hard on Southside G, ayy, Way\nI make sure that north side eat, yuh\nAnd still\nBad things\nIt's a lot of bad things\nThat they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me\nYeah, yeah\nBad things\nIt's a lot of bad things\nThat they wishin' and wishin' and wishin' and wishin'\nThey wishin' on me\nYeah"
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
