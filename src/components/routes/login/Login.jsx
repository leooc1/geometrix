import logo from '../../../assets/logos/logo.png'
import { Link } from 'react-router-dom'
import backgroundIMG from '../../../assets/BG_Overlay.png'

export default function Login() {
    return (
        <main className="flex flex-col w-full h-screen justify-center items-center sm:flex-row sm:justify-evenly" style={{
            backgroundImage : `url(${backgroundIMG})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <section className='scale-100 sm:scale-110'>
                <img className='h-28 mb-8 align-self-center justify-center' src={logo} alt="Logo" />
                <h2 className="text-3xl font-bold w-60 text-[#22577A]">Faça seu login para acessar o site</h2>
            </section>
            <section className='scale-100 sm:scale-110'>
                <form className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z" fill="rgba(34,87,122,1)"></path></svg>
                    <label className="relative"><input className="bg-[#22577A] w-80 my-1 p-2 pl-9 rounded-xl text-white" type="email" name="email" id="email" placeholder="nome@email.com" required/><svg className="absolute top-3 left-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" fill="rgba(255,255,255,1)"></path></svg></label>

                    <label className="relative"><input className="bg-[#22577A] w-80 my-1 p-2 pl-9 rounded-xl text-white" type="password" name="senha" id="senha" placeholder="Senha" required/><svg className="absolute top-3 left-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z" fill="rgba(255,255,255,1)"></path></svg></label>
                    
                    <a href="#" className="text-[#22577A] font-semibold -ml-40">Esqueci minha senha</a>
                    <input className="bg-[#22577A] w-48 my-1 mt-4 p-2 rounded-xl text-white" type="submit" value="ENTRAR"/>
                        <p>Não tem conta? <Link className="text-[#22577A] font-semibold" to='/login/cadastro'>crie uma</Link></p>
                </form>
            </section>
        </main>
    )
}