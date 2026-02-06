# Undefined Game

## Author:

- Stephan.M (Wegaso Studio)

## Progress

- Project and structure creation (HTML, CSS, JS *module type*)
- Live Server tests (VSCode)
- Creation of a configuration system
- Creation of a Debug/Log system (3 types: info, success, error)
- Creation of a wrapper for `document.getElementById()`
- Creation of a `locales.js` file (contains translations to be dynamically filled based on the defined language)
- Creation of a main menu (only the settings button works currently, the others log a message)
- Language selection (main menu if already defined)
- Theme creation (dark-light)
- Creation of the settings page and button functionality for theme and language
- Temporary storage in local storage
- Project structure refactor
- Complete documentation refactor in each file
- Variable and file naming refactor
- Refactor of `locales.js` + addition of new locales for the `new-game.js` page
- Creation of `new-game.js` page and its implementation
- Implementation of player data storage
- Creation of README-FR.md and translation of the original `README.md` in French
- Creation of the folder `./modules/services/`
- Creation and implementation of the file `./modules/services/player-crud.js`
- Creation and implementation of the file `./modules/services/player-inventory.js`

## Reusable functions:

### Page display

- Main menu page: `setMainMenu()` *from modules/pages/main-menu.js*
- Settings page: `setSettingsPage()` *from modules/pages/settings.js*
- Language selection page: `setLanguagePage()` *from modules/pages/langage.js*

### Wrappers

- HTML get: document.getElementById(id) → `getElemById(id)` *from modules/wrappers/wrappers.js*
- Log / Debug: `log(type, message)` *(type: "info", "error", "success") from modules/wrappers/wrappers.js*

## CRUD Player data

- GET: `getPlayerData()` *from modules/services/player-crud.js*
- DELETE: `deletePlayerData()` *from modules/services/player-crud.js*
- CREATE/UPDATE: `setPlayerData(player_data)` *from modules/services/ player-crud.js (player_data is a JS object)*
```js
// Example:
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
- GET PLAYER INFO: `getPlayerInfo(info)` from modules/services/player-crud.js
  - fill the info parameter with: gamertag, firstname, lastname, hunger, thirst, hp, level

- UPDATE PLAYER STATS: `changeStats(type, stats, amount)` *from modules/services/player-crud.js*
  - *type: "increase"/"decrease", stats: hunger, thirst, hp, amount: positive number* (will never exceed 100 or go below 0)

- UPDATE PLAYER LEVEL: `levelUp()` *from modules/services/player-crud.js*

## Project structure
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