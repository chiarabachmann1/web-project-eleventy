 # Static Site Generator

Für dieses Projekt wurde der Static Site Generator Eleventy (11ty) ausgewählt.

## Begründung des Variantenentscheids
Eleventy wurde gewählt, weil es mehrere Vorteile bietet, die gut zu den Anforderungen der Gruppenarbeit passen:

- **Flexibilität:**
Eleventy unterstützt unterschiedliche Template-Sprachen wie Markdown, Nunjucks, Liquid, HTML und mehr (11ty.dev/docs/languages/). Das ermöglicht eine einfache Kombination von statischen Inhalten mit dynamischen Templates.

- **Einfachheit:**
Eleventy hat keine Abhängigkeiten von komplexen Build-Tools wie Webpack oder React. Das macht es ideal für einfache und nachhaltige statische Websites (11ty.dev/docs/).

- **Barrierefreiheit und Performance:**
Mit Eleventy erstellte Websites haben von Natur aus wenig Overhead. Das führt zu schnellen Ladezeiten und einem positiven Einfluss auf den Ecograder-Index. Ausserdem lassen sich barrierefreie Designs ohne Zusatzaufwand integrieren.

- **Markdown-Unterstützung:**
Eleventy rendert Markdown-Dateien direkt zu HTML. Das erleichtert die Inhaltsverwaltung und passt zu den Projektanforderungen (11ty.dev/docs/languages/markdown/).

- **Nachhaltigkeit:**
Eleventy wurde von Anfang an so entwickelt, dass es energieeffiziente und ressourcenschonende Websites ermöglicht (Quelle: 11ty.dev).

## Alternative SSG's und Entscheidungsgünde gegen diese:

| SSG | Vorteile | Gründe gegen den Einsatz |
|------|----------|-------------------------|
| **Gatsby** | Sehr leistungsfähig, grosse Plugin-Community | Benötigt React-Kenntnisse, Overhead für einfache Seite zu groß |
| **Hugo** | Extrem schnell beim Build-Prozess | Konfiguration komplexer, Template-Sprache (Go-Templates) weniger flexibel für Team |
| **Jekyll** | Sehr bekannt, gut dokumentiert | Ruby-basiert, weniger flexibel im Template-Stack, Build langsamer als Eleventy |
| **Next.js** | Moderne Features, sehr performant | Eher für komplexe Projekte, React nötig |

## Quellen

- [Eleventy Dokumentation](https://www.11ty.dev/docs/)  
  Offizielle Dokumentation von Eleventy mit umfassenden Informationen zu Features, Templates und Einsatzmöglichkeiten.

- [Gatsby Dokumentation](https://www.gatsbyjs.com/docs/)  
  Hier wird deutlich, dass Gatsby stark auf React basiert und ein umfangreiches Plugin-Ökosystem bietet.

- [Hugo Dokumentation](https://gohugo.io/documentation/)  
  Hugo wirbt mit der Geschwindigkeit des Build-Prozesses, erfordert aber Einarbeitung in Go-Templates.

- [Jekyll Dokumentation](https://jekyllrb.com/docs/)  
  Jekyll ist Ruby-basiert, was im Vergleich zu Eleventy zusätzliche Kenntnisse erfordert.

- [Next.js Dokumentation](https://nextjs.org/docs)  
  Beschreibt die Möglichkeiten und Konzepte von Next.js.

- [LoadFocus: Vorteile der Verwendung von Eleventy](https://loadfocus.com/de-de/glossary/eleventy-11ty#:~:text=Vorteile%20der%20Verwendung%20von%20Eleventy,zu%20schnelleren%20und%20zug%C3%A4nglicheren%20Websites.)  
  Beschreibt die Vorteile von Eleventy.

- [IONOS Digital Guide: Die besten Static Site Generatoren](http://ionos.de/digitalguide/websites/webseiten-erstellen/die-besten-static-site-generatoren/)  
  Übersicht und Vergleich der bekanntesten Static Site Generatoren.
- [LambdaTest Blog: Top Static Site Generators](https://www.lambdatest.com/blog/top-static-site-generators/)  
  Stellt verschiedene SSGs vor und bewertet ihre Eignung je nach Anwendungsfall.

