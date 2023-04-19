import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBarDashboard from '@/components/NavBarDashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBarDashboard />
    </>
  )
}
