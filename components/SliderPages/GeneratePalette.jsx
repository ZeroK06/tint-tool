'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { randomColor } from '@/services/colorRandom'

export const title = 'Paleta de colores'


const GeneratePalette = () => {
    return (
        <div className='w-full h-full flex justify-between items-center flex-col gap-12'>
            <div className="title flex flex-col h-96 items-center justify-center">
                <motion.span initial={{ y: -100, opacity: 0 }} animate={{ opacity: 1, y: 0, transition: { ease: [0.2, 0.65, 0.3, 0.9] } }} className='font-extrabold text-7xl text-slate-800'>PALETA DE</motion.span>
                <motion.span initial={{ y: -100, opacity: 0 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] } }} className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>COLORES</motion.span>
            </div>

            <motion.div initial={{ y: 200, opacity: 0 }} animate={{ opacity: 1, y: 0, transition: { ease: [0.2, 0.65, 0.3, 0.9] } }} className='w-full grid grid-cols-7 gap-6 h-96'>
                {[0, 0, 0, 0, 0, 0, 0].map((row, index) => <div key={index} className='w-full h-full rounded-full relative flex flex-col gap-8' style={{ top: Math.floor(Math.random() * 200 - 200) }}>
                    <div className='w-full rounded-full' style={{ backgroundColor: randomColor(), aspectRatio: '2/3' }}></div>
                    <div className='w-full aspect-square rounded-full' style={{ backgroundColor: randomColor() }}></div>
                </div>)}
            </motion.div>
        </div >
    )
}

export default GeneratePalette