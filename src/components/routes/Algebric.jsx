import * as THREE from 'three';
import { useRef } from 'react';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

export default function Algebric(){
const generalWidth = window.innerWidth;
const generalHeight = window.innerHeight;
const choosePixelRatio = window.devicePixelRatio;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(90, generalWidth / generalHeight, 0.1, 1000);
const pointLight = new THREE.PointLight(0xFFFFFF);
const sun = new THREE.AmbientLight(0xFFFFFF);
const gridMesh = new THREE.GridHelper(100, 100, 0x000000, 0x000000);

const euTexture = new THREE.TextureLoader().load('../../assets/images/GATODEBOSTA.jpeg');
/** */
const ambientCanvas = useRef(null)
/** */
pointLight.position.set(15, 25, 15);

const renderer = new THREE.WebGLRenderer({
    canvas: ambientCanvas
});

// const controls = new THREE.OrbitControls(camera, renderer.domElement);

renderer.setPixelRatio(choosePixelRatio);
renderer.setSize(generalWidth, generalHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshStandardMaterial({
//     color: 0xFF6347
// });

const materialDeBosta = new THREE.MeshBasicMaterial({
    map: euTexture,
});


const cube = new THREE.BoxGeometry(10,10,10)

const cubeG = new THREE.Mesh(cube, materialDeBosta)
const torus = new THREE.Mesh(geometry, materialDeBosta);
const torusO = new THREE.Mesh(geometry, materialDeBosta);
const torusV = new THREE.Mesh(geometry, materialDeBosta);

torusO.generalHeight = 100;

scene.add(torus, pointLight, sun, cubeG, torusV, torusO);

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    torusO.rotation.y -= 0.005;
    torusO.rotation.z -= 0.01;
    torusO.rotation.x -= 0.01;

    torusV.rotation.x += 0.001;
    torusV.rotation.y += 0.05;
    torusV.rotation.z += 0.021;

    // controls.update();
    renderer.render(scene, camera);
}

animate();

    return (
        <div>
            <canvas ref={ambientCanvas} id='ambientCanvas' className='w-4 h-4 bg-cyan-500'></canvas>
        </div>
    )
}