import React, { useRef } from 'react'

// import components
import LiIcon from './LiIcon'

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from "../variants";

function Details({ position, company, companyLink, time, address, work }) {

  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mt-0 mx-auto flex flex-col justify-between'
    >

      <LiIcon reference={ref} />

      <motion.div
        variants={fadeIn('down', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='ml-9'>

        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;
          <a className='text-accent capitalize' href={companyLink}>@{company}</a>
        </h3>

        <span className=' capitalize font-medium text'>
          {time} | {address}
        </span>

        <p className='font-medium w-full'>
          {work}
        </p>

      </motion.div>

    </li>
  )
}

export default Details