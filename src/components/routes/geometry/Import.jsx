import React from 'react';

function Import({type}) {
  return (
    <>
        {type=="BoxGeometry"?<boxGeometry />:null}
        {type=="TetrahedronGeometry"?<tetrahedronGeometry />:null}
        {type=="OctahedronGeometry"?<octahedronGeometry />:null}
        {type=="DodecahedronGeometry"?<dodecahedronGeometry/>:null}
        {type=="IcosahedronGeometry"?<icosahedronGeometry/>:null}
    </>
  )
}

export default Import;