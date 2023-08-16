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
            className='flex-1 bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>

            <h2 className='h2 text-accent mb-16 lg:mb-[6rem]'>
              My Career
            </h2>

            <div>

              <h3 className='h3 max-w-[455px] mb-6'>
                Education
              </h3>

              <div className="relative">

                <motion.div
                  style={{ scaleY: scrollYProgress }}
                  className='absolute top-0 left-4 lg:left-9 bg-white h-full w-[4px] origin-top'
                />

                <ul className='w-full ml-2 lg:ml-8'>

                  <Details
                    position={"BE ' Information Technology"}
                    company={"L.D. College Of Engineering"}
                    companyLink={"https://ldce.ac.in/"}
                    time={"2020-2024"}
                    address={"Ahmedabad, Gujarat"}
                    work={"Completed a comprehensive curriculum including courses on algorithms, data structures, " +
                    "web development, and software engineering principles. Collaborated with peers on group projects, " + 
                    "enhancing teamwork and communication skills."}
                  />

                </ul>

              </div>

            </div>

            {/* <button className='btn btn-sm'>
              See My Work
            </button> */}

          </motion.div>

          {/* services */}
          <div className='flex-1'>

            <h3 className='h3 max-w-[455px] mb-6'>
              Experience
            </h3>

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
