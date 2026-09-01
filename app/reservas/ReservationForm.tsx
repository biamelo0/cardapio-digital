"use client";

import { useState, FormEvent } from "react";
import styles from "./reservas.module.css";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // TODO: substituir por chamada real à sua API / serviço de e-mail
    // (ex.: fetch("/api/reservas", { method: "POST", body: new FormData(e.currentTarget) }))
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <h3>Pedido enviado</h3>
        <p>
          Recebemos sua solicitação de reserva. Nossa equipe confirma por
          e-mail em até 2 horas.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label>
          Nome completo
          <input type="text" name="nome" required placeholder="Seu nome" />
        </label>
        <label>
          Telefone
          <input type="tel" name="telefone" required placeholder="(11) 90000-0000" />
        </label>
      </div>

      <label>
        E-mail
        <input type="email" name="email" required placeholder="voce@email.com" />
      </label>

      <div className={styles.row}>
        <label>
          Data
          <input type="date" name="data" required />
        </label>
        <label>
          Horário
          <input type="time" name="horario" required />
        </label>
        <label>
          Pessoas
          <select name="pessoas" defaultValue="2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Observações
        <textarea
          name="observacoes"
          rows={3}
          placeholder="Restrições alimentares, ocasião especial, etc."
        />
      </label>

      <button type="submit" className="btn btn--solid" disabled={loading}>
        {loading ? "Enviando…" : "Confirmar reserva"}
      </button>
    </form>
  );
}
