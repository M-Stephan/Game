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

## Fonctions réutilisables:

### Pages display
- Page menu principal: `setMainMenu()` *from modules/main-menu.js*
- Page paramètres: `setParametersPage()` *from modules/parameters.js*
- Page choix de language: `setLangagePage()` *from modules/langage.js*
### Wrappers
- HTML get: *document.getElementById(id)* → `getElemById(id)` *from modules/wrappers.js*
- Log / Debug: `log(type, message)` *(type: "info", "error", "success")* *from modules/wrappers.js*