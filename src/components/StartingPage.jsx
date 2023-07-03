import React, {useState} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import  wallpaper from '../wall4.jpg'
import danny from '../danny.png'
import logo from '../logo.png'
import Preload from "./Preload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const StartingPage = () => {

    const [showPopup, setShowPopup] = useState(true);

    const handleButtonClick = () => {
      setShowPopup(false);
    };

    return(
        <>
        
        
        <img className="absolute w-full h-screen object-cover" src={wallpaper} />
        
    
        <div className="absolute w-full h-screen flex  bg-black bg-opacity-70 justify-center items-center flex-col">
        
        <Link to='/player'>
            <button className="absolute rounded-2xl p-4 bg-white cursor-pointer buttonUniversal ml-[-22%] mt-[49%] lg:ml-[8%] lg:mt-[33%] lg:rotate-[90deg]">
                Click Here To Vibe
            </button>
            </Link>
            
       
        {showPopup && (
        <div className="bg-black absolute text-white w-full h-screen bg-opacity-40 flex flex-col justify-center items-center overflow-hidden">

            <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black lg:h-[60%] lg:w-[20%] h-[50%] w-[80%] text-white rounded-2xl"> 

                <button className="bg-white text-[80%] mt-4 text-black lg:ml-[85%] ml-[85%] pt-[0.5%] pb-0 pr-[1.7%] pl-[1.9%] rounded-2xl" onClick={handleButtonClick}><FontAwesomeIcon icon={faClose} /></button>

                <h1 className="absolute mt-4 lg:ml-[1%] lg:mr-[40.8%] ml-11 mr-[20%] text-center lg:mt-7 uppercase">Discover the Healing Melodies!</h1>

                <p className="absolute lg:mt-[7%] mt-[25%] ml-8 lg:ml-[2%] lg:mr-[42%] mr-[18%] text-justify text-[80%]">Welcome to the ultimate musical antidote for the blues! Our app has the cure for your "Depression Funk Syndrome." Get ready to boogie down with the funkiest beats and the catchiest tunes known to humankind. We've handpicked a collection of jams that will make you forget all about your worries and have you shaking your tail feathers in no time. So, leave your sorrows at the door, slip on your dancing shoes, and prepare for a rhythmical rescue mission that will make you wonder why you ever took life too seriously. Let's get this party started! </p>

                <img className="lg:w-[30%] mt-[46%] lg:mt-[8%] ml-[10%] lg:ml-[7%] overflow-hidden absolute" src={danny}/>

                
          
          </div>

        </div>

        )}
        
            <img className="w-[50%] overflow-hidden" src={logo} />   
            
        </div>

        <div className="w-full h-screen overflow-hidden lg:mb-0 md:mb-0">
        <Preload />
        </div>
        
        </>
    )
}

export default StartingPage