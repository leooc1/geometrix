import Matriz from "@/components/Matriz"
import NavBar from "@/components/NavBar"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Head>
        <title>GEOMETRIX</title>
        <link rel="shortcut icon" href="/logos/logo.png" type="image/x-icon" />
    </Head>
      <main className="bg-secondary w-full h-full">
        <NavBar />
        <div className="h-screen w-full flex justify-center items-center bg-purple-300"><Link href='/'>clica aí</Link></div>
        <div id="sobre" className="h-screen w-full flex justify-center items-center bg-purple-400"><Link href='/'>clica aí</Link></div>
        <div id="algebra" className="h-screen w-full flex justify-center items-center bg-purple-500"><Link href='/'>clica aí</Link></div>
        <Matriz />
        <div id="fisica" className="h-screen w-full flex justify-center items-center bg-purple-700"><Link href='/'>clica aí</Link></div>
      </main>
    </>
  )
}
