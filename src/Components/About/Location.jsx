import React from 'react';

const Location = () => {
  return (
    <div>
      <div>
        <div className="container pb-10">
            <h1 className='inline-block border-l-8 border-gray-400 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl'>
                Location to Visit
            </h1>
            <div className='rounded-xl'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.731941246931!2d7.343646710412829!3d5.146787594808913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429b28183a1039%3A0xe2c4147a10dffab7!2sAbia%20State%20University%20Teaching%20Hospital%20(ABSUTH)!5e0!3m2!1sen!2sng!4v1710713194569!5m2!1sen!2sng" 
                    frameBorder="0"
                    width="100%"
                    height="360"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ borderRadius: "20px" }}
                    
                >
                </iframe>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
