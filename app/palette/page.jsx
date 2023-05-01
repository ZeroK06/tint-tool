'use client'
import Button from '@/components/Button'
import ColorItem from '@/components/ColorItem'
import useColorStore from '@/global/useColorStore'
import { generatePalette } from '@/services/generatePalette'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'


const page = () => {
    const { paletteColors, setAllColorGenerate, addColor } = useColorStore(state => state)
    useEffect(() => {
        setAllColorGenerate()
    }, [])
    return (
        <div className='flex justify-center items-center h-full bg-gray-100 flex-col gap-5'>
            <motion.div
                layout='preserve-aspect'
                className='flex flex-row gap-6'>
                {paletteColors?.map(({ color, id }) => (
                    <ColorItem color={color} identif={id} key={id} />
                ))}
            </motion.div>
            <Button onClick={() => { addColor(generatePalette({ empty: false, number: 1 })[0]) }} className="bg-white"><BsPlus size={20} color='#696969' /></Button>
        </div>
    )
}

export default page