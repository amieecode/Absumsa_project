import React from 'react';
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";



const BlogCard = ({ image, date, title, profile, description, tag, author }) => {
     
  return (
    <Link 
        to={`/blogs/${title}`}
        onClick ={() => {
            window.scrollTo(0, 0);
        }}
        state={{ image, title,date, profile, description, tag, author}}
    
    >
       <div className='rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
            <img 
                src={image} 
                alt="title"
                className='w-full object-cover object-center h-60'
            />
            <div className='p-5'>
                <span className='bg-secondary/25 rounded-lg tracking-wide text-sm font-medium text-gray-700 px-2 py-2'>{tag}</span>
                <h2 className='font-bold text-xl text-gray-700 mt-2'>{title}</h2>
                <p className='text-gray-700 mt-3 text-sm line-clamp-2'>{description}</p>
                <div className='flex justify-between flex-nowrap items-center mt-6 '>
                    <div className='flex items-center gap-x-2'>
                        <img 
                            src={profile}
                            alt="Profile"
                            className='w-20 h-15 rounded-br-full rounded-tr-full'
                        />
                        <div className='flex flex-col'>
                            <h4 className='font-bold italic text-gray-700 text-sm'>
                                {author}
                            </h4>
                            <div className='flex items-center gap-x-2'>
                                <span className='bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full'>
                                    <FaCheck className='w-1.5 h-1.5 text-[#36B37E]'/>
                                </span>
                                <span className='italic text-gray-700 text-xs'>Verified Writer</span>
                            </div>
                        </div>
                    </div>
                    <span className='font-bold text-gray-700 italic text-sm'>{date}</span>
                </div>
            </div>
       </div>
    </Link>
   
  );
};

export default BlogCard;
