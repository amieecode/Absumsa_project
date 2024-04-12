import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

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
        <section className="py-11">
            <div className="container mx-auto py-2">
                <h1 className="text-primary text-3xl font-semibold text-center sm:text-5xl my-8 mt-[4rem]">
                    Meet Our Team
                </h1>
                <p className=" px-[2rem] text-center text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate vel, deserunt esse nisi doloribus, 
                    quod eligendi aspernatur dolorum quibusdam accusamus at adipisci laboriosam ratione vitae molestias enim quidem fuga accusantium.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate vel, deserunt esse nisi doloribus, 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4">
                    {TeamData.map((data, index) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay} 
                            key={data.id} 
                            className=" bg-white hover:bg-primary hover:text-white shadow-lg duration-200 mx-[2rem] text-center items-center p-4 sm:py-6 mt-[3rem]"
                        >
                            <div className="flex justify-center mb-5">
                                <img 
                                    src={data.img} 
                                    className="rounded-tr-full rounded-tl-full rounded-br-full" 
                                    alt={data.name} 
                                />
                            </div>
                            <h1 className="text-[1.5rem] font-bold">{data.name}</h1>
                            <p className="text-secondary hover:text-white font-medium">{data.title}</p>
                            <div className="space-x-3 mt-2">
                                <div className="inline-block text-lg hover:scale-125 duration-300">
                                    <a href="#">{data.iconFb}</a>
                                </div>
                                <div className="inline-block text-lg hover:scale-125 duration-300">
                                    <a href="#">{data.iconIg}</a>
                                </div>
                               <div className="inline-block text-lg hover:scale-125 duration-300">
                                    <a href="#">{data.iconX}</a>
                                </div>
                                <div className="inline-block text-lg hover:scale-125 duration-300">
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
