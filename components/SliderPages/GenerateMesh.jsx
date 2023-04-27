'use client'
import { motion } from 'framer-motion'
import React from 'react'


export const title = 'Paletas de colores'


const GenerateMesh = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            {title.split('').map((letter, i) => <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.01, ease: [0.2, 0.65, 0.3, 0.9] } }}
                key={i}
                className='text-6xl font-extrabold uppercase text-red-600'
            >
                {letters}
            </motion.span>)}
        </div>
    )
}

export default GenerateMesh