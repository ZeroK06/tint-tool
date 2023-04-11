'use client'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const useCopy = () => {
    const [copy, setCopy] = useState(false)
    const copyToClipBoard = (value) => {
        if (typeof value == 'string' || typeof value == 'number') {
            navigator.clipboard.writeText(value)
            setCopy(true)
            toast.success(`Texto copiado: ${value}`)
            setTimeout(() => { setCopy(false) }, 1000)
        }
    }
    return [copy, copyToClipBoard]
}

export default useCopy