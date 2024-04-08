import React from 'react';
import { FaFacebook, FaInstagram, FaSquareXTwitter, FaWhatsapp } from 'react-icons/fa6';
//import Image from "../../assets/profile.jpeg";

const TeamData =[
    { 
        id: 1,
        name: "John Smith",
        title: "Our President",
        img: "https://picsum.photos/101/101",
        iconFb: ( <FaFacebook /> ),
        iconIg: ( <FaInstagram/> ),
        iconX: ( <FaSquareXTwitter /> ),
        iconW: ( <FaWhatsapp/> )
    },
    {
      id: 2,
      name: "Ever Rose",
      title: "Vice President",
      img: "https://picsum.photos/102/102",
      iconFb: ( <FaFacebook /> ),
      iconIg: ( <FaInstagram/> ),
      iconX: ( <FaSquareXTwitter /> ),
      iconW: ( <FaWhatsapp/> )
  },
  {
    id: 3,
    name: "Walter snow",
    title: "Director of Academics",
    img: "https://picsum.photos/103/103",
    iconFb: ( <FaFacebook /> ),
    iconIg: ( <FaInstagram/> ),
    iconX: ( <FaSquareXTwitter /> ),
    iconW: ( <FaWhatsapp/> )
},
  {
      id: 4,
      name: "Obinna Eze",
      title: "Director of Social",
      img: "https://picsum.photos/104/104",
      iconFb: ( <FaFacebook /> ),
      iconIg: ( <FaInstagram/> ),
      iconX: ( <FaSquareXTwitter /> ),
      iconW: ( <FaWhatsapp/> )
  },
  {
    id: 5,
    name: "Ever Rose",
    title: "Director of Sport",
    img: "https://picsum.photos/101/101",
    iconFb: ( <FaFacebook /> ),
    iconIg: ( <FaInstagram/> ),
    iconX: ( <FaSquareXTwitter /> ),
    iconW: ( <FaWhatsapp/> )
},
 {
      id: 6,
      name: "Buike Snow",
      title: "Financial Secretary",
      img: "https://picsum.photos/102/102",
      iconFb: ( <FaFacebook /> ),
      iconIg: ( <FaInstagram/> ),
      iconX: ( <FaSquareXTwitter /> ),
      iconW: ( <FaWhatsapp/> )
  },
]

const OurTeam = () => {
  return (
    <section className="container py-16 sm:min-h-[600px]">
      <div className="">
        {/* Team content */}
        <h1 className="text-primary text-3xl font-semibold text-center sm:text-4xl my-10">
          Meet Our Team
        </h1>
        <p className="text-base text-center text-gray-400 my-6">
          {/* Your paragraph content */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate vel, deserunt esse nisi doloribus, 
            quod eligendi aspernatur dolorum quibusdam accusamus at adipisci laboriosam ratione vitae molestias enim quidem fuga accusantium.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate vel, deserunt esse nisi doloribus, 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        {/* Card Section */}
        <div className="grid grid-cols-3 sm:grid-col-1 md:grid-col-2 gap-4">
          {TeamData.map((data, index) => (
            <div key={data.id} className="text-center p-4 sm:py-10 pt-6">
              <div className="grid place-item-center rounded-full">
                {data.img}
              </div>
              <h1 className="text-xl font-bold">{data.name}</h1>
              <p className="text-secondary">{data.title}</p>
              {/* Social Links*/}
              <div className="space-x-3 mt-2">
                <div className="inline-block text-lg hover:scale-125 duration-300">
                  <a href="#">{data.iconFb}</a>
                </div>
                <div className='inline-block text-lg hover:scale-125 duration-300'>
                  <a href="#">{data.iconIg}</a>
                </div>
                <div className='inline-block text-lg hover:scale-125 duration-300'>
                  <a href="#">{data.iconX}</a>
                </div>
                <div className='inline-block text-lg hover:scale-125 duration-300'>
                  <a href="#">{data.iconW}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
