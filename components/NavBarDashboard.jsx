import Link from 'next/link'
import React from 'react'
import { TfiAngleDown } from 'react-icons/tfi'
import ItemNavBar from './ItemNavBar'
export const menu = [{
    id: 1,
    name: 'Herramientas',
    items: [{
        icon: '',
        name: 'Generador de Gradientes',
        uri: '',
    }, {
        icon: '',
        name: 'Generador de Paletas',
        uri: '',
    }, {
        icon: '',
        name: 'Generador de Mesh',
        uri: '',
    }, {
        icon: '',
        name: 'Imagen a Paleta',
        uri: '',
    }]
}, {
    id: 2,
    name: 'Explorar',
    items: [{
        icon: '',
        name: 'aaaaa',
        uri: '',
    }]
}]


const NavBarDashboard = () => {
    return (
        <nav className='h-20 w-full shadow-2xl flex justify-between items-center select-none shadow-gray-100 px-20'>
            <div className='flex justify-center items-center gap-10'>
                <Link href={"/"}>
                    <img src="/colora-logo.svg" alt="logo colora" className='h-8' />
                </Link>
                <div className='flex gap-7'>
                    {menu.map(menu => (<ItemNavBar key={menu.id} {...menu} />))}
                </div>
            </div>
        </nav>
    )
}

export default NavBarDashboard