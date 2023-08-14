import React from 'react';

// images
// import Image from "../assets/avatar.svg";
import Image from "../assets/avatar4.png";

// icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// type animation
import { TypeAnimation } from 'react-type-animation';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (

    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>

      <title>RS-Portfolio</title>

      <div className="container mx-auto">

        <div className='flex flex-col-reverse gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>

            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-black leading-[0.8] lg:text=[110px]'
            >
              <span>Shah</span> Rishabh,
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1]'
            >

              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Full-Stack Dev', 2000,
                  'Software Dev', 2000,
                  'Free Lancer', 2000
                ]}
                speed={50}
                className='text-blue-400'
                wrapper='span'
                repeat={Infinity}
              />

            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis eum repudiandae est nobis cum obcaecati. Obcaecati perferendis optio officia.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

              <button className='btn btn-lg'>Contact Me</button>
              <a href="/" className='btn-link text-gradient'>My Resume</a>

            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn('right', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-4 max-w-max mx-auto lg:mx-0 pl-4'
            >
              <span className=' relative bottom-4 hover:h-10 hover:w-10 flex justify-center items-center transition-all duration-300 rounded-full hover:bg-gradient-to-r from-pink-600 via-purple-600 to-blue-400'>
                <a href="https://github.com/rishishah1102" target='_blank' rel='noreferrer'><FaGithub /></a>
              </span>
              <span className=' relative bottom-4 hover:h-10 hover:w-10 flex justify-center items-center transition-all duration-300 rounded-full hover:bg-gradient-to-r from-pink-600 via-purple-600 to-blue-400'>
                <a href="https://www.linkedin.com/in/rishabh-shah-256b30247/" rel='noreferrer' target='_blank'><FaLinkedin /></a>
              </span>
              <span className=' relative bottom-4 hover:h-10 hover:w-10 flex justify-center items-center transition-all duration-300 rounded-full hover:bg-gradient-to-r from-pink-600 via-purple-600 to-blue-400'>
                <a href="https://www.instagram.com/riishhiiiii/" rel='noreferrer' target='_blank'><FaInstagram /></a>
              </span>
            </motion.div>

          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className='lg:flex flex-1 mx-auto max-w-[320px] lg:max-w-[400px]'>
            <img src={Image} alt='Profile' />
          </motion.div>

        </div>

      </div>

    </section>

  );
};

export default Banner;
