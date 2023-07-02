import React from 'react'

function Lyrics(props) {
  return (
    <div className='w-full h-[130%] absolute lg:mt-[50%]
    md:mt-[100%] mt-[209%] bg-black text-white'>
        <div className='w-full h-screen mt-10 flex items-center flex-col'>
            <h1>Lyrics</h1>
            <h1>{props.song.title}</h1>
            <h2 className='mr-12 ml-12'>{props.song.Lyrics}</h2>
        </div>
    </div>
  )
}

export default Lyrics