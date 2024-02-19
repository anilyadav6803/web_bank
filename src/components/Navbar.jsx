import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    console.log('Toggling sidebar...');
    setToggle((prevToggle) => {
      const newToggle = !prevToggle;
      console.log('New toggle state:', newToggle);
      return newToggle;
    });
  };

  return (
    <div>
      <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav) => (
            <li key={nav.id} className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10'>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={toggleSidebar}
          />
        </div>

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl`}
        >
          { <ul className="list-none    justify-end items-center flex-1">
            {navLinks.map((nav,index) => (
              <li
                key={nav.id}
                className={`font-poppins  lg:hidden font-normal cursor-pointer text-[16px]
                 ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white mb-4 mr-0`}            >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
