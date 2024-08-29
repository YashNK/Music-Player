import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StartingPage from "./containers/StartingPage";
import Player from "./containers/Player";
import songs from "./assets/songs";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route
            path="/player"
            element={
              <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                setNextSongIndex={setNextSongIndex}
                songs={songs}
              />
            }
          />
          <Route path="/welcome" element={<StartingPage />} />
          <Route path="*" element={<Navigate to="/welcome" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
