import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div>
          <div className={styles.logo}>CENDRE</div>
          <p className={styles.tag}>Restaurante · Bar · Enoteca</p>
        </div>

        <div>
          <h4>Contato</h4>
          <p>Rua dos Jasmins, 152 — Jardins, São Paulo</p>
          <p>(11) 4002-8922</p>
          <p>contato@cendre.com.br</p>
        </div>

        <div>
          <h4>Horário</h4>
          <p>Ter – Sex · 12h às 23h</p>
          <p>Sáb · 12h às 00h</p>
          <p>Dom · 12h às 18h</p>
        </div>

        <div>
          <h4>Navegação</h4>
          <nav className={styles.links}>
            <Link href="/chef">Chef</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/reservas">Reservas</Link>
            <Link href="/contato">Contato</Link>
          </nav>
        </div>
      </div>

      <div className={`wrap ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Cendre. Todos os direitos reservados.</span>
        <span>Feito com Next.js</span>
      </div>
    </footer>
  );
}
