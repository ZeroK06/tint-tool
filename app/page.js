'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBarDashboard from '@/components/NavBarDashboard'
import useInterval from '@/hook/useInterval'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Slide from '@/components/Slide'
const inter = Inter({ subsets: ['latin'] })
const SLIDER_DIV = [
  {
    id: 0,
    name: 'Generador de paleta de colores',
    title: '',
  },
  {
    id: 1,
    name: 'Generador de gradientes',
    title: '',
  },
  {
    id: 2,
    name: 'Generador de Mesh',
    title: '',
  },
  {
    id: 3,
    name: 'Imagen a paleta',
    title: '',
  },
]

export default function Home() {
  const [slider, setSlider] = useState(SLIDER_DIV)
  const [slideIndex, setSlideIndex] = useState(0)
  useInterval(() => {
    handleNextSlider()
  }, 5000)

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
    <>
      <NavBarDashboard />
      <main style={{ height: 'calc(100vh - 80px)' }} className="bg-gray-400">
        <button onClick={handleNextSlider}>{'>'}</button>
        <button onClick={handleFormerSlider}>{'<'}</button>
        <div className="slider">
          <Slide data={slider[slideIndex]} key={slider[slideIndex].id}></Slide>
        </div>
      </main>
    </>
  )
}
