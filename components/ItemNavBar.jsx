'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { TfiAngleDown } from 'react-icons/tfi'


const ItemNavBar = ({ items, name, uri }) => {
    const drop = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const itemMenu = useRef(null)
    useEffect(() => {
        const handlerMouseDown = (e) => {
            if (!drop.current.contains(e.target)) {
                setIsActive(false)
            }

        }
        document.addEventListener('mousedown', handlerMouseDown)

        return () => {
            document.removeEventListener('mousedown', handlerMouseDown)

        }
    }, [])
    return (
        <div ref={drop} className={`relative ${isActive ? 'activeDrop' : 'disActiveDrop'}`} >
            <label ref={itemMenu}
                className="group cursor-pointer py-4 px-2 relative text-sm font-semibold flex justify-center transition-colors items-center gap-3  hover:text-orange-500"
                onClick={() => setIsActive(!isActive)}
            >
                {name}
                <TfiAngleDown style={{ transform: `rotate(${isActive ? '180deg' : '0deg'})` }} className='transition-transform' />
            </label>
            {
                isActive && (
                    <AnimatePresence mode='wait'>
                        <motion.div style={{ minWidth: '200px', gridTemplateColumns: '1fr' }} initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { type: 'keyframes', duration: 0.3 } }}
                            exit={{ y: -100, opacity: 0 }}
                            className="absolute left-0 top-20 p-3 z-50 bg-white gap-2  shadow-2xl shadow-gray-300 rounded-3xl grid">
                            {items.map((element, index) => (
                                <label style={{ width: '300px', minHeight: '60px' }} className='flex gap-5 justify-start items-center px-5 py-2 rounded-lg hover:bg-orange-50 transition' key={index}>
                                    <img src="/icon-nav.svg" alt="" className='h-12' />
                                    <div className='flex flex-col'>
                                        <span className='font-bold text-sm text-gray-600'>{element.name}</span>
                                        <span className='font-normal text-sm text-gray-400'>{element.descrip}Es una herramienta la cual facilita la...</span>
                                    </div>
                                </label>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                )
            }
        </div >
    )
}

export default ItemNavBar
