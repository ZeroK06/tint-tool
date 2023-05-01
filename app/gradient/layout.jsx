import NavBarDashboard from '@/components/NavBarDashboard'
import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <NavBarDashboard />
            <section className='w-full'>{children}</section>
        </>
    )
}

export default layout