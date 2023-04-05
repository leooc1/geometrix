export default function Algebric(){

    function setup() {
        document.querySelector(".canva-plane");
    }
    
    function draw() {
        background(30,50,50);
        fill(255);
        Line(50,window.innerWidth,23,45);
    }

    setup()
    draw()

    return (
        <canvas width={window.innerWidth} height={window.innerHeight} className="canva-plane"></canvas>
        // <p className="bg-blue-400">newto picudo</p>
    )
}