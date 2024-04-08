import { FaFacebook, FaInstagram, FaSquareXTwitter, FaTiktok } from 'react-icons/fa6';
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Contact Us",
        link: "/contact-us",
    },
    {
        title: "Blogs",
        link: "/blogs",
    },
    {
        title: "Student Resources",
        link: "/resources",
    },
];


const Footer = () => {
    const Year = new Date().getFullYear()
  return (
    
        <div className='text-white'> 
        {/* NewsLetter */}
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-400 py-7 '>
            <h1 className='lg:text-4xl md:text-3xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                <span 
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

            
        <div className="bg-gradient-to-r from-primary to-secondary min-h-[400px]">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
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
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>
                            Important Links
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
                    <div className='py-8 px-4 '>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
                        <div>
                            <div className='flex gap-3 mt-3'>
                                <FaLocationDot />
                                <p className='mb-3'>Abia State University teaching hospital Aba, Abia State</p>
                            </div>
                            <div className='flex items-center gap-3 mt-2'>
                                <FaPhoneVolume />
                                <p>+234 9013721790</p>
                            </div>
                            
                            {/*Social Link*/}
                            <div className='space-x-3 mt-6'>
                                <a href='https://www.facebook.com/ABSUMSA'>
                                    <FaFacebook className='text-3xl inline-block hover:scale-125 duration-300'/>
                                </a>
                                <a href='https://x.com/OfficialABSUMSA?t=6-wBUb_A00PHEDQjxrOxNg&s=09'>
                                    <FaSquareXTwitter className='text-3xl inline-block hover:scale-125 duration-300'/>
                                </a>
                                <a href='https://www.instagram.com/absumsa?igsh=MzRlODBiNWFlZA=='>
                                    <FaInstagram className='text-3xl inline-block hover:scale-125 duration-300'/>
                                </a>
                                <a href='https://www.tiktok.com/@absumsa5'>
                                    <FaTiktok className='text-3xl inline-block hover:scale-125 duration-300'/>
                                </a>
                                
                            </div>
                        </div>
                    </div>
            
            </div>
            <hr />
            <div className='grid grid-col-1 text-center pt-2 pb-8'>
                <h6 className="">&copy; Copyright {Year} Absumsa All Rights Reserved</h6>
            </div>
        </div>
    </div>
  );
};

export default Footer;
