'use client'
import NavBarDashboard from '@/components/NavBarDashboard'
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'
import { AiOutlineShareAlt } from 'react-icons/ai'
import Anchor from '@/components/Anchor'
import { AnimatePresence } from 'framer-motion'
import useCustomColor from '@/global/useCustomColor'
import EditColor from '@/components/EditColor'

export const social = [
    { name: 'facebook', url: '#', icon: <FaFacebookF size={20} color="#696969" />, colorHover: '', },
    { name: 'intagram', url: '#', icon: <FaInstagram size={20} color="#696969" />, colorHover: '', },
    { name: 'youtube', url: '#', icon: <FaYoutube size={20} color="#696969" />, colorHover: '', },
]

export const actions = [
    { name: 'code', action: undefined, icon: <BsDownload size={20} color="#696969" /> },
    { name: 'share', action: undefined, icon: <AiOutlineShareAlt size={20} color="#696969" /> },
]

export default function DashboardLayout(
    { children } = { children: React.ReactNode }
) {
    const { isVisibleCustomColor } = useCustomColor()
    return (
        <>
            <NavBarDashboard />
            <section className="dashboard-layout w-full">
                <div className="bg-green-500"></div>
                <div>{children}</div>
                <div className="bg-red-500"></div>
                <div className="dashboard-layout-d flex px-20 justify-between items-center">
                    <div className="flex gap-4">
                        {social?.map((item, index) => (
                            <Anchor key={index}>{item.icon}</Anchor>
                        ))}
                    </div>
                    <div className="flex gap-4">
                    </div>
                </div>
            </section>
            <AnimatePresence>
                {isVisibleCustomColor && <EditColor />}
            </AnimatePresence>
        </>
    )
}
