'use client'
import React, { useEffect, useRef, useState } from 'react'
import { TfiAngleDown } from 'react-icons/tfi'


const ItemNavBar = ({ items, name, uri }) => {
    const [isActive, setIsActive] = useState(false)
    const itemMenu = useRef(null)
    useEffect(() => {
        const handlerMouseDown = () => {
            setIsActive(false)

        }
        document.addEventListener('mousedown', handlerMouseDown)

        console.log(isActive);
        return () => {
            document.removeEventListener('mousedown', handlerMouseDown)

        }
    }, [])
    return (
        <div className="relative" >
            <label ref={itemMenu}
                className="group cursor-pointer py-4 px-2 relative text-sm font-semibold flex justify-center transition-colors items-center gap-3  hover:text-orange-500"
                onClick={() => setIsActive(true)}
            >
                {name}
                <TfiAngleDown />
            </label>
            {
                isActive && (
                    <div className="absolute left-0 -bottom-16 p-3 bg-red-300">
                        {/* {items.map(element => (
                        <label>{element.name}</label>
                    ))} */}
                        aaaaaaaaaa
                    </div>
                )
            }
        </div >
    )
}

export default ItemNavBar
