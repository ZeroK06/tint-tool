'use client'
import useCustomColor from '@/global/useCustomColor'
import useCopy from '@/hook/useCopy'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
const EditColor = () => {
    const [copy, setCopy] = useCopy()
    const [currentColor, setCurrentColor] = useState('')
    const { color, setIsVisibleCustomColor } = useCustomColor()
    useEffect(() => {
        setCurrentColor(color.color)
    }, [color.color])
    useEffect(() => {
        color.setColor(currentColor)
    }, [currentColor])


    return (
        <motion.div initial={{ x: 500 }} animate={{ x: 0, transition: { type: 'keyframes' } }} exit={{ x: 500 }} className='h-screen w-full  fixed top-0 left-0'>
            <div className='h-full w-full fixed top-0 left-0' onClick={() => { setIsVisibleCustomColor(false) }}></div>
            <div className='flex flex-col gap-4 h-screen w-96 fixed top-0 right-0 shadow-2xl bg-white p-6'>
                <div className='h-20 w-full rounded-xl' style={{ background: currentColor }}></div>
                <HexColorPicker style={{ width: '100%' }} className='tracker-color' color={currentColor} onChange={setCurrentColor} />
                <span className='select-none w-full p-3 border-2 rounded-xl font-normal text-sm text-gray-500 text-center uppercase transition-transform cursor-pointer hover:scale-105 active:scale-95' onClick={(e) => { setCopy(e.target.textContent) }}>{currentColor}</span>
            </div>
        </motion.div >
    )
}

export default EditColor