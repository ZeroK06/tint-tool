'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { randomColor } from '@/services/colorRandom'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'



const GeneratePalette = () => {
    return (
        <div className='w-full h-full flex justify-center items-center flex-col gap-40'>
            <div style={{ height: '50vh' }} className="title flex flex-col items-center justify-end">
                <motion.span initial={{ y: -100, opacity: 0 }} animate={{ opacity: 1, y: 0, transition: { ease: [0.2, 0.65, 0.3, 0.9] } }} exit={{ y: -100, transition: { delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }, opacity: 0 }} className='font-extrabold text-6xl text-slate-800'>GENERADOR DE</motion.span>
                <motion.span initial={{ y: -100, opacity: 0 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] } }} className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-cyan-300'>GRADIANTES</motion.span>
                <motion.span initial={{ y: -100, opacity: 0 }} whileHover={{ scale: 1.05 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] } }}>
                    <Link href={'/gradient'} className='flex gap-4 items-center justify-center rounded-full px-6 py-3 bg-orange-500 font-medium text-white mt-8 shadow-2xl shadow-orange-400'>
                        Crear ahora <HiArrowRight />
                    </Link>
                </motion.span>
            </div>

            <motion.div initial={{ y: 200, opacity: 0 }} animate={{ opacity: 1, y: 0, transition: { ease: [0.2, 0.65, 0.3, 0.9], duration: 0.5 } }} className='w-5/6 mx-auto grid grid-cols-7 px-10 gap-10 h-96'>
                {[0, 0, 0, 0, 0, 0, 0].map((row, index) => <div key={index} className='w-full h-full relative flex flex-col gap-8' style={{ top: Math.floor(Math.random() * 150 - 150) }}>
                    <div className='w-full rounded-3xl' style={{ background: `linear-gradient(-45deg, ${randomColor()}, ${randomColor()})`, aspectRatio: '2/3' }}></div>
                    <div className='w-full aspect-square rounded-3xl' style={{ background: `linear-gradient(-45deg, ${randomColor()}, ${randomColor()})` }}></div>
                </div>)}
            </motion.div>
        </div >
    )
}

export default GeneratePalette