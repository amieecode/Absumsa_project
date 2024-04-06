import React from 'react'
import Image from "../../assets/student.jpg"

const AboutSection = () => {
  return (
    <div className="h-full max-h-[640px] mb-8 xl:mb-24 mt-16 ">
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
               <h1 className='text-3xl font-semibold leading-none mb-6 text-primary'>
                   About ABSUMSA
                </h1>
                <p className='max-w-[480px] mb-8 text-justify'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Repellendus, non iste? Ut temporibus ducimus assumenda earum 
                    accusamus nisi, hic enim.Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Repellendus, non iste? Ut temporibus ducimus assumenda earum 
                    accusamus nisi, hic enim.
                    <br />
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Repellendus, non iste? Ut temporibus ducimus assumenda earum 
                    accusamus nisi, hic enim.Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Repellendus, non iste? Ut temporibus ducimus assumenda earum 
                    accusamus nisi, hic enim.
                </p>
            </div>
                {/*Image*/}
            <div className='flex-1 lg:flex justify-end items-end mr-8'>
                <img 
                    src={Image} 
                    alt=""
                    className='rounded-3xl shadow-md'
                />
            </div>
        
        </div>
    </div>
  )
}

export default AboutSection;