# Portfolio — Ryan ATROUN
Site statique multi-pages (fond étoilé animé, cartes avec surbrillance/tilt, animations douces).

## Structure
- `index.html` — page d'accueil
- `projects.html` — projets
- `about.html` — à propos / compétences
- `music.html` — musique (mixage/mastering + album)
- `contact.html` — contact
- `css/style.css` — styles
- `js/main.js` — effets (tilt, reveal, année)
- `js/starfield.js` — fond d'étoiles + étoiles filantes

## Modifier le contenu
Édite directement les pages `.html` :
- Nom/accroche : `index.html` (section hero)
- Projets : `projects.html` (duplique un `<article class="card">`)
- Compétences & alternance : `about.html`
- Lien de l'album : `music.html` (remplace `#` par ton URL Spotify/Apple)
- Email & LinkedIn : `contact.html`

## Déploiement
GitHub Pages :
- Option A : Settings → Pages → Source = Deploy from a branch (main / root) + fichier `.nojekyll` à la racine.
- Option B : Source = GitHub Actions + workflow `pages.yml` (voir nos messages précédents).
