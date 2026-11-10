// EXERCÍCIO 4 (parte 2): card de um produto + bônus do selo Novo
export default function CardProduto({ nome, preco, descricao, imagem, novo }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <div className="relative">
        <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
        {novo && (
          <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Novo
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center gap-3">
          <h3 className="text-xl font-semibold">{nome}</h3>
          <span className="shrink-0 bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1 rounded-full">
            {preco}
          </span>
        </div>
        <p className="mt-2 text-stone-600 text-sm">{descricao}</p>
      </div>
    </article>
  )
}
