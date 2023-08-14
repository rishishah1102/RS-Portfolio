import React from 'react';

// countup
import CountUp from 'react-countup';

// intersection observer
import { useInView } from 'react-intersection-observer';

// motion
import { motion } from "framer-motion"

// variant
import { fadeIn } from '../variants';

const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <section className='section' id='about' ref={ref}>

      {/* <title>RS-Portfolio/About</title> */}

      <div className="container mx-auto">

        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          >
            {/* <img src="" alt="" /> */}
          </motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About Me.</h2>

            <h3 className='h3 mb-4'>I'm a Fresher</h3>

            <p className='mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab fugiat nisi id inventore sint eius libero ad illum ex?
            </p>

            {/* Stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

              <div className="">

                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView && <CountUp start={0} end={4} duration={5} />}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Internship <br />
                  Projects
                </div>

              </div>

              <div className="">

                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView && <CountUp start={0} end={5} duration={5} />}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Pojects<br />
                  Completed
                </div>

              </div>

              <div className="">

                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>

              </div>

            </div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex gap-x-8 items-center'>

              <button className='btn btn-lg'>Contact Me</button>
              <a href="/" className='btn-link text-gradient'>My Resume</a>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;
