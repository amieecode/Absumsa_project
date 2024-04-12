import React from 'react';
import Image from "../../assets/profile.jpg";

const OurPresident = () => {
  return (
   <div>
     <section className='py-2'>
       <div className='max-w-6xl mx-auto p-4 md:p-16 xl:p-20 shadow-sm'>
          {/*President Word */}
          <div className='mb-[4rem] space-y-3 text-center mx-auto'>
                    {/*Slash Bar */}
            <div className='bg-secondary w-20 mx-auto h-1'></div>
              <h1 className='text-gray-800 text-center justify-center tracking-wider font-medium my-[1rem] text-4xl'>
                  A Word from Our Noble President
              </h1>
          </div>
          <div className='grid md:grid-cols-2 gap-8 mt-10 my-5'>
             {/*Image Card */}
              <div>
                <img 
                    src={Image} 
                    alt="" 
                    className='w-full rounded-lg shadow-xl'
                />
              </div>
              {/*Text Section*/}
              <div className='flex text-gray-800'>
                <div className='space-y-6'>
                  <div className='mt-[1rem]'>
                    <h1 className='uppercase font-medium pb-[1rem] text-2xl'>Warm Greeting to All ABSUMISTE</h1>
                    <p>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint numquam ratione.
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint numquam ratione.
                       <br/>
                       <br/>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint numquam ratione.
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint numquam ratione.
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint numquam ratione.
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint numquam ratione.
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint numquam ratione.
                    </p>
                    <h3 className='font-name text-[1.5rem] font-semibold text-gray-800 my-[1rem]'>Amobi C. Emeku</h3>
                    <a href="#" className='brand-button'>View Our Excos</a>
                  </div>
                </div>
              </div>
          </div>
       </div>
     </section>
   </div>
  );
};

export default OurPresident;
