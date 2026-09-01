import ReservationForm from "./ReservationForm";
import styles from "./reservas.module.css";

export default function ReservasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Sua mesa</span>
          <h1>Reservas</h1>
          <p>
            Poucas mesas por horário, para servir com calma. Preencha os
            dados abaixo e confirmamos por e-mail em até 2 horas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.grid}`}>
          <ReservationForm />

          <div className={styles.info}>
            <h3>Antes de reservar</h3>
            <ul>
              <li>Mesas liberadas por até 2h15 nos horários de pico.</li>
              <li>Grupos acima de 8 pessoas: fale direto conosco por telefone.</li>
              <li>Cancelamentos com até 6h de antecedência, sem custo.</li>
            </ul>
            <div className="divider" />
            <h3>Contato direto</h3>
            <p>(11) 4002-8922</p>
            <p>reservas@cendre.com.br</p>
          </div>
        </div>
      </section>
    </>
  );
}
