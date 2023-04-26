'use client'
import React from 'react'
import { motion } from 'framer-motion'

export const title = 'Generador de mesh'


const GeneratePalette = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            {title.split(' ').map((e, i) => <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.01, ease: [0.2, 0.65, 0.3, 0.9] } }}
                key={i}
                className='text-5xl font-extrabold uppercase'
            >
                {e}
            </motion.span>)}
        </div>
    )
}

export default GeneratePalette