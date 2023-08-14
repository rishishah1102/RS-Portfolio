import React from 'react';

// images
import Logo from "../assets/RS-Logo3.png"
// import Logo from "../assets/logo.svg"

const Header = () => {
  return (
    <header className='py-8'>

      <div className='container mx-auto'>

        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href='/'>
            <img src={Logo} alt='Logo' className='h-16 hover:translate-x-1 transition-all duration-300 ease-in-out' />
          </a>

          {/* btn */}
          <button className='btn btn-sm'>Hire Me</button>
        </div>

      </div>

    </header>
  );
};

export default Header;
