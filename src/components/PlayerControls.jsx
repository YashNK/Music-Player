import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
function PlayerControls(props) {
  return (
    <div className='mt-6'>
        <button className='mr-10 cursor-pointer' onClick={() => props.SkipSong(false)}><FontAwesomeIcon icon={faBackward} /></button>
        <button className='mr-10 pt-[3%] md:pt-[2.2%] md:pb-[2%] pb-[2.3%] pl-[5%] pr-[5%] rounded-full bg-black text-white cursor-pointer' onClick={() => props.setIsPlaying(!props.isPlaying)}><FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} /></button>      
       <button className='cursor-pointer' onClick={() => props.SkipSong(false)}><FontAwesomeIcon icon={faForward} /></button>   
    </div>
  )
}

export default PlayerControls