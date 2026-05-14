# Carteles UCR — Lab 10

Web Components con Shadow DOM, Slots, CSS Custom Properties y CSS Parts.

---

## Customización

### `<cartel-directorio>`

**Cambiar colores** desde `global.css`:

```css
cartel-directorio {
  --color-fondo:      #0d1f4e;  /* fondo de las filas */
  --color-texto:      #c8d8f8;  /* texto de cada fila */
  --color-borde:      rgba(255,255,255,0.08); /* líneas separadoras */
  --color-footer-bg:  linear-gradient(to right, #8a9ab0, #c0cad8, #8a9ab0);
}
```

**Estilizar partes** con `::part()`:

```css
cartel-directorio::part(fila) {
  font-size: 1.1rem;
  padding: 16px 24px;
}

cartel-directorio::part(footer) {
  padding: 16px;
}
```

---

### `<cartel-acoso>`

**Cambiar el texto** con slots:

```html
<cartel-acoso>
  <span slot="subtitulo">Tu bienestar es primero</span>
  <span slot="tagline">¡Denunciá el acoso!</span>
</cartel-acoso>
```

**Cambiar colores** desde `global.css`:

```css
cartel-acoso {
  --color-fondo:        #a06010;  /* fondo dorado */
  --color-badge-1:      #0097a7;  /* badge "LA SEDE" */
  --color-badge-morado: #5b21b6;  /* badge "TE" */
  --color-badge-2:      #0097a7;  /* badge "ACOMPAÑA" */
  --color-excl-izq:     #00bcd4;  /* "¡" izquierdo */
  --color-excl-der:     #f59e0b;  /* "!" derecho */
}
```

**Estilizar partes** con `::part()`:

```css
cartel-acoso::part(tagline) {
  font-size: 1.5rem;
}

cartel-acoso::part(personas) {
  height: 250px;
}

cartel-acoso::part(footer) {
  background: rgba(0,0,0,0.5);
}
```

---

