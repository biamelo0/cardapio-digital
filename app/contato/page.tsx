import styles from "./contato.module.css";

export default function ContatoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Fale conosco</span>
          <h1>Contato</h1>
          <p>Dúvidas, eventos privados ou parcerias — estamos por aqui.</p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.grid}`}>
          <div className={styles.card}>
            <h3>Endereço</h3>
            <p>Rua dos Jasmins, 152</p>
            <p>Jardins, São Paulo — SP</p>
            <p>CEP 01415-000</p>
          </div>
          <div className={styles.card}>
            <h3>Horário de funcionamento</h3>
            <p>Terça a sexta · 12h às 23h</p>
            <p>Sábado · 12h às 00h</p>
            <p>Domingo · 12h às 18h</p>
            <p>Segunda · fechado</p>
          </div>
          <div className={styles.card}>
            <h3>Fale direto</h3>
            <p>(11) 4002-8922</p>
            <p>contato@cendre.com.br</p>
            <p>@cendre.restaurante</p>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          {/* Substitua por um iframe do Google Maps com o endereço real, ex.:
             <iframe src="https://www.google.com/maps/embed?..." /> */}
          <span>Mapa — insira aqui o embed do Google Maps</span>
        </div>
      </section>
    </>
  );
}
