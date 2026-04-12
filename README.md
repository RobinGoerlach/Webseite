# robin-goerlach.de

Offizielles Repository der Website **robin-goerlach.de**.

In diesem Repository werden Quellcode, Assets und Konfigurationsdateien für den Webauftritt gepflegt. Ziel ist eine saubere, nachvollziehbare und versionierte Grundlage für die Weiterentwicklung der Webseite.

## Ziel des Projekts

Die Website dient als zentrale Webpräsenz von **Robin Goerlach**. Je nach Ausbaustufe können hier unter anderem folgende Inhalte gepflegt werden:

- Vorstellung von Person, Leistungen oder Projekten
- Kontakt- und Informationsseiten
- Technische oder geschäftliche Inhalte
- Statische und/oder dynamische Web-Komponenten

## Projektstatus

Das Projekt befindet sich im Aufbau und wird fortlaufend erweitert.

## Lokale Entwicklung

Repository klonen:

```bash
git clone https://github.com/RobinGoerlach/Webseite.git
cd Webseite
```

Je nach technischer Umsetzung kann die Seite lokal unterschiedlich gestartet werden.

Für eine rein statische Website genügt oft bereits ein kleiner lokaler Webserver, zum Beispiel:

```bash
python -m http.server 8000
```

Danach ist die Seite im Browser unter `http://localhost:8000` erreichbar.

Falls das Projekt später mit PHP oder einem Frontend-Build-Prozess erweitert wird, kann der lokale Start entsprechend angepasst werden.

## Hinweise zur Pflege

Dieses Repository ist für eine strukturierte Weiterentwicklung gedacht. Sinnvoll sind unter anderem:

- klare Trennung von Inhalt, Assets und Logik
- nachvollziehbare Commit-Nachrichten
- keine Zugangsdaten oder lokalen Konfigurationsdateien im Repository
- saubere Versionsverwaltung auch für spätere Erweiterungen

## Deployment

Das Deployment erfolgt abhängig von Hosting, Serverumgebung und technischer Architektur der Website. Das Repository dient als zentrale Codebasis für Entwicklung, Test und Veröffentlichung.

## Lizenz

Für dieses Repository gilt die Datei [`LICENSE`](./LICENSE).

Kurzfassung:

- **Quellcode** in diesem Repository steht unter der **MIT-Lizenz**.
- **Inhalte der Website** wie Texte, Bilder, Logos und individuelle Gestaltungselemente bleiben, sofern nicht anders angegeben, **urheberrechtlich geschützt**.
