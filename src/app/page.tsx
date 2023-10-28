'use client'
import Matriz from "@/components/Matriz"
import NavBar from "@/components/NavBar"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [move, setMove] = useState(1000)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const bottom = document.getElementById('home') as HTMLElement
      const hContainer = (bottom?.getBoundingClientRect().bottom - innerHeight)
      if (hContainer >= 0) {
        setMove(hContainer)
      } else {
        setMove(0)
      }
    })
  }, [move])
  return (
    <>
      <main className="bg-secondary w-full h-full scroll-smooth">
        <NavBar />
        <section id="home" className="h-[200vh] w-full bg-secondary">
          <p className="font-semibold text-9xl flex justify-center gap-2 sticky top-1/2 -translate-y-1/2">
            <span className={`relative left-[-388.889px]`} style={{
              // transition: '.5s',
              left: `-${move}px`
            }}>G</span>
            <span className={`relative top-[-437.5px]`} style={{
              // transition: '.5s',
              top: `-${move / 1.4}px`
            }}>/</span>
            <span className={`relative left-[-87.5px]`} style={{
              // transition: '.5s',
              left: `-${move / 10}px`
            }}>X</span>
          </p>
        </section>
        <div id="sobre" className="h-screen w-full flex justify-center items-center bg-gray-700 text-white tracking-[3px] uppercase"><Link href='#'>clica aí pra nada</Link></div>
        <div id="algebra" className="h-screen w-full flex justify-center items-center bg-gray-700 text-white tracking-[3px] uppercase"><Link href='/algebra'>parabolinha di cria?</Link></div>
        <Matriz />
        <div id="fisica" className="h-screen w-full flex justify-center items-center bg-gray-700 text-white tracking-[3px] uppercase"><Link href='/fisica'>físico + turista . . .</Link></div>
      </main>
    </>
  )
}
