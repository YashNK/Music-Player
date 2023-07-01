import React from 'react'

function PlayerDetails(props) {
  return (
    <div>
        <div className=' w-full flex justify-center'>
            <img className="rounded-full md:w-[55%] w-[70%] mt-5 mb-5" src={props.song.img_src} />
        </div>
        <h3 className='text-[120%]'>{props.song.title}</h3>
        <h4 className='text-[100%]'>{props.song.artist}</h4>
    </div>
  )
}

export default PlayerDetails