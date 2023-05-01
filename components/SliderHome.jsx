'use client'
import React, { useEffect, useState } from 'react'
import useInterval from '@/hook/useInterval'
import { AnimatePresence } from 'framer-motion'
import GeneratePalette from './SliderPages/GeneratePalette'
import GenerateMesh from './SliderPages/GenerateMesh'
import GenerateGradient from './SliderPages/GenerateGradient'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'

export const SLIDER_DIV = [
    <GeneratePalette />,
    <GenerateGradient />,
    <GenerateMesh />,
]

const SliderHome = () => {
    const [slider] = useState(SLIDER_DIV)
    const [slideIndex, setSlideIndex] = useState(0)
    useInterval(() => {
        handleNextSlider()
    }, 10000)

    const handleNextSlider = () => {
        if (slider.length - 1 == slideIndex) {
            setSlideIndex(0)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }
    const handleFormerSlider = () => {
        if (slideIndex == 0) {
            setSlideIndex(slider.length - 1)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    /* useEffect(() => {
        console.log(slideIndex)
    }, [slideIndex]) */
    return (
        <AnimatePresence mode="wait">
            <div className='h-full w-full bg-gradient-to-br from-transparent to-white relative  backdrop-blur-3xl'>
                <button onClick={handleFormerSlider} className='absolute left-10 top-1/2 p-4 hover:bg-gray-50'><HiArrowLongLeft size={20} /></button>
                <button onClick={handleNextSlider} className='absolute right-10 top-1/2 p-4 hover:bg-gray-50'><HiArrowLongRight size={20} /></button>
                {slider[slideIndex]}
            </div>
        </AnimatePresence>
    )
}

export default SliderHome