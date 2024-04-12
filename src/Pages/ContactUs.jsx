import React from 'react';
import Location from '../Components/Location/Location';
import { FaFacebook, FaInstagram, FaSquareXTwitter, FaTiktok } from 'react-icons/fa6';
import { MdEmail, MdSocialDistance, MdOutlineLocalPhone, MdOutlineLocationOn } from "react-icons/md";


const ContactUs = () => {
  return (
    <div>
        <div className='mt-20'>
            {/* Contact Form*/}
            <section className='py-16 bg-gray-100'>
                <div className='max-w-6xl mx-auto p-4 md:p-16 xl:p-20 bg-white shadow-sm'>
                    <div className='lg:w-2/3 space-y-3 text-center mx-auto'>
                        <h1 className='text-gray-800 uppercase tracking-wider font-medium text-4xl'>
                            Send Us Your Message
                        </h1>
                        <div className='bg-secondary w-16 mx-auto h-0.5'></div>
                        <p className='text-gray-400 leading-4 text-base'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, deserunt consectetur voluptatem, 
                            praesentium atque nobis quis! 
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14'>
                        
                        {/* Info section*/}
                        <div>
                             {/* Address section*/}
                            <div className='mb-6'>
                                <div className='flex items-center gap-3'>
                                    <MdOutlineLocalPhone className='h-10 w-10 shadow-sm p-3 rounded-full bg-secondary/50'/>
                                    <span className='text-base font-medium'>
                                         Phone Number
                                    </span>
                                </div>
                                <p className='text-gray-400 ml-12 text-sm font-medium'>
                                    +234 9013721790
                                </p>
                            </div>   
                            {/* Email Address*/}
                            <div className='mb-6'>
                                <div className='flex items-center gap-3'>
                                    <MdEmail  className='h-10 w-10 shadow-sm p-3 rounded-full bg-secondary/40'/>
                                    <span className='text-base font-medium'>
                                        Email Address
                                    </span>
                                </div>   
                                <p className='text-gray-400 ml-12 text-sm font-medium'>
                                    support@absumsa.com
                                </p>
                            </div>
                            {/* Location Section*/}
                            <div className='mb-6'>
                                <div className='flex items-center gap-3'>
                                    <MdOutlineLocationOn className='h-10 w-10 shadow-sm p-3 rounded-full bg-secondary/30' />
                                    <span className='text-base font-medium'>
                                        Location
                                    </span>
                                </div>    
                                <p className='text-gray-400 ml-12 text-sm font-medium'>
                                    Abia State University teaching hospital Aba, Abia State
                                </p>
                            </div>
                            {/*Social link*/}
                            <div className='mb-6'>
                                <div className='flex items-center gap-3'>
                                    <MdSocialDistance className='h-10 w-10 shadow-sm p-3 rounded-full bg-secondary/25'/>                                     
                                    <span className='text-base font-medium mb-2 '>
                                         Our Socials
                                    </span>
                                </div>
                                <div className='space-x-3 mt-3 ml-12'>
                                    <a href='https://www.facebook.com/ABSUMSA'>
                                        <FaFacebook className='text-2xl inline-block hover:scale-125 duration-300'/>
                                    </a>
                                    <a href='https://x.com/OfficialABSUMSA?t=6-wBUb_A00PHEDQjxrOxNg&s=09'>
                                        <FaSquareXTwitter className='text-2xl inline-block hover:scale-125 duration-300'/>
                                    </a>
                                    <a href='https://www.instagram.com/absumsa?igsh=MzRlODBiNWFlZA=='>
                                        <FaInstagram className='text-2xl inline-block hover:scale-125 duration-300'/>
                                    </a>
                                    <a href='https://www.tiktok.com/@absumsa5'>
                                        <FaTiktok className='text-2xl inline-block hover:scale-125 duration-300'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-2'>
                            <form action="" method="">
                                <div className='space-y-6'>
                                    <h1 className='font-bold uppercase text'>Let hear from you</h1>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        {/* Name Label*/}
                                        <label htmlFor="name" className='sr-only'>Name</label>
                                        <input 
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder='Enter Your Name' 
                                            className='form-input'>
                                        </input>
                                        {/* Email Label*/}
                                        <label htmlFor="email" className='sr-only'>Email</label>
                                        <input 
                                            id="email"
                                            type="email"
                                            name="name"
                                            placeholder='Enter Your Email Address' 
                                            className='form-input'>
                                        </input>
                                        {/* Phone Number Label*/}
                                        <label htmlFor="phone" className='sr-only'>Phone Number</label>
                                        <input 
                                            id="tel"
                                            type="tel"
                                            name="phone"
                                            placeholder='Enter Your Phone Number' 
                                            className='form-input'>
                                        </input>
                                        {/* Subject Label*/}
                                        <label htmlFor="subject" className='sr-only'>Subject</label>
                                        <input 
                                            id="subject"
                                            type="text"
                                            name="subject"
                                            placeholder='Enter Your Subject' 
                                            className='form-input'>
                                        </input>
                                    </div>
                                       {/* Message Textarea Label*/}
                                       <label htmlFor="message" className='sr-only'>Message</label>
                                        <textarea 
                                            id="message"
                                            type="message"
                                            name="message"
                                            placeholder='Enter Your Messages' 
                                            row="5"
                                            className='form-input'
                                        >
                                        </textarea>
                                        {/* Button Label*/}
                                        <div className='text-right'>
                                            <input
                                                id="submit"
                                                type="submit"
                                                name="send"
                                                className='brand-button'
                                                value="Send Message"
                                            >
                                        </input>
                                        </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
        <Location />
    </div> 
  );
};

export default ContactUs;
  