import React from 'react';
import { Link } from "react-router-dom";

const navbarLinks =[
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Events",
    link: "/events",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blogs",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 6,
    name: "Student Resources",
    link: "/resources",
  },
]

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`${ showMenu ? "left-0": "-left-[100%]"} fixed bottom-0 top-0 z-10 flex h-screen w-[75%] flex-col justify-between bg-white
                dark:text-white px-8 pb-6 pt-12 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
        {/* Nav Section*/}
        <div className='text-black mt-4'>
        <ul className="space-y-4  text-xl">
          {navbarLinks.map((data, index) => (  // Use index for key
            <li key={index}>
              <Link
                to={data.link}
                onClick={() => setShowMenu(false)}
                className='mb-5 inline-block'
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default ResponsiveMenu;
