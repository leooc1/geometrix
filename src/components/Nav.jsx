export default function Nav({logo}){
    return(
        <nav className="flex justify-between sticky top-5 w-full py-4 backdrop-blur z-50">
            <a href="#" className="pl-2"><img className="h-12" src={logo} alt="Logo"/></a>
            <ul className="flex justify-around">
                <li className="flex items-center px-8"><a href="#sobre">SOBRE</a></li>
                <li className="flex items-center px-8"><a href="#algebra">ÁLGEBRA</a></li>
                <li className="flex items-center px-8"><a href="#matriz">MATRIZ</a></li>
                <li className="flex items-center px-8"><a href="#fisica">FÍSICA</a></li>
            </ul>
        </nav>
    )
}