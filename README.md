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

In `vite.config.js` ist standardmäßig der Base-Pfad `/` gesetzt, passend für eine eigene Domain wie `robin-goerlach.de`. Für Unterverzeichnisse oder GitHub Pages kann der Base-Pfad über `VITE_BASE_PATH` überschrieben werden.

Wenn du stattdessen unter einer eigenen Domain oder direkt im Root deployen willst, kannst du den Base-Pfad beim Build überschreiben:

```bash
VITE_BASE_PATH=/ npm run build
```

## Hinweise

- Die ursprünglichen Dateien `index.de.html` und `index.en.html` bleiben im Paket als Referenz erhalten.
- Die eigentliche Startseite wird jetzt jedoch sauber von React gerendert.
- Für App-Projekte sollte `package-lock.json` mit eingecheckt werden.


## Wichtig für lokalen Test mit PHP

Dieses Projekt darf **nicht** direkt aus dem Quellverzeichnis mit `php -S` gestartet werden, weil Browser weder JSX noch Vite-Bare-Imports aus `src/main.jsx` direkt verstehen.

So funktioniert es:

```bash
npm install
npm run build
cd dist
php -S 127.0.0.1:4389
```

Dann die Seite im Browser unter `http://127.0.0.1:4389` öffnen.
