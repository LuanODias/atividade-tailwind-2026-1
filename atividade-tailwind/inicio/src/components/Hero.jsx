// EXERCÍCIO 3: seção hero
export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "5rem 1.5rem",
        backgroundColor: "#3c2415",
        color: "#fefae0",
        minHeight: "70vh",
      }}
    >
      <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem", color: "#d4a373" }}>
        O café que abraça a sua manhã
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "2rem", lineHeight: "1.6", color: "#e9edc9" }}>
        Grãos selecionados de pequenos produtores, torrados artesanalmente e
        servidos com carinho desde 2010.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="#cardapio"
          style={{
            backgroundColor: "#d4a373",
            color: "#2b1810",
            padding: "0.8rem 1.8rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Ver cardápio
        </a>
        <a
          href="#sobre"
          style={{
            border: "2px solid #d4a373",
            color: "#d4a373",
            padding: "0.8rem 1.8rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Nossa história
        </a>
      </div>
    </section>
  );
}
