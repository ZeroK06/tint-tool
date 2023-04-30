'use client'
import { randomColor } from '@/services/colorRandom'
import { motion } from 'framer-motion'
import React from 'react'


export const title = 'Generador de mesh'


const GenerateMesh = () => {
    return (
        <div className='w-full h-full flex justify-center items-center flex-col gap-12'>
            <div className="title flex h-52">
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
            <div className='w-full grid grid-cols-5 gap-3'>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((e, index) => <div key={index * 5} className='rounded-xl h-44 w-full border relative' style={{ background: randomColor(), translateY: `${index * 40}px` }}></div>)}
            </div>
        </div >
    )
}

export default GenerateMesh