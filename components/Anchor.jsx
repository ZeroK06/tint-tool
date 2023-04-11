import React from 'react'

const Anchor = (props) => {
    return (
        <a {...props} className='p-4 rounded-full cursor-pointer bg-gray-100 transition-transform duration-300 hover:scale-105 active:scale-95'>{props.children}</a>
    )
}

export default Anchor