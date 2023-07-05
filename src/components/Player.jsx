import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import wallpaper2 from '../wall3.jpg'
import Lyrics from './Lyrics';
import { useNavigate } from "react-router-dom";
import logo from '../logo.png'
import Settings from './Settings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faVolumeOff } from '@fortawesome/free-solid-svg-icons'
import Preload from './Preload';

function Player(props) {

    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate();
    const [previouslyPlayedIndex, setPreviouslyPlayedIndex] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const handleTimeUpdate = () => {
          setCurrentTime(audioEl.current.currentTime);
        };
    
        const handleLoadedMetadata = () => {
          setDuration(audioEl.current.duration);
        };
    
        if (audioEl.current) {
          audioEl.current.addEventListener('timeupdate', handleTimeUpdate);
          audioEl.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        }
    
        return () => {
          if (audioEl.current) {
            audioEl.current.removeEventListener('timeupdate', handleTimeUpdate);
            audioEl.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          }
        };
      }, []);

      const handleSeek = (event) => {
        const newTime = parseFloat(event.target.value);
        audioEl.current.currentTime = newTime;
        setCurrentTime(newTime);
      };

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        audioEl.current.volume = newVolume;
      };

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });
    

    const SkipSong = (forwards = true) => {

      // const shuffledArray = [...props.songs];

      // for (let i = shuffledArray.length - 1; i > 0; i--) {
      //   const randomIndex = Math.floor(Math.random() * (i + 1));
      //   [shuffledArray[i], shuffledArray[randomIndex]] = [
      //     shuffledArray[randomIndex],
      //     shuffledArray[i],
      //   ];
      // }
  
      // props.setSongs(shuffledArray);
      // props.setCurrentSongIndex(0);
    

        // const randomIndex = Math.floor(Math.random() * props.songs.length);

        // props.setCurrentSongIndex(randomIndex);

        // return(
        //   props.setCurrentSongIndex(randomIndex)
        //   )

        if (forwards) {
            props.setCurrentSongIndex(() => {

                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
              

        //         return props.setCurrentSongIndex(randomIndex);
                

        //         // return (props.setCurrentSongIndex(randomIndex));

        //     // let randomIndex;

        //     // if (props.songs.length > 1) {
           
        //     // do {
        //     // randomIndex = Math.floor(Math.random() * props.songs.length);
        //     // } while (randomIndex === previouslyPlayedIndex);
        //     // } else {

        //     // randomIndex = 0;
        //     // }

        //     // props.setCurrentSongIndex(randomIndex);
        //     // setPreviouslyPlayedIndex(randomIndex);
   

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
    
    
    <div className='absolute w-full h-screen flex flex-col items-center justify-center bg-black bg-opacity-75'>
        <div className='w-[70%] h-[61%] lg:w-[25%] md:w-[45%] md:h-[65%] pt-[5%] pb-[5%] flex flex-col justify-center items-center card bg-white/20 text-white rounded-2xl'>

            {/* <Settings /> */}

            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl} onEnded={SkipSong}></audio>
            <div className='flex'>
                <button className='buttonUniversal p-3 bg-black text-white rounded-xl text-center md:ml-[-95%] ml-[-55%] text-[70%] cursor-pointer'>Playing</button>
    

                <button className='buttonUniversal p-3 text-black bg-sky-100 rounded-xl text-center md:ml-[4%] ml-[4%] text-[70%] cursor-pointer' onClick={() => handleClick()}>Lyrics</button>

            </div>

            <div className='text-center'>
                
            <img className="absolute lg:mt-fixed lg:w-[8%] lg:mt-[-13%] lg:ml-[8.9%] w-[30%] mt-[-60%] ml-[21%] cursor-pointer logo" onClick={()=>{navigate('/')}} src={logo} />

            <PlayerDetails song={props.songs[props.currentSongIndex]} />

            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying}
            SkipSong={SkipSong} />

            <div className='absolute lg:mt-[-4.8%] lg:ml-[8%] ml-[17.5%] mt-[-18%]'>
            <input
            className='timeline-btn '
            type="range"
            id="seek"
            name="seek"
            min="0"
            max={audioEl.current ? audioEl.current.duration : 0}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            />
            
            </div>

            <p className='mt-4 text-[70%] text-gray-300'><strong>Next up:<br></br></strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>

            <div className='lg:w-[14%] w-[50%] h-[2.7%] rounded-2xl absolute flex justify-center items-center lg:mt-[4%] lg:ml-[6%] ml-[10%] mt-[20%] bg-red-200/20 '>

            <FontAwesomeIcon icon={faVolumeOff} className='mr-3 text-[50%]' />
            
            <input
            className='volume-btn '
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            />

            

            <FontAwesomeIcon icon={faVolumeHigh} className='ml-3 text-[50%]' /> 
            </div>
            

            </div>
        </div>
        </div>
    
    <Lyrics song={props.songs[props.currentSongIndex]} />
    <div className="w-full h-screen overflow-hidden lg:mb-0 md:mb-0 ">
        <Preload />
        </div>
    </>
  )
}

export default Player