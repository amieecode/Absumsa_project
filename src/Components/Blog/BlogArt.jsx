import React from 'react';
import Img1 from "../../assets/blogImages/Ab1.jpg";
import Profile from "../../assets/blogImages/profile.jpeg";
import { FaCheck } from "react-icons/fa";

const BlogFeatures = [
    {
        id: 1,
        image: Img1,
        title: "How to choose bicycle for Spring in Australia Shopping centres?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ducimus laborum distinctio harum exercitationem, temporibus commodi blanditiis ratione fugit non veniam consectetur vel dolor quas veritatis laudantium, libero obcaecati et vero perferendis. Veritatis at id culpa eum maxime assumenda unde.",
        author: "John Doe",
        profile: Profile,
        tag: "Hot Topic",
        date: "May, 2023"
    },

];


const BlogArt = () => {
  return (
    <section className='py-[2rem]'>
        <div className='container mx-auto flex'>
           <div className='grid grid-col-1 sm:grid-cols-2 gap-8'>
                 {/*Image content*/}
                <div className=''>
                    <img 
                        src={Img1}
                        alt="Image"
                        className='w-full rounded-xl shadow-lg'
                    />
                </div>

                    {/*Text content*/}
                <div className='flex flex-col justify-center'>
                    {BlogFeatures.map((data, index) => (
                      <div key={data.id} className=''>
                           <span className='bg-secondary/25 rounded-lg tracking-wide font-medium text-gray-700 px-2 py-2'>{data.tag}</span>
                         <h1 className='text-[2rem] lg:text-[1.5rem] md:text-[1.2rem] font-bold capitalize py-[0.5rem] text-gray-800 md:pt-4'>{data.title}</h1>
                         <p className='text-gray-400 line-clamp-2'>{data.description}</p>
                         <div className='flex justify-between flex-nowrap items-center mt-[1rem]'>
                            <div className='flex items-center gap-x-2'>
                                <img 
                                    src={Profile} 
                                    alt="Profile"
                                    className='w-20 h-15 rounded-br-full rounded-tr-full'
                                />
                                <div className='flex flex-col'>
                                    <h4 className='font-bold italic text-lg text-gray-700'>{data.author}</h4>
                                    <div className='flex items-center'>
                                        <span className='bg-[#36837E] w-fit bg-opacity-20 p-1.5 rounded-full'>
                                            <FaCheck className='w-1.5 h-1.5 text-[#36837E]'/>
                                        </span>
                                        <span className='pl-[0.3rem] text-gray-700 font-medium italic text-sm'>
                                            Verified Writer
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <span className='font-bold italic text-gray-700'>{data.date}</span>
                          </div>
                        </div>
                    ))}
                </div>
           </div>
        </div>
    </section>
  );
};

export default BlogArt;
