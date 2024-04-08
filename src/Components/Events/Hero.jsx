import React from 'react';
import HeroPng from "../../assets/Event/banner1.png";
import { BiPlayCircle } from "react-icons/bi";

const Hero = () => {
  return (
    <section>
      <div className='py-12 sm:py-0 '>
        <div className='container m-h-[700px] flex relative'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
                {/*hero Text Section*/}
                <div className='order-2 sm:order-1 space-y-5 lg:pr-20'>
                    <h1 className='text-4xl font-semibold'>
                        GET READY TO ENJOY {" "}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                            INTERNATIONAL WOMEN DAY WITH US
                        </span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta accusamus sunt incidunt officiis
                         ipsa mollitia molestiae quis possimus voluptates?
                    </p>
                    <div className='flex gap-6'>
                        <button className='brand-button rounded-full '>
                                Learn More
                        </button>
                        <button className='flex items-center gap-2'>
                            {" "}
                            <BiPlayCircle className='text-3xl'/>
                            See Video
                        </button>
                    </div>
                </div>
                {/*Image Section*/}
                <div className='order-1 sm:order-2'> 
                    <img 
                        src={HeroPng}
                        alt=""
                        className='h-[300px]'
                    />
                </div>
            </div>

            {/*Animated Blob*/}
            <div className='h-[300px] w-[300px] bg-gradient-to-r from-secondary to-primary rounded-full absolute top-0 left-o blur-3xl animated-wrapper'>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
