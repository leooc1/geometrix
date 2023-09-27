import React, { useEffect, useState } from 'react'

export default function Listinha() {
    const [lista, setLista] = useState([])
    useEffect(()=>{
        fetch('/api/listar-elemento',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                ID: 11
            })
        })
        .then(response=>response.json())
        .then(data=>{
            // console.log(data)
            setLista(data)
        })
        .catch(err=>console.log(err))
    },[])
    function DataItems(e:any){
        e.preventDefault()
        const body = {
            Data_Inicio: e.target.dataInicio.value,
            Data_Fim: e.target.dataFinal.value,
            ID: 11
        }
        fetch('/api/buscar-elemento',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(body)
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setLista(data)
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <form onSubmit={DataItems} className='bg-slate-600 flex flex-col py-4 px-80 gap-4' action="/api/buscar-elemento" method="post">
            <input type="date" name="dataInicio" id="dataInicio" />
            <input type="date" name="dataFinal" id="dataFinal" />
            <button type='submit' className='bg-white'>enviar</button>
        </form>
        <ul>
            {lista[0]==='Achei nada, fodase' ?null:lista.map((item:any, key)=>{return <li key={key}>----&#62; {item.TIPO} - {item.NOME_OBJETO} - {item.DATA.slice(0,10)}</li>})}
        </ul>
    </div>
  )
}
