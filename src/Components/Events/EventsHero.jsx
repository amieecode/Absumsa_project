import React from 'react';
import HeroPng from "../../assets/blogImages/Ab2.jpg";
import { BiPlayCircle } from "react-icons/bi";

const EventsHero = () => {
  return (
    <section>
      <div className='py-10 sm:py-0 my-[7rem]'>
        <div className='container flex relative'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
                {/*hero Text Section*/}
                <div className='order-2 sm:order-1 space-y-5 lg:pr-20'>
                    <h1 className='text-4xl font-semibold text-gray-800 pb-5'>
                        Live Acts, {" "} Reimagined
                    </h1>
                    <p className='text-sm text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta accusamus sunt incidunt officiis
                         ipsa mollitia molestiae quis possimus voluptates?
                    </p>
                    <div className='flex gap-6'>
                        <button className=' flex items-center gap-2 Events-button rounded-lg shadow-lg'>
                            <BiPlayCircle className='text-2xl'/>
                               <a href="#"> Watch Videos</a>
                        </button>
                        <button className='shadows-lg brand-button'>
                            {" "}
                            <a href="#"> Discover Events</a>
                        </button>
                    </div>
                </div>
                {/*Image Section*/}
                <div className='order-1 sm:order-2 '> 
                    <img 
                        src={HeroPng}
                        alt=""
                        className='w-full h-[250px] object-cover object-center rounded-xl'
                    />
                    <div className='flex  gap-x-2 relative'>
                        <h3 className='font-bold bg-primary p-2 text-white rounded-lg text-center mb-2 absolute bottom-[2.5rem] left-[1rem] z-10'>18 MAY</h3>
                        <h4 className='font-bold text-xl text-white absolute bottom-[3.5rem] right-[2rem] z-10'>Absumsa Health Week</h4>
                    </div> 
                </div>
            </div>
            
        </div>
      </div>

    </section>
  )
}

export default EventsHero;
