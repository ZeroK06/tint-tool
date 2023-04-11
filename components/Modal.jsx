'use client'
import React, { useState } from 'react'

const Modal = ({ children }) => {
    const [isActive, setIsActive] = useState(true)
    return (
        <div className='fixed top-0 left-0 flex justify-center items-center h-screen w-full' style={{ opacity: isActive ? '1' : '0', zIndex: isActive ? '10' : '-1' }}>
            <div className='z-20'>
                {children}
            </div>
            <div className='w-full h-screen bg-slate-950 bg-opacity-50 backdrop-blur-sm absolute top-0 left-0' onClick={() => setIsActive(false)} ></div>
        </div>
    )
}

export default Modal