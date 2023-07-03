import React, {useState} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import  wallpaper from '../wall4.jpg'
import danny from '../danny.png'
import logo from '../logo.png'

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

                <button className="bg-black text-[80%] mt-4 text-white lg:ml-[80%] ml-[80%] pt-1 pb-1 pr-2 pl-2 rounded-2xl" onClick={handleButtonClick}>Close</button>

                <h1 className="absolute mt-4 lg:ml-[1%] lg:mr-[40.8%] ml-11 mr-[20%] text-center lg:mt-7 uppercase">Before You Enter: Discover the Healing Melodies!</h1>

                <p className="absolute lg:mt-[7%] mt-[25%] ml-8 lg:ml-[2%] lg:mr-[42%] mr-[18%] text-justify text-[80%]">Welcome to the ultimate musical antidote for the blues! Our app has the cure for your "Depression Funk Syndrome." Get ready to boogie down with the funkiest beats and the catchiest tunes known to humankind. We've handpicked a collection of jams that will make you forget all about your worries and have you shaking your tail feathers in no time. So, leave your sorrows at the door, slip on your dancing shoes, and prepare for a rhythmical rescue mission that will make you wonder why you ever took life too seriously. Let's get this party started! </p>

                <img className="lg:w-[30%] mt-[46%] lg:mt-[8%] ml-[10%] lg:ml-[7%] absolute" src={danny}/>
          
          </div>

        </div>
        )}

            <img className="w-[50%]" src={logo} />
            
           
            
        </div>
        </>
    )
}

export default StartingPage