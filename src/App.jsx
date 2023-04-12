import Container from "./components/Container"
import Nav from "./components/Nav"
import Cube from "./components/Cube"
import Newton from "./components/Newton"
import Bhaskara from "./animations/Bhaskara"
import Description from "./components/Description"
import logo from './assets/logos/logo-ex.png'
import Livros from './assets/Livros.png'
// import Algebra from './assets/Algebra.png'
// import Cubos from './assets/Cubos.png'
// import Pendulo from './assets/Pendulo.png'
import Sinais from './assets/Sinais.png'

function App() {

  return (
    <div class="w-full h-full px-8 py-16 bg-LightColor bg-main">
      <Nav logo={logo} />
      <div className="w-full h-[80vh] flex justify-around items-center">
        <div>
          <h1 className="text-[5rem] font-bold">
            <span className="transition-all hover:relative hover:-top-3">G</span>
            <span className="transition-all hover:relative hover:-top-3">E</span>
            <span className="transition-all hover:relative hover:-top-3">O</span>
            <span className="transition-all hover:relative hover:-top-3">M</span>
            <span className="transition-all hover:relative hover:-top-3">E</span>
            <span className="transition-all hover:relative hover:-top-3">T</span>
            <span className="transition-all hover:relative hover:-top-3">R</span>
            <span className="transition-all hover:relative hover:-top-3">I</span>
            <span className="transition-all hover:relative hover:-top-3">X</span>
          </h1>
          <h2 className="text-2xl text-left pt-3 w-96">
            Traga à vida a matemática com GEOMETRIX
          </h2>
        </div>
        <img className="h-80" src={Sinais} alt="Sinais" />
      </div>
      <Container id="sobre">
        <img className="h-80" src={Livros} alt="Livros" />
        <Description>
          <p className="text-justify">A ideia de criar a Geometrix surgiu da nossa própria experiência na faculdade. Nós sabemos como pode ser difícil entender alguns conceitos complexos da matemática e da física, principalmente quando eles são apresentados de forma abstrata e pouco interativa. Por isso, decidimos criar uma ferramenta que pudesse facilitar a vida dos futuros estudantes e professores, tornando esses conceitos mais acessíveis e divertidos.
            Vimos como, no nosso próprio curso, quando algo se torna mais visual e interativo, é muito mais interessante e, acima de tudo, compreensível. Por isso essa ferramenta gratuita foi programada, sem exigir a instalação de nenhum programa ou um computador super potente. Dando a moral para quem gosta de matemática mas também se entedia fácil. Vamos ver como a Geometrix vai ser usado, por quem aprende e para os que ensinam esses assuntos tão importantes.</p>
          <a className="py-2 px-3 border border-black rounded-xl btn" href="#">MAIS TARDE</a>
        </Description>
      </Container>
      <Container id="algebra">
        <Description>
          <p className="text-justify">
            Para a funcionalidade de representação de funções no plano cartesiano, a Geometrix permite aos usuários visualizarem graficamente o comportamento de diversas funções matemáticas, desde funções lineares até funções trigonométricas complexas. Essa funcionalidade é extremamente importante para estudantes e profissionais de áreas como matemática, engenharia e física, pois a visualização gráfica facilita a compreensão do comportamento das funções em diferentes pontos e ajuda a identificar características importantes, como raízes, máximos e mínimos. Além disso, a Geometrix permite que os usuários personalizem a representação das funções, escolhendo cores, marcadores e escalas para melhorar a visualização.
          </p>
          <a className="py-2 px-3 border border-black rounded-xl btn" href="#">PLANIFICAR FUNÇÃO</a>
        </Description>
        <Bhaskara/>
        {/* <img className="h-80" src={Algebra} alt="Algebra" /> */}
      </Container>
      <Container id="matriz">
        <Cube />
        {/* <img className="h-80" src={Cubos} alt="Cubos" /> */}
        <Description>
          <p className="text-justify">
            Para a funcionalidade de criação de matrizes, a Geometrix oferece diversas operações matemáticas úteis, como determinantes, inversas, adjacentes e a Regra de Sarrus. Essa funcionalidade é especialmente importante para estudantes e profissionais de áreas como álgebra linear, estatística e computação gráfica. A Geometrix permite que os usuários criem matrizes de diferentes tamanhos e preencham seus valores manualmente ou usando fórmulas. Além disso, os usuários podem visualizar a matriz em formato de tabela e realizar as operações matemáticas desejadas com poucos cliques.
          </p>
          <a className="py-2 px-3 border border-black rounded-xl btn" href="#">|V|A|M|O|S|</a>
        </Description>
      </Container>
      <Container id="fisica">
        <Description>
          <p className="text-justify">
            Por fim, a funcionalidade de simulação de física e colisão é extremamente importante para estudantes e profissionais de áreas como engenharia, física e computação gráfica. A Geometrix permite que os usuários criem objetos tridimensionais e simulem a interação entre eles, levando em conta as leis da física. Essa funcionalidade é muito útil para a visualização de modelos em 3D e para o estudo do comportamento de objetos em diferentes situações, como colisões e quedas. Além disso, a Geometrix permite que os usuários controlem as propriedades físicas dos objetos, como massa, atrito e elasticidade, e visualizem as simulações em tempo real.
          </p>
          <a className="py-2 px-3 border border-black rounded-xl btn" href="#">SIMULAR</a>
        </Description>
        <Newton />
      </Container>
    </div>
  )
}

export default App