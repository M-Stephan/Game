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
- Création du dossier ./modules/services/
- Creation et implémentation du fichier ./modules/services/player-crud.js

## Fonctions réutilisables:

### Pages display
- Page menu principal: `setMainMenu()` *from modules/pages/main-menu.js*
- Page paramètres: `setSettingsPage()` *from modules/pages/settings.js*
- Page choix de language: `setLanguagePage()` *from modules/pages/langage.js*

### Wrappers
- HTML get: *document.getElementById(id)* → `getElemById(id)` *from modules/wrappers/wrappers.js*
- Log / Debug: `log(type, message)` *(type: "info", "error", "success")* *from modules/wrappers/wrappers.js*

## CRUD Player data
- GET: `getPlayerData()` *from modules/services/player-crud.js*
- DELETE: `deletePlayerData()` *from modules/services/player-crud.js*
- CREATE/UPDATE: `setPlayerData(player_data)` *from modules/services/player-crud.js* *(player_data est un tableau js)*
```js
// exemple
const player_data = {          
    player: {
        gamertag: gamertag.value,
        firstname: firstname.value,
        lastname: lastname.value
    },
    stats: {
        hunger: 100,
        thirst: 100,
        hp: 100,
        level: 1
    }          
};
```
- GET PLAYER INFO: `getPlayerInfo(info)` *from modules/services/player-crud.js*
  - *remplir le paramètre info* → `gamertag, firstname, lastname, hunger; thirst, hp, level` 

- UPDATE PLAYER STATS: `changeStats(type, stats, amount)`*from modules/services/player-crud.js*
  - *type: `"increase"/"decrease"`, stats: `hunger; thirst, hp`, amount: `chiffre/nombre positif`* (amount ne sera jamais plus grand que 100 ou plus petit que 0 )

- UPDATE PLAYER LEVEL: `levelUp()` *from modules/services/player-crud.js*

## Structure de projet
```
game/
├─ modules/
|   ├─ data/
|   |   ├─ crafts.js
|   |   ├─ items.js
|   |   └─ shops.js
|   ├─ game/
|   |   └─ start-game.js
|   ├─ locales/
|   |   └─ locales.js 
|   ├─ pages/
|   |   ├─ langage.js
|   |   ├─ main-menu.js
|   |   ├─ new-game.js
|   |   └─ settings.js
|   ├─ services/
|   |   ├─ player-crud.js
|   |   └─ player-inventory.js
|   └─ wrappers/
|       ├─ theme.js
|       └─ wrappers.js
├─ index.html
├─ script.js
├─ style.css
├─ README-FR.md
└─ README.md
```