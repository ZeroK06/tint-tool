'use client'

import Wrap from '@/components/Wrap'
import { randomColor } from '@/services/colorRandom'
import React, { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'

const page = () => {
    const [colors, setColors] = useState([])
    const [isCompleteColors, setisCompleteColors] = useState(true)
    const [direction, setDirection] = useState(0)
    const [ruleCss, setRuleCss] = useState('')
    /* const handleRuleCss = ({ direction, colors = [] }) => {
        setRuleCss(`linear-gradient( ${direction ? direction + ',' : ''} ${colors.join(',')})`)
    }
*/
    const handleColorsAdd = () => {
        setColors([...colors, '#ffffff'])
        if (colors.length == 4) {
            setisCompleteColors(false)
        }
    }
    const handleColor = e => {
        console.log(e.target.getAttribute('color-position'))
    }
    useEffect(() => {
        setColors(() => ([randomColor(), randomColor()]))
    }, [])

    return (
        <div className="gradient-maker min-h-screen w-full selection:text-blue-500 selection:bg-slate-500 selection:bg-opacity-20">
            <Wrap>
                <h1 className='text-5xl font-black text-slate-600 text-center mt-14'> Creador de Gradiantes</h1>
                <p className='text-lg font-normal text-slate-500 text-center mt-4 mb-20'>Crear y exporta hermosas gradientes.</p>
                <section className='gradient grid grid-cols-2 gap-10 w-2/3 mx-auto select-none'>
                    <div className='controls border border-slate-300 rounded-2xl p-4'>
                        <div className="colors grid grid-cols-5 gap-4">
                            {colors?.map((color, index) => <div key={index} color-position={index} onClick={handleColor} className=' cursor-pointer border border-slate-200 p-1 rounded-lg h-10' style={{ background: color }}></div>)}
                            {isCompleteColors && <div onClick={handleColorsAdd} className='cursor-pointer border border-slate-200 p-1 rounded-lg flex justify-center items-center'><BsPlus size={20} color='#696969' /></div>}
                        </div>
                        <div className="range">
                            <input className='w-full' value={direction} min={0} max={360} onChange={e => setDirection(e.target.value)} type="range" />
                        </div>
                    </div>
                    <div className='preview h-96 rounded-2xl overflow-hidden'>
                        <div className='h-full w-full ' style={{ background: `linear-gradient( ${direction + 'deg,'} ${colors.join(',')})` }}>

                        </div>
                    </div>
                </section>
            </Wrap>
        </div>
    )
}

export default page