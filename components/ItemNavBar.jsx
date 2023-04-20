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
                <TfiAngleDown />
            </label>
            {
                isActive && (
                    <AnimatePresence mode='wait'>
                        <motion.div style={{ minWidth: '200px', gridTemplateColumns: 'repeat(3,200px)' }} initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { type: 'keyframes', duration: 0.3 } }}
                            exit={{ y: 100, opacity: 0 }}
                            className="absolute left-0 top-20 p-3 bg-white gap-1  shadow-2xl shadow-gray-300 rounded-md grid">
                            {items.map((element, index) => (
                                <label style={{ width: '200px' }} className='px-2 py-1 ' key={index}>{element.name}</label>
                            ))}
                            aaaaaaaaaa
                        </motion.div>
                    </AnimatePresence>
                )
            }
        </div >
    )
}

export default ItemNavBar
