const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header className="shadow-2xl bg-white sticky top-0 z-10">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
        <a href="#" className="text-2xl font-bold text-cafe-500">☕ Grão Dourado</a>
        <ul className="flex gap-6 transition-colors md:flex font-medium hover: text-cafe-500">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
