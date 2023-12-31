import React from 'react'
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      scale: [1, 1.5, 1.5, 2, 1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
      duration: 2.5,
    }}
    className='relative flex justify-center items-center'>
      <div className='absolute border [#023020]/40 rounded-full h-[150px] w-[150px] mt-52 animate-ping' />
      <div className='absolute border border-[#023020]/40 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='absolute border border-[#023020]/40 rounded-full h-[300px] w-[300px] mt-52 animate-ping' />
      <div className='absolute border border-[#023020] opacity-20 rounded-full h-[550px] w-[550px] mt-52 animate-pulse' />
      <div className='absolute border border-[#023020]/40 rounded-full h-[600px] w-[600px] mt-52 animate-ping' />
    </motion.div>
  )
}

export default BackgroundCircles