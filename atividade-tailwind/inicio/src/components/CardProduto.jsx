// EXERCÍCIO 4 (parte 2): card de um produto
export default function CardProduto({ nome, preco, descricao, imagem }) {
  return (
    <article
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <img
        src={imagem}
        alt={nome}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#2b1810" }}>{nome}</h3>
          <span style={{ fontWeight: "bold", color: "#d4a373", fontSize: "1.1rem" }}>{preco}</span>
        </div>
        <p style={{ margin: 0, color: "#666666", fontSize: "0.95rem", lineHeight: "1.5" }}>
          {descricao}
        </p>
      </div>
    </article>
  )
}
