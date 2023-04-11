'use client'
import React, { useEffect, useState } from 'react'
import useCopy from '../hook/useCopy'
import { HiOutlineClipboard, HiPencil } from 'react-icons/hi'
import { HiOutlineXMark } from 'react-icons/hi2'
import { Toaster, toast } from 'react-hot-toast'
import useColorStore from '@/global/useColorStore'
import useCustomColor from '@/global/useCustomColor'
import { motion } from 'framer-motion'

const ColorItem = ({ color, identif }) => {
    const [copy, setCopy] = useCopy()
    const [currentColor, setCurrentColor] = useState('')
    const { setColorState, setIsVisibleCustomColor } = useCustomColor()
    useEffect(() => {
        setCurrentColor(color)
    }, [])


    return (

        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='flex flex-col group gap-4 items-center relative'>
            <button style={{ zIndex: '1' }} className='absolute bg-red-500 rounded-full p-4 opacity-0 top-5  duration-300 group-hover:opacity-100 transition-all group-hover:-top-14 '><HiOutlineXMark size={20} color='#fff' /></button>
            <label htmlFor={`#color-${identif}`} className='group cursor-pointer z-10'>
                <div className='h-60 w-24 rounded-full  overflow-hidden' style={{ background: currentColor }}>
                    <div className='opacity-0 h-full w-full bg-gray-400 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-100 ' onClick={() => { setColorState({ color: currentColor, setColor: setCurrentColor }); setIsVisibleCustomColor(true) }}>
                        <HiPencil color='#fff' size={20} />
                    </div>
                </div>
            </label>
            <span className='uppercase font-medium'>{currentColor}</span>
            <div onClick={() => {
                setCopy(currentColor)
            }
            } className='w-24 cursor-pointer h-24 overflow-hidden group rounded-full shadow-xl shadow-gray-200 border-4 border-white' style={{ background: currentColor }}>
                <div className="flex justify-center items-center opacity-0 transition-all duration-300 group-hover:opacity-100 h-full w-full bg-gray-400 bg-opacity-50">
                    <HiOutlineClipboard color='#fff' size={20} />
                </div>
            </div>
            <Toaster position='bottom-center' />
        </motion.div>
    )
}

export default ColorItem