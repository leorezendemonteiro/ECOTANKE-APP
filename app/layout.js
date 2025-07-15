import Link from 'next/link'

export const metadata = {
  title: 'ECOTANKE',
  description: 'Sistema de gestão Ecotanke'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <nav style={{ padding: 16, background: '#eee', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/clientes">Clientes</Link>
          <Link href="/equipamentos">Equipamentos</Link>
          <Link href="/orcamentos">Orçamentos</Link>
          <Link href="/agendamentos">Agendamentos</Link>
          <Link href="/checklists">Checklists</Link>
          <Link href="/manutencoes">Manutenções</Link>
          <Link href="/vendas/quimicos">Vendas Químicos</Link>
          <Link href="/vendas/equipamentos">Vendas Equipamentos</Link>
          <Link href="/alugueis">Aluguéis</Link>
          <Link href="/relatorios">Relatórios</Link>
        </nav>
        <main style={{ padding: 20 }}>{children}</main>
      </body>
    </html>
  )
}
