import React from 'react';
import Image from "../../assets/absu.jpg";

const Hero = () => {
  return (
    <div className='relative block overflow-x-hidden'>
    <figure className="relative">
      <div className=''>
          <img
            src={Image}
            alt=""
            className="w-full object-cover h-[300px] lg:h-[800px]"
          />
          <div className='absolute inset-0 bg-black opacity-25'>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pt-[4rem] md:pt-[4rem] flex-col text-center ">
              <h1 className='text-4xl md:text-5xl lg:text-6xl capitalize font-bold text-white mb-[2rem]'>
                    About Us
              </h1>
         </div>
      </div> 
    </figure>
    </div>
   
  )
};

export default Hero;
