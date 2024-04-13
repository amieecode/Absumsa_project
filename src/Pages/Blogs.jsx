import React from "react";
import BlogsComp from "../Components/Blog/BlogsComp";
import BlogHero from "../Components/Blog/BlogHero";
import BlogArt from "../Components/Blog/BlogArt";

const Blogs = () => {
    return (

        <div 
          className="pt-20 mb-10">
            <BlogHero/>
            <BlogArt />
            <BlogsComp />
            <button className="mx-auto flex items-end gap-x-2 font-bold text-secondary border-2 border-secondary px-6 py-2 rounded-lg">
                <span>Load More</span>
            </button>
        </div>
    );
};

export default Blogs;