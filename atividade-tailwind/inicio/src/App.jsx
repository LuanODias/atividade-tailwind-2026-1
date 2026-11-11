import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Cardapio from './components/Cardapio.jsx'
import Sobre from './components/Sobre.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    // EXERCÍCIO 1: estilize esta div (ela faz o papel do <body>)
    <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9", // Ajuste a cor de fundo conforme o projeto
        color: "#333333"            // Cor padrão do texto
      }}
    >
      <Header />
      <main>
        <Hero />
        <Cardapio />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
