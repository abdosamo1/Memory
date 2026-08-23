# Memory

Ein klassisches Memory-Kartenspiel im Browser, gebaut mit TypeScript, Vite und Sass.

## Features

- Zwei Spielthemen: **Gaming** und **DA Projects**
- Wählbare Spielerfarbe (Blau / Orange)
- Drei Spielfeldgrößen: 16, 24 oder 36 Karten
- Punktestand pro Spieler während der Runde
- Gewinner-/Unentschieden-Screen nach Spielende

## Tech-Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) als Build-Tool
- [Sass](https://sass-lang.com/) für die Styles (7-1-Architektur)

## Projektstruktur

```
src/
├── scripts/       # TypeScript-Module (Templates, Rendering, Spiellogik, Themes, Interfaces)
├── styles/         # Sass-Partials (abstract, base, components, layout, pages, themes, vendors)
└── fonts/          # Schriftarten
public/
└── img/            # Statische Bild-Assets (werden 1:1 mit ausgeliefert)
```

## Entwicklung

```bash
npm install
npm run dev
```

Startet den Vite-Dev-Server mit Hot-Reload.

## Build

```bash
npm run build
```

Prüft die Typen (`tsc --noEmit`) und erzeugt das produktionsreife Bundle im `dist/`-Ordner.

```bash
npm run preview
```

Zeigt den `dist/`-Build lokal an, um ihn vor dem Deployment zu prüfen.

## Deployment

Nur der Inhalt des `dist/`-Ordners gehört auf den Server (nicht `src/`, nicht die Projekt-Root-`index.html`). `dist/` wird nicht versioniert (siehe `.gitignore`) und muss vor jedem Deployment neu gebaut werden.

Die Basis-URL ist aktuell fest auf `/Memory/` gesetzt (`vite.config.ts`), passend zum Deployment-Pfad `deine-domain.de/Memory/`. Soll die Seite künftig auf einer anderen Basis-URL laufen (z. B. Domain-Root), muss `base` in `vite.config.ts` entsprechend angepasst werden.
