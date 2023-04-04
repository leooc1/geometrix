export default function Container({children, id}){
    return(
        <section id={id} className="w-full h-screen flex justify-around items-center">
            {children}
        </section>
    )
}