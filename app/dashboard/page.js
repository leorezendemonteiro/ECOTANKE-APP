export default function DashboardPage() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", background: "#fff", paddingTop: 50
    }}>
      <img src="/logo.png" alt="ECOTANKE" style={{ width: 220, marginBottom: 48 }} />
      <div style={{ width: "100%", maxWidth: 360 }}>
        <button style={btn}>CRIAÇÃO DE ORÇAMENTOS</button>
        <button style={btn}>MANUTENÇÃO DE EQUIPAMENTOS</button>
        <button style={btn}>AGENDAMENTO DE VISITA TÉCNICA</button>
        <button style={btn}>CHECK LIST PARA GERAR ORÇAMENTO</button>
      </div>
    </div>
  );
}

const btn = {
  width: "100%",
  marginBottom: 20,
  background: "#fff",
  border: "1px solid #DDD",
  borderRadius: 12,
  padding: "24px 0",
  fontWeight: 600,
  fontSize: 18,
  color: "#222",
  boxShadow: "0 2px 10px #0001",
  cursor: "pointer"
};
