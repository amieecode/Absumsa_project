import React from 'react';


const OurPresident = () => {
  return (
    <section className="flex justify-center items-center h-[40rem] bg-white">
      <div className="flex justify-center items-center">
        <div className="w-1/">
          <img
            src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=Tx3nGQfxaI781gi97Siw7DIEBbKg1oBxl8n0JEwMQ6s="
            className="w-48 h-48 rounded-full object-cover mx-auto"
            alt=""
          />
        </div>
        <div className=" w-1/2 px-8">
          <h2 className="text-[2.0rem] text-white font-bold bg-primary text-center py-4 px-3 mb-4">A WORD FROM OUR PRESIDENT</h2>
          <p className="text-lg">
            "Together, our diverse and driven council pushes for transformative change, extending
            our influence beyond the confines of Harvard’s marble walls. We work tirelessly to
            promote student wellness, improve affiliations with community organizations, and organize
            events to bring our 200-person family together. All that we do is in pursuit of our
            central mission: to advance ABSUMSA into a realm where not only learning but also
            service and well-being are elevated to their utmost excellence."
          </p>
          <p className="text-lg mt-4">- Amobi Emeku Charles </p>
        </div>
      </div>
    </section>
  );
};

export default OurPresident;
