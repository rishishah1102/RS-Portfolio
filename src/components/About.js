import React from 'react';

// countup
// import CountUp from 'react-countup';

// progress bar
import ProgressBar from "@ramonak/react-progress-bar";

// icons
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

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
            <h2 className='h2 text-accent mb-12'>Skills.</h2>

            {/* <h3 className='h3 mb-4'>Lorem ipsum dolor</h3> */}

            {/* <p className='mb-6'>
              Here are my skills
            </p> */}

            <div className='flex flex-col items-start gap-x-6 lg:gap-x-10 mb-12'>

              <motion.div
                variants={fadeIn('down', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='flex flex-col justify-start items-center relative mb-9'
              >

                <div className='flex justify-start items-center text-xl text-gradient'>
                  <span className='text-accent'><FaHtml5 /></span> <h4 className='h4 ml-2 font-semibold'>HTML</h4>
                </div>

                {/* Progress Bar */}
                <ProgressBar
                  completed={inView ? 80 : 0}
                  transitionDuration='3s'
                  height='12px'
                  className='absolute top-9 left-1 w-[80vw] sm:w-[400px]'
                  animateOnRender
                  customLabel=' '
                  baseBgColor='#e0e0de'
                  bgColor='#974EC3'
                />

              </motion.div>

              <motion.div
                variants={fadeIn('down', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='flex flex-col justify-start items-center relative mb-9'
              >

                <div className='flex justify-start items-center text-xl text-gradient'>
                  <span className='text-accent'><FaCss3Alt /></span> <h4 className='h4 ml-2 font-semibold'>CSS</h4>
                </div>

                {/* Progress Bar */}
                <ProgressBar
                  completed={inView ? 75 : 0}
                  transitionDuration='3s'
                  height='12px'
                  className='absolute top-9 left-1 w-[80vw] sm:w-[400px] '
                  animateOnRender
                  customLabel=' '
                  baseBgColor='#e0e0de'
                  bgColor='#974EC3'
                />

              </motion.div>

              <motion.div
                variants={fadeIn('down', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='flex flex-col justify-start items-center relative mb-9'
              >

                <div className='flex justify-start items-center text-xl text-gradient'>
                  <span className='text-accent'><IoLogoJavascript /></span> <h4 className='h4 ml-2 font-semibold'>Java-Script</h4>
                </div>

                {/* Progress Bar */}
                <ProgressBar
                  completed={inView ? 70 : 0}
                  transitionDuration='3s'
                  height='12px'
                  className='absolute top-9 left-1 w-[80vw] sm:w-[400px] '
                  animateOnRender
                  customLabel=' '
                  baseBgColor='#e0e0de'
                  bgColor='#974EC3'
                />

              </motion.div>

              <motion.div
                variants={fadeIn('down', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='flex flex-col justify-start items-center relative mb-9'
              >

                <div className='flex justify-start items-center text-xl text-gradient'>
                  <span className='text-accent'><FaReact /></span> <h4 className='h4 ml-2 font-semibold'>React</h4>
                </div>

                {/* Progress Bar */}
                <ProgressBar
                  completed={inView ? 70 : 0}
                  transitionDuration='3s'
                  height='12px'
                  className='absolute top-9 left-1 w-[80vw] sm:w-[400px] '
                  animateOnRender
                  customLabel=' '
                  baseBgColor='#e0e0de'
                  bgColor='#974EC3'
                />

              </motion.div>

              <motion.div
                variants={fadeIn('down', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='flex flex-col justify-start items-center relative mb-9'
              >

                <div className='flex justify-start items-center text-xl text-gradient'>
                  <span className='text-accent'><TbBrandNextjs /></span> <h4 className='h4 ml-2 font-semibold'>NextJS</h4>
                </div>

                {/* Progress Bar */}
                <ProgressBar
                  completed={inView ? 50 : 0}
                  transitionDuration='3s'
                  height='12px'
                  className='absolute top-9 left-1 w-[80vw] sm:w-[400px] '
                  animateOnRender
                  customLabel=' '
                  baseBgColor='#e0e0de'
                  bgColor='#974EC3'
                />

              </motion.div>

              <motion.div
                variants={fadeIn('down', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='flex flex-col justify-start items-center relative mb-9'
              >

                <div className='flex justify-start items-center text-xl text-gradient'>
                  <span className='text-accent'><TbBrandTailwind /></span> <h4 className='h4 ml-2 font-semibold'>Tailwind</h4>
                </div>

                {/* Progress Bar */}
                <ProgressBar
                  completed={inView ? 60 : 0}
                  transitionDuration='3s'
                  height='12px'
                  className='absolute top-9 left-1 w-[80vw] sm:w-[400px] '
                  animateOnRender
                  customLabel=' '
                  baseBgColor='#e0e0de'
                  bgColor='#974EC3'
                />

              </motion.div>

            </div>

            {/* Stats */}
            {/* <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

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

            </div> */}

            {/* <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex gap-x-8 items-center'>

              <button className='btn btn-lg'>Contact Me</button>
              <a href="/" className='btn-link text-gradient'>My Resume</a>

            </motion.div> */}

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;
