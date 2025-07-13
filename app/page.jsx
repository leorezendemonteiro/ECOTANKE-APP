export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff"
    }}>
      <img src="/logo.png" alt="ECOTANKE" style={{ width: 220, marginBottom: 32 }} />
      <h1>Bem-vindo ao ECOTANKE</h1>
      <p>
        Acesse <a href="/login">/login</a> para entrar no sistema.
      </p>
    </div>
  );
}
