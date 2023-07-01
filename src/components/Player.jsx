import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import wallpaper2 from '../wall2.jpg'

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

    

  return (
    <>
    <img className='absolute w-full object-cover h-screen' src={wallpaper2} />

    <div className='absolute w-full h-screen flex flex-col items-center justify-center'>
        <div className='w-[70%] h-[61%] md:w-[25%] md:h-[65%] pt-[5%] pb-[5%] flex flex-col justify-center items-center card bg-white/60 rounded-2xl'>

            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <div className='flex'>
                <button className='buttonUniversal p-3 bg-sky-400 rounded-xl text-center md:ml-[-95%] ml-[-55%] text-[70%] cursor-pointer'>Playing</button>

                <button className='buttonUniversal p-3 bg-sky-100 rounded-xl text-center md:ml-[4%] ml-[4%] text-[70%] cursor-pointer'>Lyrics</button>
            </div>
            <div className='text-center'>

            <PlayerDetails song={props.songs[props.currentSongIndex]} />

            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying}
            SkipSong={SkipSong} />

            <p className='mt-4 text-[70%]'><strong>Next up:<br></br></strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>

           

            </div> 
        </div>
    </div>
    </>
  )
}

export default Player