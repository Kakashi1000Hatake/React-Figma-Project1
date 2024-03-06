import React from 'react'
import Left from './left/Left'
import Right from './right/Right'

function Hero() {
  return (
    <div className='flex justify-center items-center w-full h-9/10 gap-6 relative overflow-hidden p-8'>
      <Left />
      <Right />
    </div>
  )
}

export default Hero