import styles from "./chef.module.css";

const TIMELINE = [
  { year: "2011", text: "Início na cozinha do Le Basilic, em Lyon" },
  { year: "2015", text: "Sous-chef em restaurante estrelado no Porto" },
  { year: "2019", text: "Retorno ao Brasil para liderar cozinhas autorais" },
  { year: "2022", text: "Abertura do Cendre, com carta 100% de estação" },
];

export default function ChefPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Quem cozinha</span>
          <h1>Chef Marina Adler</h1>
          <p>
            Quinze anos de cozinha entre França, Portugal e Brasil, guiados
            por uma ideia: respeitar o tempo de cada ingrediente.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.grid}`}>
          <div className={styles.img}>
            <img src="chef.png" alt="Chef Marina Adler no salão do Cendre" />
          </div>
          <div className={styles.text}>
            <span className="eyebrow">Trajetória</span>
            <h2>Da brasa ao prato</h2>
            <p>
              Marina começou lavando louça em uma cozinha de bairro em Lyon e
              hoje assina uma das cartas mais comentadas de São Paulo. Sua
              cozinha é construída sobre técnica clássica francesa e
              ingredientes brasileiros — sem pressa, sem excesso.
            </p>
            <p>
              À frente do Cendre desde 2022, Marina revisa o cardápio a cada
              troca de estação, trabalhando diretamente com pequenos
              produtores para garantir que cada prato conte uma história de
              origem.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <div className={styles.timelineHead}>
            <span className="eyebrow">Percurso</span>
            <h2>Uma carreira em movimento</h2>
          </div>
          <div className={styles.timeline}>
            {TIMELINE.map((t) => (
              <div key={t.year} className={styles.timelineItem}>
                <span className={styles.year}>{t.year}</span>
                <span className={styles.timelineText}>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
