import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logos/logo-ex.png'
import backgroundIMG from '../../../assets/BG_D_Overlay.png'
import Axios from 'axios'


export default function Cadastro(){
    const url = '';
    var [data, setData] = useState({
        email: '',
        password: '',
        name: ''
    });

    submit=(e)=>{
        e.preventDefault();
        Axios.post(url, {
            email: data.email,
            password: data.password,
            name: data.name
        }).then((res)=>{
            console.log(res.data);
        });
    }
    
    var newData = {...data};
    handleSubmition = (event)=>{
        event.preventDefault();
        data[event.target.name] = event.target.value;
        console.log(data);
        
        setData(newData);
        console.log(newData);
    }

    return(
        <main className="flex flex-col w-full h-screen justify-center items-center sm:flex-row sm:justify-evenly " style={{
            backgroundImage: `url(${backgroundIMG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}>
            <section className='scale-100 sm:scale-110'>
                <form className="flex flex-col items-center gap-2">
                    <h1 className='text-4xl text-DarkerColor font-medium pb-8'>Crie seu espaço</h1>

                    <label className="relative">
                        <input onChange={this.handleSubmition} className="bg-DarkerColor w-80 my-1 p-2 pl-9 rounded-xl text-white" type="email" name="email" id="email" placeholder="nome@email.com" required />
                        <svg className="absolute top-3 left-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" fill="rgba(255,255,255,1)"></path></svg>
                    
                    </label>

                    <label className="relative">
                        <input onChange={this.handleSubmition} className="bg-DarkerColor w-80 my-1 p-2 pl-9 rounded-xl text-white" type="password" name="password" id="password" placeholder="Senha" required />
                        <svg className="absolute top-3 left-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z" fill="rgba(255,255,255,1)"></path></svg>
                    </label>

                    <label className="relative">
                        <input className="bg-DarkerColor w-80 my-1 p-2 pl-9 rounded-xl text-white" type="password" name="confirm_password" id="confirm_password" placeholder="Confirme sua senha" required />
                        <svg className="absolute top-3 left-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z" fill="rgba(255,255,255,1)"></path></svg>

                    </label>

                    <label className="relative">
                        <input onChange={this.handleSubmition} className="bg-DarkerColor w-80 my-1 p-2 pl-9 rounded-xl text-white" type="text" name="name" id="name" placeholder='Nome' required />

                    <svg className="absolute top-3 left-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z" fill="rgba(255,255,255,1)"></path></svg>

                    </label>

                    <button onClick={this.submit} className="bg-DarkerColor w-48 my-1 mt-4 p-2 rounded-xl text-white">CADASTRAR</button>
                </form>
            </section>
            <section className='scale-100 sm:scale-110'>
                <img className='h-12 mb-8' src={logo} alt="Logo" />
                <h2 className="text-3xl font-medium w-80 text-DarkerColor mb-6">Junte-se a Poincaré, Newton e Arquimedes na jornada da matemática</h2>
                <Link to='/login' className='text-DarkerColor italic '>&larr; Voltar para login</Link>
            </section>
        </main>
    )
}