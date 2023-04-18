import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {WebGLCapabilities} from 'three/src/renderers/webgl/WebGLCapabilities.js';
import logo from './../assets/logos/logo.png'
import Overlay from './../assets/BGDARK.jpg'

export default function Newton() {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#ambientCanvas')
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    renderer.render(scene, camera);

    const constrols = new OrbitControls(camera, renderer.domElement);

    const cubeLogo = new THREE.BoxGeometry(10, 10, 10);
    const logoTexture = new THREE.TextureLoader().load(logo);
    const basicLogo = new THREE.MeshBasicMaterial({map: logoTexture});
    const cubeLogoMesh = new THREE.Mesh(cubeLogo, basicLogo);

    const bgTexture = new THREE.TextureLoader().load(Overlay);
    scene.background = bgTexture;

    const geometry = new THREE.TorusGeometry(10, 1, 16, 100);
    const material = new THREE.MeshStandardMaterial({
        color: 0x00bb8e
    });

    const torus = new THREE.Mesh(geometry, material);
    const pointLight = new THREE.PointLight(0xFFFFFF);
    const ambientLight = new THREE.AmbientLight(0xFFFFFF);

    const formBallon = new THREE.OctahedronGeometry(2, 0);
    const formBallonMaterial = new THREE.MeshStandardMaterial({ color: 0x00bb8e });
    const formB = new THREE.Mesh(formBallon, formBallonMaterial);

    formB.position.set(10, 0, 20);

    pointLight.position.set(15, 25, 15);

    cubeLogoMesh.add(formB);
    scene.add( torus, cubeLogoMesh, pointLight, ambientLight);


    function animate() {
        requestAnimationFrame(animate);

        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;

        formB.rotation.x += 0.01;
        // formB.translateZ(0.8);

        cubeLogoMesh.rotation.y += 0.1;
        cubeLogoMesh.rotation.x -= 0.08;

        constrols.update();

        renderer.render(scene, camera);
    }

    animate();

    return (

    <div className="emmetTHREE">
        <canvas id="ambientCanvas"></canvas>
    </div>

    )
}