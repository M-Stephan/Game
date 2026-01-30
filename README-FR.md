# Jeu non défini

## Auteur:
- Stephan.M (Wegaso Studio)

## Avancement
- Creation tu projet et structure (html, css, js *type module*)
- Tests Live Server (VSCode)
- Creation d'un systeme de configuration
- Creation d'un systeme de Debug/Log (3 type: info, suceess, error)
- Creation d'un Wrapper pour document.getelementById()
- Creation d'un fichier locales.js (contient les traduction a remplir dynamiquement en fonction du language défini)
- Creation d'un menu principal (seul le bouton paramètre foncitonne actuellement les autres renvoie un log)
- Selection de language (menu principal si déjà définit)
- Creation theme (dark-light)
- Creation de la page de paramètres et fonctionnalité des boutons theme et language
- Enregistrement temporaire en local storage.
- Refactor de la structure du projet
- Refactor complet de la documentation dans chaque fichiers
- Refactor de nommage des variables et fichiers
- Refactor du fichier locales.js + ajout des nouvelles locales pour la page new-game.js
- Creation de la page new-game.js et son implémentation
- Implémentation de l'enregistrement des données joueur
- Création du README-FR.md et traduction du README.md original en anglais

## Fonctions réutilisables:

### Pages display
- Page menu principal: `setMainMenu()` *from modules/main-menu.js*
- Page paramètres: `setSettingsPage()` *from modules/settings.js*
- Page choix de language: `setLanguagePage()` *from modules/langage.js*

### Wrappers
- HTML get: *document.getElementById(id)* → `getElemById(id)` *from modules/wrappers.js*
- Log / Debug: `log(type, message)` *(type: "info", "error", "success")* *from modules/wrappers.js*

## Structure de projet
```
game/
├─ modules/
|   ├─ locales/
|   |   └─ locales.js 
|   ├─ pages/
|   |   ├─ langage.js
|   |   ├─ main-menu.js
|   |   ├─ new-game.js
|   |   └─ settings.js
|   └─ wrappers/
|       ├─ theme.js
|       └─ wrappers.js
├─ index.html
├─ script.js
├─ style.css
├─ README-FR.md
└─ README.md
```