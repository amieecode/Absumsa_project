import React from 'react';
import Image from "../../assets/building.jpg";

const Hero = () => {
  return (
    <div className='pt-2'>
      <div className='h-94 w-full bg-gradient-to-tr from-purple-600 to-green-700 relative'>
        <img 
            src={Image}
            alt=""
            className=''
        />
      </div>
      {/* Content*/}
      <div className='p-24'>
        <h1 className='text-black text-6xl font-bold'>
          About Us
        </h1>
        <p className='text-black font-light mt-5 text-slate-100'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Molestiae aperiam accusamus tempora nulla sint et non a minima fuga porro!
        </p>
      </div>
    </div>
  )
}

export default Hero
