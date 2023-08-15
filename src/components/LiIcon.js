import React from 'react'

import { motion, useScroll } from "framer-motion";

function LiIcon({ reference }) {

    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"],
    })

    return (
        <figure className='absolute left-0 stroke-white'>

            <svg className='' width='50' height='50' viewBox='0 0 100 100'>

                <motion.circle cx='75' cy='50' r='20' className='stroke-white stroke-1 fill-none' />
                <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] fill-black-60' style={{ pathLength: scrollYProgress }} />
                <motion.circle cx='75' cy='50' r='10' className='stroke-1 animate-pulse fill-blue-600' />

            </svg>

        </figure>
    )
}

export default LiIcon