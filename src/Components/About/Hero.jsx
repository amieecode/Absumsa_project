import React from 'react';
import Image from "../../assets/building.jpg";

const Hero = () => {
  return (
    <section className="relative lg:pb-40 lg:pt-56 py-32">
      <div className='relative overflow-hidden'>
          <img
            src={Image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className='absolute inset-0 bg-gradient-to-b from-secondary to-primary/50 opacity-25'>
          </div>
      </div> 
      <div className="container mx-auto px-4"> 
          <div className="flex justify-center">
              <div className="lg:w-2/3 text-center relative">
                  <div className="space-y-6 mb-10">
                        <h1 className='text-4xl md:text-5xl lg:text-6xl leading-tight capitalize font-bold text-white shadow-lg'>
                            About Us
                        </h1>
                        <p className='text-base md:text-lg text-white shadow-lg'>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Est velit voluptatibus maxime.
                            adipisicing elit. Est velit voluptatibus maxime.
                        </p>
                  </div>
              </div>
          </div>     
      </div>    
    </section>
  )
};

export default Hero;
