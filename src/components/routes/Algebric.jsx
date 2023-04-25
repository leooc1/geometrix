import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import logo from '../../assets/logos/logo.png'
import Overlay from '../../assets/BGDARK.jpg'
import { TextureLoader } from 'three';

export default function Algebric() {

    const textura = new TextureLoader().load(logo)

    return (
        <Canvas style={{ width: '100vw', height: '100vh', backgroundColor: '#444', backgroundImage: `url(${Overlay})`, backgroundSize: 'cover' }}>
            <OrbitControls autoRotate autoRotateSpeed={7}/>
            <Stars />
            <ambientLight />
            <mesh >
                <boxGeometry />
                <meshStandardMaterial color='#FFF' map={textura} metalness={1} roughness={0.3} />
            </mesh>
            <mesh position={[0,400,0]} onClick={()=>{
                window.location.assign('/login')
            }}>
                <boxGeometry args={[10,10,10]}/>
                <meshStandardMaterial color='#38a3a5'/>
            </mesh>
            <pointLight position={[0, 0, 2]} intensity={10} color='#38A3A5' />
            <pointLight position={[0, 0, -2]} intensity={10} color='#38A3A5' />
            <pointLight position={[2, 0, 0]} intensity={10} color='#38A3A5' />
            <pointLight position={[-2, 0, 0]} intensity={10} color='#38A3A5' />
            <pointLight position={[0, 2, 0]} intensity={10} color='#38A3A5' />
            <pointLight position={[0, -2, 0]} intensity={10} color='#38A3A5' />
        </Canvas >

    )
}