import Link from "next/link";
import NewsletterForm from "./components/NewsletterForm";
import { assetPath } from "./utils/asset";
import styles from "./page.module.css";

const CATEGORIES = [
  { name: "Entradas", desc: "Aberturas leves, pensadas para dividir", img: "/pratos/entradas.jpg" },
  { name: "Pratos principais", desc: "Carnes e peixes, cocção lenta", img: "/pratos/pratos-principais.jpg" },
  { name: "Sobremesas", desc: "Doces autorais da nossa confeitaria", img: "/pratos/sobremesas.jpg" },
  { name: "Vinhos & coquetéis", desc: "Carta assinada pelo nosso sommelier", img: "/pratos/vinhos-coqueteis.jpg" }
];

const DISHES = [
  { name: "Robalo em crosta de ervas", img: "/pratos/robalo.jpg" },
  { name: "Risoto de cogumelos selvagens", img: "/pratos/risoto.jpg" },
  { name: "Cordeiro, purê de raízes", img: "/pratos/cordeiro.jpg" },
  { name: "Tarte tatin, sorvete de baunilha", img: "/pratos/tarte.jpg" },
];

const FEATURES = [
  {
    title: "Produtores locais",
    text: "Trabalhamos direto com pequenas fazendas e pescadores da região — o cardápio muda conforme a estação deles, não a nossa agenda.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 34c0-10 6-18 14-20-2 12-8 18-14 20Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 34c0-8-5-15-12-17 1.5 10 6 15 12 17Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 34V18" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Brasa e tempo lento",
    text: "Grelha a carvão e cocções de até doze horas — extraímos sabor deixando o tempo fazer a maior parte do trabalho.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 6c3 5-2 7-2 11a6 6 0 0 0 12 0c0-2-1-3-2-4 1 6-2 8-4 8a4 4 0 0 1-4-4c0-4 4-6 4-11-2 0-4 0-4 0Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M12 22c-2 3-3 6-3 9a11 11 0 0 0 22 0c0-3-1-6-3-9-1 5-3 8-6 8s-4-3-3-6c-3 1-6 4-7 7" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Vinhos sob medida",
    text: "Harmonizações pensadas taça a taça pelo nosso sommelier residente, com rótulos de pequenos produtores nacionais.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 6h14l-1 12a6 6 0 0 1-12 0L13 6Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 24v10M14 34h12" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

const GALLERY = [
  { img: "/restaurante/restaurante.jpg", tall: true },
  { img: "/restaurante/restaurante (3).jpg", tall: false},
  { img: "/restaurante/restaurante (1).jpg", tall: false },
  { img: "/restaurante/restaurante (2).jpg", tall: true },
];

const TESTIMONIALS = [
  { quote: "Uma das cozinhas mais consistentes da cidade — cada visita entrega o que promete.", source: "Prazer à Mesa" },
  { quote: "Serviço atencioso, carta de vinhos surpreendente para o tamanho da casa.", source: "Guia Gula" },
  { quote: "Voltei três vezes no mesmo mês. Isso já diz tudo.", source: "Cliente Cendre" },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Bem-vindo ao</span>
          <h1 className={styles.heroTitle}>CENDRE</h1>
          <p className={styles.heroSub}>
            Cozinha de estação, brasa lenta e uma carta de vinhos para cada
            momento da noite.
          </p>
          <div className={styles.heroActions}>
            <Link href="/reservas" className="btn btn--solid">
              Reservar mesa
            </Link>
            <Link href="/menu" className="btn btn--light">
              Ver o menu
            </Link>
          </div>
        </div>
        <div className={styles.heroScroll}>role para descobrir</div>
      </section>

      {/* Nossa história */}
      <section className={`section ${styles.story}`}>
        <div className={`wrap ${styles.storyGrid}`}>
          <div className={styles.storyText}>
            <span className="eyebrow">Nossa história</span>
            <h2>Uma mesa onde as estações escrevem o menu</h2>
            <p>
              Cendre nasceu de uma ideia simples: deixar o produto guiar o
              prato, não o contrário. Trabalhamos com pequenos produtores da
              região, cocções lentas e uma equipe que muda a carta a cada
              estação — para que cada visita seja, de fato, uma visita nova.
            </p>
            <div className="divider" />
            <Link href="/chef" className="btn">
              Conheça o chef
            </Link>
          </div>
          <div className={styles.storyImg}>
            <img src={assetPath("https://picsum.photos/id/163/900/1100")} alt="Prato servido no salão do Cendre" />
          </div>
        </div>
      </section>

      {/* Por que Cendre */}
      <section className="section">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Nossa cozinha</span>
            <h2>Por que Cendre</h2>
          </div>
          <div className={styles.features}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="section section--dark">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">O que servimos</span>
            <h2>Menu</h2>
          </div>
          <div className={styles.categories}>
            {CATEGORIES.map((c) => (
              <Link href="/menu" key={c.name} className={styles.categoryCard}>
                <div className={styles.categoryImg}>
                  <img src={assetPath(c.img)} alt="" />
                </div>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </Link>
            ))}
          </div>
          <div className={styles.centerCta}>
            <Link href="/menu" className="btn btn--light">
              Ver menu completo
            </Link>
          </div>
        </div>
      </section>

      {/* Ambiente / galeria */}
      <section className="section">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">O espaço</span>
            <h2>O ambiente</h2>
            <p className={styles.sectionLead}>
              Uma sala pensada para conversas longas: luz baixa, mesas
              espaçadas e um balcão aberto para ver a cozinha em movimento.
            </p>
          </div>
          <div className={styles.gallery}>
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className={`${styles.galleryItem} ${g.tall ? styles.galleryTall : ""}`}
              >
                <img src={assetPath(g.img)} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pratos assinatura */}
      <section className="section section--dark">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Assinatura da casa</span>
            <h2>Pratos que definem o Cendre</h2>
          </div>
          <div className={styles.dishGrid}>
            {DISHES.map((d) => (
              <div key={d.name} className={styles.dishCard}>
                <img src={assetPath(d.img)} alt={d.name} />
                <p>{d.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Quem já esteve aqui</span>
            <h2>Depoimentos</h2>
          </div>
          <div className={styles.testimonials}>
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.source} className={styles.testimonial}>
                <p>{t.quote}</p>
                <cite>{t.source}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Chef teaser */}
      <section className={`section ${styles.chefSection}`}>
        <div className={`wrap ${styles.chefGrid}`}>
          <div className={styles.chefImg}>
            <img src={assetPath("/chef.png")} alt="Chef Marina Adler" />
          </div>
          <div className={styles.chefText}>
            <span className="eyebrow">Quem cozinha</span>
            <h2>Chef Marina Adler</h2>
            <p>
              Quinze anos de cozinha entre França, Portugal e Brasil. À frente
              do Cendre desde 2022, Marina revisa o cardápio a cada troca de
              estação, sempre em contato direto com quem planta e colhe.
            </p>
            <div className="divider" />
            <Link href="/chef" className="btn">
              Conheça a trajetória
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={`section--dark ${styles.newsletter}`}>
        <div className={`wrap ${styles.newsletterInner}`}>
          <span className="eyebrow">Fique por dentro</span>
          <h2>Novidades do Cendre</h2>
          <p>Cardápios de estação, noites especiais e vagas de última hora — direto no seu e-mail.</p>
          <NewsletterForm />
        </div>
      </section>

      {/* CTA reserva */}
      <section className={styles.cta}>
        <div className={styles.ctaOverlay} />
        <div className={`wrap ${styles.ctaContent}`}>
          <span className="eyebrow">Sua mesa espera</span>
          <h2>Reserve uma noite no Cendre</h2>
          <p>Poucas mesas, sem pressa — assim gostamos de servir.</p>
          <Link href="/reservas" className="btn btn--solid">
            Reservar agora
          </Link>
        </div>
      </section>
    </>
  );
}
