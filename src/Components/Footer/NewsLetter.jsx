import React from 'react'

const NewsLetter = () => {
  return (
    <div>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-400 py-7 '>
            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                <span 
                    data-aos="zoom-out"
                    data-aos-delay="300"
                    className='text-primary font-bold'>
                        Subscribe
                </span> {" "}
                        to our NewsLetter to get regular update
            </h1>
            <div>
            <form action="">
                <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-md px-2 focus:outline-none" 
                />
                <button className='bg-primary hover:bg-secondary duration-300 border-2 border-secondary px-8 py-2.5 rounded-md font-semibold text-white top-0 right-0 md:w-auto w-full' type="Submit">
                    Submit
                </button>
            </form>

            </div>
         </div>
    </div>
  )
}

export default NewsLetter
