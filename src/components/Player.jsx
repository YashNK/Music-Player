import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import wallpaper2 from '../wall2.jpg'
import Lyrics from './Lyrics';
import { Link } from 'react-router-dom';


function Player(props) {

    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    const handleClick = () => {
        window.scroll({
            top:900,
            behavior: 'smooth',
        })
    }

  return (
    <>
    <img className='absolute w-full object-cover h-screen' src={wallpaper2} />

    <div className='absolute w-full h-screen flex flex-col items-center justify-center'>
        <div className='w-[70%] h-[61%] lg:w-[25%] md:w-[45%] md:h-[65%] pt-[5%] pb-[5%] flex flex-col justify-center items-center card bg-white/60 rounded-2xl'>

            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl} onEnded={SkipSong}></audio>
            <div className='flex'>
                <button className='buttonUniversal p-3 bg-sky-400 rounded-xl text-center md:ml-[-95%] ml-[-55%] text-[70%] cursor-pointer'>Playing</button>
    

                <button className='buttonUniversal p-3 bg-sky-100 rounded-xl text-center md:ml-[4%] ml-[4%] text-[70%] cursor-pointer' onClick={() => handleClick()}>Lyrics</button>

            </div>
            <div className='text-center'>

            <PlayerDetails song={props.songs[props.currentSongIndex]} />

            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying}
            SkipSong={SkipSong} />

            <p className='mt-4 text-[70%]'><strong>Next up:<br></br></strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>

                   

            </div> 
        </div>   
    </div>
    <Lyrics song={props.songs[props.currentSongIndex]} /> 
    </>
  )
}

export default Player