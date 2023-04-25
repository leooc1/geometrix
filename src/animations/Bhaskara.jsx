import { useRef/* , useEffect, useState  */} from 'react'

import imgX from '../assets/bhaskara/X.png'
import imgIgual from '../assets/bhaskara/Igual.png'
import imgmenosB from '../assets/bhaskara/menosB.png'
import imgmaisOUmenos from '../assets/bhaskara/maisOUmenos.png'
import imgraizQuadrada from '../assets/bhaskara/raizQuadrada.png'
import imgDelta from '../assets/bhaskara/Delta.png'
import imgDivisao from '../assets/bhaskara/Divisao.png'
import imgdoisA from '../assets/bhaskara/doisA.png'

export default function Bhaskara() {
    const X = useRef(null)
    const Igual = useRef(null)
    const menosB = useRef(null)
    const maisOUmenos = useRef(null)
    const raizQ = useRef(null)
    const Delta = useRef(null)
    const Divisao = useRef(null)
    const doisA = useRef(null)

    const bhaskara = useRef(null)
    // // var bhaskara = document.getElementById('bhaskara')

    setInterval(() => {
        if(bhaskara.current){
        console.log(bhaskara.current.getBoundingClientRect().top)
        Animation(bhaskara.current.getBoundingClientRect().top)
        }
    })

    function Animation(top) {
        if (top > 117 && top <= 410) {
            X.current.classList.remove('certo-X')
            X.current.classList.add('X')

            Igual.current.classList.remove('certo-Igual')
            Igual.current.classList.add('Igual')

            menosB.current.classList.remove('certo-menosB')
            menosB.current.classList.add('menosB')

            maisOUmenos.current.classList.remove('certo-maisOUmenos')
            maisOUmenos.current.classList.add('maisOUmenos')

            raizQ.current.classList.remove('certo-raiz')
            raizQ.current.classList.add('raiz')

            Delta.current.classList.remove('certo-delta')
            Delta.current.classList.add('delta')

            Divisao.current.classList.remove('certo-divisao')
            Divisao.current.classList.add('divisao')

            doisA.current.classList.remove('certo-doisA')
            doisA.current.classList.add('doisA')
         }
        else if(top < -186 || top > 565){
            X.current.classList.add('certo-X')
            X.current.classList.remove('X')

            Igual.current.classList.add('certo-Igual')
            Igual.current.classList.remove('Igual')

            menosB.current.classList.add('certo-menosB')
            menosB.current.classList.remove('menosB')

            maisOUmenos.current.classList.add('certo-maisOUmenos')
            maisOUmenos.current.classList.remove('maisOUmenos')

            raizQ.current.classList.add('certo-raiz')
            raizQ.current.classList.remove('raiz')

            Delta.current.classList.add('certo-delta')
            Delta.current.classList.remove('delta')

            Divisao.current.classList.add('certo-divisao')
            Divisao.current.classList.remove('divisao')

            doisA.current.classList.add('certo-doisA')
            doisA.current.classList.remove('doisA')
        } 
    }
    return (
        <div ref={bhaskara} id='bhaskara' className='w-72 h-48 relative scale-150'>
            <img ref={X} id='X' className='transition-all duration-[2s] h-9 absolute certo-X' src={imgX} alt="" />
            <img ref={Igual} id='Igual' className='transition-all duration-[2s] h-4 absolute certo-Igual' src={imgIgual} alt="" />
            <img ref={menosB} id='menosB' className='transition-all duration-[2s] h-9 absolute certo-menosB' src={imgmenosB} alt="" />
            <img ref={maisOUmenos} id='maisOUmenos' className='transition-all duration-[2s] h-6 absolute certo-maisOUmenos' src={imgmaisOUmenos} alt="" />
            <img ref={raizQ} id='raizQ' className='transition-all duration-[2s] h-10 absolute certo-raiz' src={imgraizQuadrada} alt="" />
            <img ref={Delta} id='Delta' className='transition-all duration-[2s] h-7 absolute certo-delta' src={imgDelta} alt="" />
            <img ref={Divisao} id='Divisao' className='transition-all duration-[2s] h-28 absolute certo-divisao' src={imgDivisao} alt="" />
            <img ref={doisA} id='doisA' className='transition-all duration-[2s] h-9 absolute certo-doisA' src={imgdoisA} alt="" />
        </div>
    )
}