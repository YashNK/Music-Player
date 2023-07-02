import React from 'react'

function Lyrics(props) {
  return (
    <div className='w-full absolute lg:mt-[50%]
    md:mt-[100%] mt-[209.55%] bg-black text-white'>
        <div className='w-full bg-black mt-[10%] flex items-center flex-col'>
            <h1 className='text-[209%]'>Lyrics</h1>
            <h1 className='mt-3 text-[140%]'>{props.song.title}</h1>
            <h2 className='mt-4 lyrics-container mr-12 ml-12 text-gray-600'>{props.song.Lyrics}</h2>
            
        </div>
    </div>
  )
}

export default Lyrics