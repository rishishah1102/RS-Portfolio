import React from 'react';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from "../variants";

// images
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

const Work = () => {

  return (
    <section className='section' id='work'>
      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row gap-x-10'>

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0'
          >

            {/* text */}
            <div>

              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Projects
              </h2>

              <p className='max-w-sm mb-8'>
              Explore a collection of my recent projects, highlighting my skills as a versatile developer. From messaging apps to Netflix Clone, discover my diverse work.
              </p>

              <button className='btn btn-lg'><a href='https://github.com/rishishah1102'>View All Projects</a></button>

            </div>

            {/* image */}
            <a href={`https://rs-chatweb.netlify.app/`} rel='noreferrer' target='_blank' className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'>

              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="Project-1" />

              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>RS-CHAT</span>
              </div>

              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-white text-3xl'>Whatsapp Clone</span>
              </div>

            </a>

          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12'
          >

            <a href={`https://rs-flix.netlify.app/`} rel='noreferrer' target='_blank' className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'>

              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="Project-1" />

              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>RS-Flix</span>
              </div>

              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-white text-3xl'>Netflix Clone</span>
              </div>

            </a>

            <a href={`https://rs-keep.netlify.app/`} rel='noreferrer' target='_blank' className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'>

              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="Project-1" />

              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>RS-Keep</span>
              </div>

              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-white text-3xl'>Google-Keep Clone</span>
              </div>

            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Work;
