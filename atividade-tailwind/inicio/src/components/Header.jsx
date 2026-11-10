import { useState } from 'react'

const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

// EXERCÍCIO 2: barra de navegação + bônus do menu mobile
export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#inicio" className="text-2xl font-bold text-amber-700">
          ☕ Grão Dourado
        </a>

        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-medium hover:text-amber-700 transition-colors"
              >
                {link.texto}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-2xl text-amber-700"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          {menuAberto ? '✕' : '☰'}
        </button>
      </nav>

      {menuAberto && (
        <ul className="md:hidden border-t border-stone-200 bg-white px-4 py-3 space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuAberto(false)}
                className="block py-1 font-medium hover:text-amber-700 transition-colors"
              >
                {link.texto}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
