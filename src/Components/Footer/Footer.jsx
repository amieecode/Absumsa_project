import React from 'react';
import { FaFacebook, FaInstagram, FaSquareXTwitter, FaTiktok } from 'react-icons/fa6';


const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];


const Footer = () => {
  return (
    <div className='text-white'>
        <div className="bg-gradient-to-r from-primary to-secondary min-h-[400px]">
            <div className="container grid md:grid-cols-3 pb-20 pt-5">
                {/* Company details*/}
                <div className='py-8 px-4'>
                    <a 
                        href="#" 
                        className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive'
                    >
                        {" "}
                        ABSUMSA
                    </a>
                    <p className='pt-4'>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Cupiditate consequuntur pariatur alias.
                        
                    </p>
                  
                </div>

                {/* Footer Link*/}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    {/*First col Link*/}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>
                            Footer Links
                        </h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a 
                                        href={data.link}
                                        className='inline-block hover:scale-105 duration-200'
                                    >
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*Second col link*/}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>
                            Quick Links
                        </h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a 
                                        href={data.link}
                                        className='inline-block hover:scale-105 duration-200'
                                    >
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*Company Address Section*/}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
                        <div>
                            <p className='mb-3'>Abia State University teaching hospital Aba, Abia State</p>
                            <p>+234 9013721790</p>

                            {/*Social Link*/}
                            <div className='space-x-3 mt-6'>
                                <a href='https://www.facebook.com/ABSUMSA'>
                                    <FaFacebook className='text-3xl inline-block hover:scale-105 duration-200'/>
                                </a>
                                <a href='https://x.com/OfficialABSUMSA?t=6-wBUb_A00PHEDQjxrOxNg&s=09'>
                                    <FaSquareXTwitter className='text-3xl inline-block hover:scale-105 duration-200'/>
                                </a>
                                <a href='https://www.instagram.com/absumsa?igsh=MzRlODBiNWFlZA=='>
                                    <FaInstagram className='text-3xl inline-block hover:scale-105 duration-200'/>
                                </a>
                                <a href=''>
                                    <FaTiktok className='text-3xl inline-block hover:scale-105 duration-200'/>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Footer;
