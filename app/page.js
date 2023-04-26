'use client'
import { Inter } from 'next/font/google'
import NavBarDashboard from '@/components/NavBarDashboard'
import SliderHome from '@/components/SliderHome'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBarDashboard />
      <main style={{ height: 'calc(100vh - 80px)' }}>
        <div className="slider h-full w-full">
          <SliderHome />
        </div>
      </main>
    </>
  )
}
