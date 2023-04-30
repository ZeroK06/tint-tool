'use client'
import React from 'react'
import { motion } from 'framer-motion'

export const title = 'Paleta de colores'


const GeneratePalette = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className="title flex">
                {title.split('').map((letter, i) => letter != ' ' ? < motion.span
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.01, ease: [0.2, 0.65, 0.3, 0.9] } }}
                    key={i}
                    className='text-6xl font-extrabold uppercase text-red-600'
                >
                    {letter}
                </motion.span> : <span className='text-6xl font-extrabold uppercase text-red-600'>&nbsp;</span>)
                }
            </div>
        </div >
    )
}

export default GeneratePalette