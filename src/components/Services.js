import React, { useRef } from 'react';

// components
import Details from './Details';

// framer motion
import { motion, useScroll } from 'framer-motion';

// variants
import { fadeIn } from "../variants";

const services = [
  {
    position: "Software Developer",
    company: "Hecta-Infotech",
    companyLink: "https://hectainfotech.com/",
    time: `July'23 - Present`,
    address: "Ahmedabad, Gujarat",
    work: "Worked on building and enhancing both front-end and back-end components of various projects. Developed RESTful APIs, implemented responsive user interfaces, and integrated third-party libraries."
  },
  {
    position: "Full-Stack Developer",
    company: "CoolHax Labs",
    companyLink: "http://www.coolhaxlabs.com/",
    time: `May'23 - June'23`,
    address: "Banglore, Karnataka",
    work: "Contributed to the development of web applications using technologies such as MERN-Stack, Next.JS, Tailwind CSS. Collaborated with a team of developers to implement new features and improve existing codebase."
  },
]

const Services = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"],
    }
  );

  return (
    <section className='section' id='services'>

      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row'>

          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>

            <h2 className='h2 text-accent mb-6'>
              What I Do.
            </h2>

            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Fresher
            </h3>

            <button className='btn btn-sm'>
              See My Work
            </button>

          </motion.div>

          {/* services */}
          <div className='flex-1'>

            {/* services list */}
            <div ref={ref} className='relative'>

              <motion.div
                style={{ scaleY: scrollYProgress }}
                className='absolute top-0 left-4 lg:left-9 bg-white h-full w-[4px] origin-top'
              />

              <ul className='w-full ml-2 lg:ml-8'>

                {
                  services.map((service, index) => {
                    return (
                      <span key={index}>
                        <Details
                          position={service.position}
                          company={service.company}
                          companyLink={service.companyLink}
                          time={service.time}
                          address={service.address}
                          work={service.work}
                        />
                      </span>

                    )
                  })
                }

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Services;
