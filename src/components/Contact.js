import React from 'react';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contacts'>

      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row'>

          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-1 justify-start items-center'
          >

            <div>

              <h4 className='text-2xl uppercase text-accent
              font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>

              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's Work <br />
                together!
              </h2>

            </div>

          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6 items-start'
          >

            <input
              type='text'
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Your Name'
            />

            <input
              type='email'
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Your E-Mail'
            />

            <textarea
              type='email'
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
            />

            <button className='btn btn-lg'>Send Message</button>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
