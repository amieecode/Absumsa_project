import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Img1 from "../../assets/blogImages/Ab4.jpg";
import Img2 from  "../../assets/blogImages/Ab6.jpg";
import Img3 from "../../assets/blogImages/img2.jpg"

const EventsDetails = [
    {
        id: 1,
        title: "Absumsa Student match",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, labore. Vel, deleniti.",
        image: Img1,
        date: "24 MAY",
    },
    {
        id: 2,
        title: "Absumsa Sport Day",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, labore. Vel, deleniti.",
        image: Img2,
        date: "28 JUN",
    },
    {
        id: 3,
        title: "Female Student Workout",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, labore. Vel, deleniti.",
        image: Img3,
        date: "1 OCT",
    },
    
    
];


const EventsCard = () => {
  return (
    <div>
        <div className='container mx-auto'>
            {/*Header*/}
            <div>
                <p className='text-primary text-sm font-bold'>Discover</p>
                <div className='flex my-2'>
                    <div className='w-2/3'>
                        <h3 className='text-gray-800 capitalize font-bold lg:text-4xl md:text-2xl sm:text-lg'>Upcoming Events</h3>
                    </div>
                    <div className='w-1/3 justify-end'>
                        <button className='flex gap-4 Events-button rounded-lg shadow-lg justify-items-end'>
                            <a href="#">View More Events</a>
                            <FaArrowRight className='text-lg'/>
                        </button>
                    </div>
                </div>
            </div>
            {/*Events Contents*/}
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {EventsDetails.map((data, index) => (
                    <div key={data.id} className='bg-white overflow-hidden shadow-lg rounded-xl '>
                        {/*Image Section*/}
                        <div className=''>
                            <img 
                                src={data.image} 
                                alt=""
                                className='w-full h-60 object-cover object-center '
                            />
                        </div>

                        {/*Text Section*/}
                        <div className='p-5'>
                                {/*Title and Date Section*/}
                            <div className='flex items-center gap-x-3'>
                                <h3 className='font-bold bg-primary p-2 text-white rounded-lg text-center mb-2'>{data.date}</h3>
                                <h4 className='font-bold text-gray-800 text-xl'>{data.title}</h4>
                            </div> 
                            <p className='text-gray-800 text-sm md:text-lg'>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default EventsCard
