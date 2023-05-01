'use client'

import { randomColor } from '@/services/colorRandom'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [colors, setColors] = useState([])
    const [direction, setDirection] = useState(0)
    const [ruleCss, setRuleCss] = useState('')
    /* const handleRuleCss = ({ direction, colors = [] }) => {
        setRuleCss(`linear-gradient( ${direction ? direction + ',' : ''} ${colors.join(',')})`)
    }
*/
    useEffect(() => {
        setColors(() => ([randomColor(), randomColor()]))
    }, [])


    return (
        <div className="gradient relative" style={{ height: 'calc(100vh - 80px)', background: `linear-gradient( ${direction}deg, ${colors.join(',')})` }}>
            <div className="controls absolute bottom-10 h-96 w-full flex justify-center items-center">
                <div className='bg-white h-96 w-2/3 rounded-xl'>
                    <input type="range" min={0} max={360} value={direction} onChange={(e) => setDirection(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default page