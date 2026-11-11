const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header style={{ backgroundColor: '#2b1810', padding: '1rem 2rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <a href="#inicio" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d4a373', textDecoration: 'none' }}>
          ☕ Grão Dourado
        </a>
        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{ color: '#fefae0', textDecoration: 'none', fontWeight: '500' }}>
                {link.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
