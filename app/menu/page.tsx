import styles from "./menu.module.css";

const MENU = [
  {
    category: "Entradas",
    items: [
      { name: "Burrata, tomates confitados e manjericão", price: "R$ 58" },
      { name: "Tartare de atum, gergelim e ponzu", price: "R$ 72" },
      { name: "Vieiras grelhadas, purê de couve-flor", price: "R$ 84" },
      { name: "Pão de fermentação natural, manteiga de ervas", price: "R$ 32" },
    ],
  },
  {
    category: "Pratos principais",
    items: [
      { name: "Robalo em crosta de ervas, legumes da estação", price: "R$ 118" },
      { name: "Risoto de cogumelos selvagens e parmesão", price: "R$ 96" },
      { name: "Cordeiro assado 8 horas, purê de raízes", price: "R$ 132" },
      { name: "Filé mignon, molho de vinho tinto reduzido", price: "R$ 128" },
      { name: "Ravioli de abóbora, manteiga de sálvia", price: "R$ 89" },
    ],
  },
  {
    category: "Sobremesas",
    items: [
      { name: "Tarte tatin, sorvete de baunilha", price: "R$ 42" },
      { name: "Fondant de chocolate 70%, flor de sal", price: "R$ 46" },
      { name: "Panna cotta de frutas vermelhas", price: "R$ 38" },
    ],
  },
  {
    category: "Vinhos & coquetéis",
    items: [
      { name: "Taça de espumante brut", price: "R$ 38" },
      { name: "Negroni clássico", price: "R$ 44" },
      { name: "Seleção de tintos — consulte o sommelier", price: "a partir de R$ 68" },
      { name: "Água com gás / sem gás", price: "R$ 14" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Cardápio</span>
          <h1>Menu</h1>
          <p>
            Pratos autorais preparados com ingredientes de produtores locais.
            A carta muda conforme a estação — pergunte à equipe sobre as
            sugestões do dia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.menuGrid}`}>
          {MENU.map((group) => (
            <div key={group.category} className={styles.group}>
              <h2>{group.category}</h2>
              <div className="divider" />
              <ul>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemDots} />
                    <span className={styles.itemPrice}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          Informe seu garçom sobre restrições alimentares ou alergias. Preços
          sujeitos a alteração sem aviso prévio.
        </p>
      </section>
    </>
  );
}
