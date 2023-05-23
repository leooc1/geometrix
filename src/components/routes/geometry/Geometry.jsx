import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import Import from './Import';

function Geometry() {
  const geometry = useRef(null);
  const [geometries, setGeometries] = useState([]);

  function handleFile() {
    const fileInput = document.getElementById('geometria');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const jsonContent = event.target.result;
      const jsonData = JSON.parse(jsonContent);
      console.log(jsonData);
      const newGeometries = [];
      for (let i = 1; i < jsonData.geometries.length; i++) {
        console.log(jsonData.geometries[i].type);
        newGeometries.push(
          <mesh
            key={i}
            position={[
              jsonData.object.children[i - 1].matrix[12],
              jsonData.object.children[i - 1].matrix[13],
              jsonData.object.children[i - 1].matrix[14],
            ]}
            scale={[
              jsonData.object.children[i - 1].matrix[0],
              jsonData.object.children[i - 1].matrix[5],
              jsonData.object.children[i - 1].matrix[10],
            ]}
          >
            <Import type={jsonData.geometries[i].type} />
            <meshStandardMaterial color={jsonData.materials[i].color} wireframe={jsonData.materials[i].wireframe}/>
          </mesh>
        );
      }
      setGeometries(newGeometries);
    };

    reader.readAsText(file);
  }

  const downloadJSON = async (objeto) => {
    //#############################################
    const objetoJSON = JSON.stringify(objeto);

    const blob = new Blob([objetoJSON], { type: 'application/json' });
    const arquivo = new File([blob], 'geometry.json');

    const urlObjeto = URL.createObjectURL(arquivo);

    const link = document.createElement('a');
    link.href = urlObjeto;
    link.download = arquivo.name;

    document.body.appendChild(link);

    link.click();

    setTimeout(function () {
      document.body.removeChild(link);
      URL.revokeObjectURL(urlObjeto);
    }, 0);
  };


  return (
    <div>
      <div className='w-screen h-[100px] flex justify-around items-center'>
        <div className='flex flex-col'>
          <input type='file' name='geometria' id='geometria' />
          <button
            onClick={handleFile}
            className='bg-slate-400 p-1 rounded border-solid border border-black'
          >
            Enviar
          </button>
        </div>
        <div>
          <button
            onClick={() => downloadJSON(geometry.current)}
            className='bg-slate-400 p-1 rounded border-solid border border-black'
          >
            Exportar arquivo
          </button>
        </div>
      </div>
      <Canvas style={{ height: 'calc(100vh - 100px)', width: '100vw' }} className='bg-slate-600'>
        <OrbitControls />
        <ambientLight />
        <mesh ref={geometry}>
          {geometries}
        </mesh>
      </Canvas>
    </div>
  );
}

export default Geometry;
