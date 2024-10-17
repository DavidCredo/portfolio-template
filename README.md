# (Karriere-) Portfolio Template

Am Ende unseres Bachelors brauchten wir etwas, das unsere vergangene Arbeit angemessen präsentiert. Etwas das aufzeigt, womit wir uns beschäftigt haben, nicht womit wir beschäftigt wurden. Ein Portfolio, das unsere Persönlichkeit und vor allem unsere vielen spannenden Projekte hervorhebt. Dafür haben wir nichts Passendes gefunden, nichts das simpel gestaltet war uns dennoch unsere Kriterien erfüllt, insbesondere in Bezug auf die grenzenlose technische Erweiterbarkeit. Deshalb haben wir entschieden, es selbst zu machen und es auch Anderen, wie dir, zur Verfügung zu stellen.

Um möglichst frei in der Entwicklung das Frontents zu sein und dabei gleichzeitig ein kleines Content Management System (CMS) aufzubauen, haben wir uns für Astro als grundlegendes Framework entschieden.
Neben einem CMS in Form von sog. _Collections_ haben wir eine Internationalisierung (i18n) eingeführt. Letztere passend zum Modell der Collections und mit besonders wenig redundanter Wiederholung von Code, also anders als die gewöhnliche i18n, die Astro bietet.

## 🚀 Projektstruktur

Beispielhaft die wichtigsten Dateien und Ordner:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── content/
│   │   └── index
│   │       ├── de
│   │       │   └── data.json
│   │       ├── en
│   │       │   └── data.json
│   │       └── schema.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── _rootPages/
│       │   └── index.astro
│       ├── de/
│       │   └── index.astro
│       └── index.astro
└── package.json
```

Das Framework sucht nach `.astro` Dateien im `src/pages/` Verzeichnis. Jede Seite wird auf der Grundlage ihres Dateinamens als eine Route angezeigt. 

**Erste wichtige Anmerkung:** Jede Sprache hat einen eigenen Unterordner. Nur die festgelegte `defaultLang`uage (kann in `src/i18n/ui.ts` definiert werden) darf/muss direkt im `src/pages/` Ordner liegen. Ihre Dateien haben kein Sprachpräfix (übergeordneten Ordner) im Pfadnamen.

Im Verzeichnis `src/components/` befinden sich alle wiederverwendbaren Astro/React/Vue/Svelte/Preact-, also Frontend-Komponenten.

Alle statischen Assets, wie z.B. Bilder, können im Verzeichnis `public/` abgelegt werden.

`src/content/` bildet unsere Collection ab. Wie Du sie benutzt, erfährst Du im nächsten Abschnitt.

## 📝 Content Management System (CMS)
Beim Überblicken der Beispieldateien in diesem Repository wird dir sicherlich aufgefallen sein, dass die einzelnen Pages keine Texte oder Bilder enthalten. Sowieso sind die meisten nur vier Zeilen lang, verweisen auf eine andere Komponente. 

Das liegt daran, dass das Routing von Astro für die Pfadbildung unbedingt entsprechende Ordner und Datein benötigt, wir Code aber nicht doppeln möchten und Inhalte von Struktur und Logik trennen, damit Nutzer unserer Vorlage nur an einer Stelle ansatzen müssen. Diese Stelle ist die Sammlung von Objekten unter `src/content/`. Jede Seite mit individualisierbarem Inhalt hat hier einen zugehörigen Ordner mit ähnlicher Benamung. Die Ausnahme bildet `src/content/personal/`, sie hält allgemeine Angaben über dich als Betreiber der Wesbite. 

In diesen seitenbezogenen Ordnern ist je eine `schema.ts` enthalten, die die Struktur vorgibt. Auf selber Ebene gibt es für **jede** Sprache (auch die `defaultLang`) einen weiteren Ordner, in denen ein `data.json` liegt, das Texte und Bilder (als Verlinkung zum `public/` Verzeichnis) bereitstellt.

**Noch ein Hinweis:** Die rechtlichen Seiten (Impressum und Datenschutzerklärung) sind zwar individualisiert, aber nicht internationalisiert. Wir können keine Verantwortung für die Richtigkeit oder Vollständigkeit dieser Dokumente gewährleisten, schon gar nicht für andere Länder als Deutschland - deshalb sollte sich hier bitte jeder selbst ein Bild machen und zu einer eigenen Lösung finden.

