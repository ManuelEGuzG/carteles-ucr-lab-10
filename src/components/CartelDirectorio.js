const items = [
  "Aulas 5, 6, 7",
  "Apoyo Informático",
  "Servidores",
  "Laboratorio 1 y 2",
  "Coordinación<br>Informática Empresarial",
];

class CartelDirectorio extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM: el CSS interno NO se filtra hacia fuera ni hacia adentro
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  get #titulo() {
    return this.getAttribute("titulo") ?? "Directorio";
  }

  get #filas() {
    return items.map((label, i) => /* html */`
      <div class="fila" style="animation-delay: ${0.2 + i * 0.15}s" part="fila">
        <span>${label}</span>
        <span class="flecha">→</span>
      </div>
    `).join("");
  }

  render() {
    this.shadowRoot.setHTMLUnsafe(/* html */`
      <style>
        /*
          CSS vars con fallback — se pueden sobreescribir desde fuera:
            cartel-directorio { --color-fondo: #0d1f4e; }
          Las CSS vars SÍ atraviesan el Shadow DOM.
        */
        :host {
          display: block;
          width: 340px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 28px rgba(0,0,0,0.4);
          animation: fadeUp 0.6s ease both;
        }

        .filas {
          display: grid;
          background: var(--color-fondo, #1b2f72);
        }

        .fila {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          border-bottom: 1px solid var(--color-borde, rgba(255,255,255,0.15));
          color: var(--color-texto, #dce4f5);
          font-size: 1rem;
          gap: 12px;
          cursor: default;
          opacity: 0;
          transform: translateX(-16px);
          animation: slideRight 0.4s ease forwards;
          transition: background 0.2s;
        }

        .fila:last-child { border-bottom: none; }
        .fila:hover { background: rgba(255,255,255,0.07); }

        .flecha {
          font-size: 1.1rem;
          font-weight: bold;
          flex-shrink: 0;
          transition: transform 0.2s;
        }

        .fila:hover .flecha { transform: translateX(5px); }

        /* CSS part="footer" → estilable desde fuera con ::part(footer) */
        .footer {
          background: var(--color-footer-bg, linear-gradient(to right, #b0bac8, #d4dce8, #b0bac8));
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 12px;
          animation: fadeUp 0.5s 1s ease both;
          opacity: 0;
        }

        .footer img {
          height: 40px;
          object-fit: contain;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      </style>

      <div class="filas" part="filas">
        ${this.#filas}
      </div>

      <!-- part="footer" permite estilarlo desde fuera con cartel-directorio::part(footer) -->
      <div class="footer" part="footer">
        <img src="logo-ucr.png" alt="Logo UCR">
      </div>
    `);
  }
}

customElements.define("cartel-directorio", CartelDirectorio);