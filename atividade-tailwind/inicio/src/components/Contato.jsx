// EXERCÍCIO 6: formulário de contato
const estiloCampo =
  'w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500'

export default function Contato() {
  function handleSubmit(evento) {
    evento.preventDefault()
    alert('Mensagem enviada! (de mentirinha)')
  }

  return (
    <section id="contato" className="max-w-xl mx-auto px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Fale com a gente</h2>

        <div>
          <label htmlFor="nome" className="block text-sm font-medium mb-1">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Seu nome"
            className={estiloCampo}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="voce@email.com"
            className={estiloCampo}
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium mb-1">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            placeholder="Escreva sua mensagem..."
            className={`${estiloCampo} h-32`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-700 active:scale-95 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
