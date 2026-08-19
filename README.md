# Route 66 — Enzo & Noé (5–22 sept. 2026)

Site statique (HTML / CSS / JS pur, aucune dépendance à installer) présentant le programme jour par jour du roadtrip Oklahoma City → Los Angeles.

## Contenu
- `index.html` — structure de la page
- `style.css` — design (thème "Americana" route/désert)
- `data.js` — toutes les données du voyage (jours, réservations, liste de courses). **C'est le fichier à modifier** si un horaire, un hôtel ou une réservation change.
- `script.js` — affichage dynamique + interactivité (cases à cocher sauvegardées dans le navigateur)

## Héberger sur GitHub Pages
1. Créez un nouveau repo GitHub (ex. `route66-2026`), public.
2. Ajoutez les 4 fichiers (`index.html`, `style.css`, `script.js`, `data.js`) à la racine du repo.
3. Repo → **Settings → Pages** → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)` → Save.
4. Le site sera en ligne après 1-2 minutes à `https://VOTRE-PSEUDO.github.io/route66-2026/`.

## Tester en local avant de publier
Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur local :
```
python3 -m http.server 8000
```
puis ouvrez `http://localhost:8000`.

## Modifier le contenu
Toutes les infos (horaires de réveil, étapes, hôtels, fiches rando, réservations, liste de courses) sont dans `data.js`, sous forme d'objets JavaScript lisibles — pas besoin de toucher au reste du code pour changer un texte, une date ou un lien.

## Notes
- Les cases cochées (réservations / liste de courses) sont sauvegardées uniquement sur l'appareil utilisé (stockage local du navigateur) — pas de compte, pas de synchronisation entre appareils.
- Les photos proviennent de Wikimedia Commons (libres de droits), avec repli automatique sur un visuel de secours si une image venait à ne plus être disponible.
