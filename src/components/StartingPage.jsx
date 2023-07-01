import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import  wallpaper from '../wall1.jpg'
const StartingPage = () => {
    return(
        <>
        <img className="absolute w-full h-screen object-cover opacity-70" src={wallpaper} />
        <div className="absolute w-full h-screen flex justify-center items-center">
            <Link to='player'>
            <button className="rounded-2xl p-4 bg-white cursor-pointer buttonUniversal">
                Click Here To Vibe
            </button>
            </Link>
        </div>
        </>
    )
}

export default StartingPage