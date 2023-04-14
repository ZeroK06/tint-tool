'use client'
import useColorStore from '@/global/useColorStore'
import useExportCodeCss from '@/global/useExportCodeCss'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const ExportCodeCss = () => {
    const { paletteColors } = useColorStore()
    const [code, setCode] = useState('')
    const { setIsVisibleExportCode } = useExportCodeCss()
    useEffect(() => {
        setCode(() => {
            return ':root{\n' + paletteColors?.map((e, index) => `--color-${index}: ${e.color};`).join('\n') + '\n}'
        })
    }, [paletteColors])


    return (
        <motion.div style={{ zIndex: '5' }} className='fixed w-full h-screen bottom-0 left-0 flex justify-center items-end' >
            <div style={{ zIndex: '4' }} onClick={() => setIsVisibleExportCode(false)} className='h-screen w-full fixed top-0 left-0'></div>
            <div style={{ zIndex: '5' }} className='w-7/12 h-96 bg-white rounded-t-3xl p-4 shadow-2xl'>
                <div className='w-full h-52 bg-slate-700 rounded-3xl p-3 text-gray-300 z-30'>{code}</div>
            </div>
        </motion.div >
    )
}

export default ExportCodeCss