'use client'

import { variantsLetter } from '@/lib/letter'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { variants } from '../lib/animate'


const Slide = ({ data }) => {
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                variants={variants}
                initial='initial'
                animate='animate'
            >
                {data.name.split('').map((letter, index) =>
                    <motion.span
                        variants={variantsLetter}
                        key={index}
                        initial="initial"
                        animate='animate'
                        exit="exit"
                    >
                        {letter}
                    </motion.span>)}
            </motion.div>
        </AnimatePresence>
    )
}

export default Slide