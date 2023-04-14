'use client'
import useColorStore from '@/global/useColorStore'
import useExportCodeCss from '@/global/useExportCodeCss'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import useCopy from '../hook/useCopy'

const ExportCodeCss = () => {
    const { paletteColors } = useColorStore()
    const [code, setCode] = useState('')
    const { setIsVisibleExportCode } = useExportCodeCss()
    const [copy, setCopy] = useCopy()
    useEffect(() => {
        setCode(() => {
            return ':root{\n' + paletteColors?.map((e, index) => `\t--color-${index}: ${e.color};`).join('\n') + '\n}'
        })
    }, [paletteColors])


    return (
        <motion.div style={{ zIndex: '5' }} initial={{ y: 1000 }} animate={{ y: 0, transition: { type: 'keyframes' } }} exit={{ y: 1000 }} className='fixed w-full h-screen bottom-0 left-0 flex justify-center items-end' >
            <div style={{ zIndex: '4' }} onClick={() => setIsVisibleExportCode(false)} className='h-screen w-full fixed top-0 left-0'></div>
            <div style={{ zIndex: '5' }} className='w-7/12 h-96 bg-white rounded-t-3xl p-4 shadow-2xl relative'>
                <button className='absolute top-8 right-8 text-sm px-2 bg-gray-500 rounded-md text-gray-200 hover:scale-105 active:scale-95' onClick={() => setCopy(code)}>Copiar</button>
                <code className=' w-full h-64 bg-slate-700 rounded-3xl p-3 text-gray-300 z-30 block whitespace-pre-wrap overflow-y-auto'>{code}</code>
            </div>
        </motion.div >
    )
}

export default ExportCodeCss