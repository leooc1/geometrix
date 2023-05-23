export default function Nav({logo}){
    return(
        <nav className="flex justify-between sticky top-5 bg-[#f3f3f3c5] w-full py-4 backdrop-blur z-50 animate shadow-md">
            <a href="#" className="pl-6"><img className="h-12" src={logo} alt="Logo"/></a>
            <ul className="flex justify-around">
                <li className="flex items-center px-8 text-[1.25rem] font-medium hover:text-[#38a3a5]"><a href="#sobre">SOBRE</a></li>
                <li className="flex items-center px-8 text-[1.25rem] font-medium hover:text-[#38a3a5]"><a href="#algebra">ÁLGEBRA</a></li>
                <li className="flex items-center px-8 text-[1.25rem] font-medium hover:text-[#38a3a5]"><a href="#matriz">MATRIZ</a></li>
                <li className="flex items-center px-8 text-[1.25rem] font-medium hover:text-[#38a3a5]"><a href="#fisica">FÍSICA</a></li>
            </ul>
        </nav>
    )
}