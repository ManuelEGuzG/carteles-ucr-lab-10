class CartelAcoso extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.setHTMLUnsafe(/* html */`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          width: 300px;
          background: var(--color-fondo, #c8921a);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 8px 28px rgba(0,0,0,0.45);
          animation: fadeUp 0.6s 0.1s ease both;
          opacity: 0;
          font-family: Arial, sans-serif;
        }

        .top {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 18px 16px 10px;
        }

        /* ── Badges internos (no slots) ── */
        .badges {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .fila-badge {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .badge {
          font-weight: 900;
          font-size: 1.25rem;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 4px;
          color: white;
          letter-spacing: 0.02em;
          opacity: 0;
          animation: popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        .badge-1 {
          background: var(--color-badge-1, #00bcd4);
          animation-delay: 0.4s;
        }

        .badge-morado {
          background: var(--color-badge-morado, #7c3aed);
          animation-delay: 0.55s;
        }

        .badge-2 {
          background: var(--color-badge-2, #00bcd4);
          animation-delay: 0.7s;
        }

        .excl {
          font-size: 2rem;
          font-weight: 900;
          line-height: 1;
          opacity: 0;
          animation: popIn 0.3s ease forwards;
        }
        .excl-izq { color: var(--color-excl-izq, #00bcd4); animation-delay: 0.35s; }
        .excl-der { color: var(--color-excl-der, #f59e0b); animation-delay: 0.75s; }

        /* ── Slots: subtitulo y tagline ── */
        .subtitulo-wrap {
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.4s 0.85s ease forwards;
        }

        ::slotted([slot="subtitulo"]) {
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .tagline-wrap {
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.4s 1s ease both, pulse 3s 1.8s ease-in-out infinite;
        }

        ::slotted([slot="tagline"]) {
          color: white;
          font-size: 1.3rem;
          font-weight: 900;
        }

        /* ── Personas ── */
        .personas {
          width: 100%;
          height: 210px;
          overflow: hidden;
          margin-top: 4px;
          opacity: 0;
          animation: fadeUp 0.5s 1.1s ease forwards;
        }

        .personas img {
          width: 100%;
          height: 310px;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        /* ── Footer ── */
        .footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(0,0,0,0.35);
          padding: 10px 12px;
          opacity: 0;
          animation: fadeUp 0.4s 1.25s ease forwards;
        }

        .footer img {
          height: 28px;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .sep {
          width: 1px;
          height: 30px;
          background: rgba(255,255,255,0.4);
          flex-shrink: 0;
        }

        .acoso {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .acoso-ucr {
          font-size: 0.65rem;
          font-weight: 900;
          color: white;
          letter-spacing: 0.1em;
        }

        .acoso-sub {
          font-size: 0.38rem;
          color: rgba(255,255,255,0.85);
          font-weight: 700;
          line-height: 1.3;
          text-align: center;
        }

        .sg { display: flex; align-items: center; gap: 4px; }
        .sg-letras { font-size: 1.1rem; font-weight: 900; color: white; }
        .sg-texto { font-size: 0.42rem; color: rgba(255,255,255,0.9); font-weight: 600; line-height: 1.4; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { text-shadow: none; }
          50%       { text-shadow: 0 0 10px rgba(255,255,255,0.6); }
        }
      </style>

      <div class="top" part="top">
        <div class="badges" part="badges">
          <div class="fila-badge">
            <span class="excl excl-izq">¡</span>
            <span class="badge badge-1">LA SEDE</span>
          </div>
          <div class="fila-badge">
            <span class="badge badge-morado">TE</span>
            <span class="badge badge-2">ACOMPAÑA</span>
            <span class="excl excl-der">!</span>
          </div>
        </div>

        <div class="subtitulo-wrap">
          <slot name="subtitulo">El respeto no se negocia</slot>
        </div>

        <div class="tagline-wrap" part="tagline">
          <slot name="tagline">¡Pará ya de acosar!</slot>
        </div>
      </div>

      <div class="personas" part="personas">
        <img src="personas.png" alt="Personas">
      </div>

      <div class="footer" part="footer">
        <img src="logo-ucr.png" alt="UCR">
        <span class="sep"></span>
        <div class="acoso">
          <span class="acoso-ucr">UCR</span>
          <span class="acoso-sub">LIBRE DE<br>ACOSO SEXUAL</span>
        </div>
        <span class="sep"></span>
        <div class="sg">
          <span class="sg-letras">SG</span>
          <span class="sg-texto">Sede de<br>Guanacaste</span>
        </div>
      </div>
    `);
  }
}

customElements.define("cartel-acoso", CartelAcoso);