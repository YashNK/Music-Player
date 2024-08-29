import React, { useState } from "react";
import Preload from "../components/Preload";
import { useNavigate } from "react-router-dom";
import "./StartingPage.css";

const StartingPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);

  const handleButtonClick = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full h-screen relative">
      <Preload />
      <div className="welcome_main_container">
        <div className="welcome_content">
          <div className="absolute top-0 w-full h-screen flex items-center justify-center">
            <img className="welcome_logo" src="/images/NightVibe.png" />
          </div>
          <button onClick={() => navigate("/player")} className="welcome_btn">
            Click Here To Vibe
          </button>
          {/* {showPopup && (
          <div className="">
          <div className="">
              <button className="" onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faClose} />
              </button>
              <h1 className="">Discover the Healing Melodies!</h1>
              <p className="">
              Welcome to the ultimate musical antidote for the blues! Our app
              has the cure for your "Depression Funk Syndrome." Get ready to
              boogie down with the funkiest beats and the catchiest tunes
              known to humankind. We've handpicked a collection of jams that
              will make you forget all about your worries and have you shaking
              your tail feathers in no time. So, leave your sorrows at the
              door, slip on your dancing shoes, and prepare for a rhythmical
              rescue mission that will make you wonder why you ever took life
              too seriously. Let's get this party started!{" "}
              </p>
              <img className="" src="/images/danny.png" />
              </div>
              </div>
        )} */}
        </div>
      </div>
      <img
        src="/images/wall4.jpg"
        className=" w-full h-screen absolute wallpaper"
      />
      <div className="w-full h-screen black_layer bg-black absolute opacity-40"></div>
    </div>
  );
};

export default StartingPage;
