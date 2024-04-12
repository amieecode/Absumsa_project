import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const BlogHero = () => {
  return (
    <div className='min-h-[300px] sm:min-h-[440px] flex justify-center items-center pt-[4rem] mt-[3rem]'>
      <div className='container pb-[2rem] sm:pb-0'>
        {/* Text content */}
        <div className='justify-center flex flex-col text-center mb-10'>
          <h3 className='text-secondary text-3xl uppercase font-bold'>
            ABSUMA Entertaining
          </h3>
          <h1 className='text-primary text-4xl font-bold my-2'>
            <span className='text-gray-400 text-[3rem]'>"</span> Blog<span className='text-gray-400 text-[3rem]'>"</span>
          </h1>
          <p className='text-gray-400 mb-3 lg:mt-1 px-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo alias veniam!</p>
        </div>

        {/*Search bar*/}
        <form className='container max-w-[700px] px-4 pb-6'>
          <div className='relative'>
            <input 
              type="search" 
              placeholder='Search' 
              className='w-full p-4 rounded-full bg-gray-200 place-content-center'>
            </input>
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-secondary rounded-full hover:bg-gradient-to-r from-primary to-secondary'>
              <AiOutlineSearch className='text-white duration-300 '/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogHero;
