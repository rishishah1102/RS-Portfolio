import React from 'react';

// icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

// link
import { Link } from 'react-scroll';


const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>

      <div className='container mx-auto'>

        {/* Inner Nav */}
        <div className='w-full bg-black/20 h-[56px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white/50'>
          <Link 
            to='home' 
            className='cursor-pointer w-[56px] h-[56px] flex items-center justify-center'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BiHomeAlt />
          </Link>
          <Link 
            to='about' 
            className='cursor-pointer w-[56px] h-[56px] flex items-center justify-center'
            activeClass='active'
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>
          <Link 
            to='services' 
            className='cursor-pointer w-[56px] h-[56px] flex items-center justify-center'
            activeClass='active'
            smooth={true}
            spy={true}
          >
            <BsClipboardData />
          </Link>
          <Link 
            to='work' 
            className='cursor-pointer w-[56px] h-[56px] flex items-center justify-center'
            activeClass='active'
            smooth={true}
            spy={true}
          >
            <BsBriefcase />
          </Link>
          <Link 
            to='contacts' 
            className='cursor-pointer w-[56px] h-[56px] flex items-center justify-center'
            activeClass='active'
            smooth={true}
            spy={true}
          >
            <BsChatSquare />
          </Link>
        </div>

      </div>

    </nav>
  );
};

export default Nav;
