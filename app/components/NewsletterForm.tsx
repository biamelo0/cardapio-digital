"use client";

import { useState, FormEvent } from "react";
import styles from "./NewsletterForm.module.css";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: ligar a um serviço real (Mailchimp, Resend, etc.)
    setDone(true);
  }

  if (done) {
    return <p className={styles.done}>Inscrição confirmada — até a próxima novidade.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="email" name="email" required placeholder="seu@email.com" />
      <button type="submit" className="btn btn--solid">
        Inscrever
      </button>
    </form>
  );
}
