import { Inter } from 'next/font/google'
import NavBarDashboard from '@/components/NavBarDashboard'
import SliderHome from '@/components/SliderHome'

export default function Home() {
  return (
    <>
      <NavBarDashboard />
      <main>
        <section style={{ height: 'calc(100vh - 80px)' }} className='overflow-hidden'>
          <div className="slider h-full w-full relative home-gradient-background z-0">
            <SliderHome />
          </div>
        </section>
        {/* <section className="wrap w-5/6 mx-auto flex justify-between">
          <section className="py-6">
            <h1 className='text-4xl font-bold'>Que es Colora.?</h1>
            <p>Colora es la herramienta definitiva para generar paletas de colores
              y gradiantes de manera rápida y fácil. Con Colora, podrás crear
              combinaciones de colores perfectamente armoniosas y personalizarlas
              a tu gusto en cuestión de segundos.</p>
          </section>
          <img src="/assets/paleta.png" className='w-52' alt="paleta de colores" />
        </section> */}
      </main>
    </>
  )
}
