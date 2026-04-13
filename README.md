# Robin Goerlach – überarbeitete Vite/React-Version

Dieses Paket enthält eine funktionierende React/Vite-Version der Startseite, optisch näher an der bisherigen deutschen HTML-Seite.

## Was überarbeitet wurde

- `src/App.jsx` wurde vollständig neu aufgebaut und orientiert sich stärker an der bisherigen Struktur der Portfolio-Seite.
- `src/main.jsx` rendert die App wieder korrekt.
- `src/index.css` wurde bereinigt und das problematische `@import "daisyui"` entfernt.
- `package-lock.json` ist wieder enthalten.
- `public/vCard.vcf` wurde hinzugefügt, damit der Download-Button funktioniert.
- `.github/workflows/deploy.yml` ist enthalten, damit GitHub Pages mit Vite sauber aus `dist/` deployen kann.

## Lokal starten

```bash
npm install
npm run dev
```

## Produktions-Build

```bash
npm install
npm run build
```

## GitHub Pages

In `vite.config.js` ist standardmäßig der Base-Pfad `/Webseite/` gesetzt, passend für ein Repository mit dem Namen `Webseite` auf GitHub Pages.

Wenn du stattdessen unter einer eigenen Domain oder direkt im Root deployen willst, kannst du den Base-Pfad beim Build überschreiben:

```bash
VITE_BASE_PATH=/ npm run build
```

## Hinweise

- Die ursprünglichen Dateien `index.de.html` und `index.en.html` bleiben im Paket als Referenz erhalten.
- Die eigentliche Startseite wird jetzt jedoch sauber von React gerendert.
- Für App-Projekte sollte `package-lock.json` mit eingecheckt werden.
