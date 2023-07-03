import React from 'react'
import { motion } from 'framer-motion'
import logo from '../logo.png'
import { Opacity } from '@mui/icons-material'

function Preload() {
  return (
    <div className=' overflow-hidden'>
        <motion.div className="w-full h-screen preLoad absolute overflow-hidden"
        animate={{
            y:-1500,
        }}

        transition={{
            type: "spring",
            stiffness:30,
            delay:2.5,
        }}
        >
            <div className='absolute flex w-full h-screen justify-center items-center overflow-hidden'>
            <img src={logo} className='lg:w-[20%] w-[50%]'/>
            </div>
        </motion.div>
    </div>
  )
}

export default Preload