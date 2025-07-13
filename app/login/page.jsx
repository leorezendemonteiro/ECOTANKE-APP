export default function LoginPage() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#fff"
    }}>
      <img src="/logo.png" alt="ECOTANKE" style={{ width: 220, marginBottom: 32 }} />
      <div style={{ width: "100%", maxWidth: 360, padding: 32, borderRadius: 12, boxShadow: "0 2px 16px #0001" }}>
        <input placeholder="E-mail" style={{ width: "100%", marginBottom: 16, height: 36, padding: 8 }} />
        <input placeholder="Senha" type="password" style={{ width: "100%", marginBottom: 24, height: 36, padding: 8 }} />
        <button style={{
          width: "100%", background: "#29B06A", color: "#fff", border: "none", borderRadius: 8, height: 40, fontWeight: 600
        }}>Entrar</button>
      </div>
    </div>
  );
}
