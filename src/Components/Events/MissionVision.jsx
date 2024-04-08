import React from 'react';
import { FaLowVision } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";

const FeaturesData =[
    { 
     id:1,  
     name: "Our Mission",
     icon: (
        <GrScorecard  className='text-5xl text-primary group-hover:text-black duration-300'/>
     ),
     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quod possimus dignissimos eveniet! Tenetur esse qui adipisci debitis aperiam quo",
    },
    {   
        id:2,
        name: "Our Vision",
        icon: (
           <FaLowVision  className='text-5xl text-primary group-hover:text-black duration-300'/>
        ),
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quod possimus dignissimos eveniet! Tenetur esse qui adipisci debitis aperiam quo",
       },
];
const MissionVision = () => {
  return (
        <section className='bg-gray-100'>
          <div className='container py-16 sm:min-h-[600px]'>
             <h1 className='text-3xl text-primary font-semibold text-center sm:text-4xl mb-12'>Our Cores Values</h1>
              {/* Card Section */}
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10'>
                 {FeaturesData.map((data, index) => (
                    <div key={data.id} className='text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-white shadow-2xl hover:bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_40px_#007cfff0] text-black hover:text-white rounded-lg duration-300'>
                        <div className='grid place-items-center'>
                            {data.icon}
                        </div>
                        <h1 className='text-2xl font-bold'>{data.name}</h1>
                        <p>{data.description}</p>
                    </div>
                  ))}
               </div>
           </div>
        </section>
  );
};

export default MissionVision;
