'use client'
import React, { useEffect, useRef } from 'react'

const useInterval = (callback = () => { new Error('Ingrese una funcion por parametro') }, delay = 100) => {
    const callbackRef = useRef()
    useEffect(() => {
        callbackRef.current = callback
    }, [callback])
    useEffect(() => {
        const tick = () => {
            callbackRef.current()
        }
        const id = setInterval(tick, delay)
        return () => {
            clearInterval(id)
        }
    }, [delay])

}

export default useInterval