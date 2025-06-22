# Deployment und Hosting der statischen Website

## 1. Ziel
Automatisches und direktes Deployment einer statischen Website aus dem Git-Repository.

## 2. Variantenvergleich

| Anbieter               | Automatisierung | Einfachheit | Performance | Greenhosting (Ecograder) |
|------------------------|-----------------|-------------|-------------|--------------------------|
| **Cloudflare Pages**   | Vollständig     | Sehr hoch   | CDN-basiert | > 90                     |
| GitHub Pages           | Eingeschränkt   | Hoch        | Edge-Netzwerk | 0                      |
| Netlify                | Vollständig     | Hoch        | CDN-basiert | 0                        |

**Automatisierung**
- Cloudflare Pages und Netlify bieten out-of-the-box CI/CD: Jedes Mal, wenn man in den Hauptbranch pushst, wird automatisch gebaut und veröffentlicht.
- GitHub Pages hat zwar auch eine automatische Veröffentlichung, ist aber weniger flexibel, da es nur Branch-Publishing und keine granularen Build-Pipelines bietet.

**Einfachheit**
- Cloudflare Pages punktet durch ein sehr schlankes Dashboard, klare Verknüpfung per OAuth und vorkonfigurierte Defaults.
- Netlify ist ebenfalls benutzerfreundlich, hat aber etwas mehr Konfigurationsoptionen, die teils verwirrend sein können.
- GitHub Pages ist extrem einfach einzurichten (nur einen Branch pushen), aber bietet weniger Komfort-Features (z. B. keine einfache Environment-Variable-Verwaltung).

**Performance**
- Sowohl Cloudflare Pages als auch Netlify liefern statische Assets über ein globales CDN aus – das sorgt für sehr gute Ladezeiten weltweit.
- GitHub Pages nutzt das GitHub “Edge Network”, das ebenfalls Weltabdeckung bietet, in Benchmarks aber meist etwas langsamer als reine CDN-Anbieter abschneidet.

**Greenhosting (Ecograder)**

> Diese Werte wurden mit [https://ecograder.com](https://ecograder.com) gemessen und beziehen sich nur auf den Green Hosting Index.
- Cloudflare Pages erzielt über 90 von 100 Punkten und wird als „Green“ klassifiziert.
- Netlify erreicht 0 Punkte (kein Green Hosting).
- GitHub Pages erreicht 0 Punkte (kein Green Hosting).

## 3. Entscheidung (Variantenentscheid)
**Gewählt:** Cloudflare Pages

**Begründung:**
- Einfache Integration mit Git-Repository
- Automatisches Build und Deployment bei jedem Push (CI/CD)
- Globales CDN für schnelle Auslieferung
- Höchster Ecograder-Score (> 90), erfüllt Greenhosting-Kriterien

## 4. Anhänge

- Cloudflare Pages Dokumentation: [https://developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- GitHub Pages Dokumentation: [https://docs.github.com/en/pages](https://docs.github.com/en/pages)
- Netlify Dokumentation: [https://docs.netlify.com/](https://docs.netlify.com/)
