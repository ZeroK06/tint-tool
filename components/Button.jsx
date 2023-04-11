import React from 'react'

const Button = (props) => {
    return (
        <button {...props} className={`p-4 rounded-full ${props.className} bg-gray-100 transition-transform duration-300 hover:scale-105 active:scale-95`}>{props.children}</button>
    )
}

export default Button