import React from 'react';
import Image from '../../assets/student.jpg';

const AboutSection = () => {
  return (
    <section className="mt-[2rem]">
      {/* Content and Image Container */}
      <div className="container px-4 py-16 flex flex-col lg:flex-row gap-16 md:py-[4rem]">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-semibold leading-none mb-6 text-primary">
            About ABSUMSA
          </h1>
          <p className="text-gray-600 text-justify max-w-sm lg:max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
            non iste? Ut temporibus ducimus assumenda earum accusamus nisi, hic
            enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus, non iste? Ut temporibus ducimus assumenda earum accusamus
            nisi, hic enim. <br /> <br /> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Repellendus, non iste? Ut temporibus ducimus assumenda
            earum accusamus nisi, hic enim. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Repellendus, non iste? Ut temporibus ducimus assumenda
            earum accusamus nisi, hic enim.
          </p>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-end items-end z-10">
          <img
            src={Image}
            alt="Student with Books"
            className="rounded-3xl shadow-md h-[18rem] lg:h-auto object-fit:cover mr-[1rem] sm:mx-[2rem]"
          />
        </div>
      </div>

      {/* Shapes (optional, adjust positioning if needed) */}
      <div className="relative">
        <div className="w-[8rem] h-[8rem] bg-primary rounded-tl-full rounded-tr-full absolute left-[40.5rem] top-[-35.5rem] z-[12rem]"></div>
        <div className="w-[8rem] h-[8rem] bg-primary rounded-bl-full rounded-br-full absolute left-[73rem] right-[8rem] bottom-[1.5rem] z-[1rem]"></div>
      </div>
      
    </section>
  );
};

export default AboutSection;
