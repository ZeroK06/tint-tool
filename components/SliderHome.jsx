import React, { useEffect, useState } from 'react'
import useInterval from '@/hook/useInterval'
import { AnimatePresence } from 'framer-motion'
import GeneratePalette from './SliderPages/GeneratePalette'
import GenerateMesh from './SliderPages/GenerateMesh'

export const SLIDER_DIV = [
    <GeneratePalette />,
    <GenerateMesh />
]

const SliderHome = () => {
    const [slider] = useState(SLIDER_DIV)
    const [slideIndex, setSlideIndex] = useState(0)
    useInterval(() => {
        handleNextSlider()
    }, 3000)

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

    useEffect(() => {
        console.log(slideIndex)
    }, [slideIndex])
    return (
        <AnimatePresence mode="wait">
            <div className='h-full w-full'>
                {slider[slideIndex]}
            </div>
        </AnimatePresence>
    )
}

export default SliderHome