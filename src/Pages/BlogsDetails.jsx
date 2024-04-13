import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogsComp from "../Components/Blog/BlogsComp";

const BlogsDetails = () => {
    const location = useLocation();
    console.log(location, "useLocation");
    const { image, title, description, author, date } = location.state;


  return (
    <div className='min-h-[770px] pt-20'>
      <div className="h-[550px] overflow-hidden">
        <img 
            src={image} 
            alt=""
            className='mx-auto h-full w-full object-cover'
        />
      </div> 
      <div className='container pb-20'>
        <p className='text-slate-600 text-sm py-3'> 
            {" "}
            Written by {author} on {date}
        </p>
        <h1 className='text-2xl font-semibold mb-20'>{title}</h1>
        <p>{description}</p>
      </div>

      <BlogsComp />
    </div>
  )
};

export default BlogsDetails;
