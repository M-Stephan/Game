# Undefined Game

## Author:

* Stephan.M (Wegaso Studio)

## Progress

* Project and structure creation (HTML, CSS, JS *module type*)
* Live Server tests (VSCode)
* Creation of a configuration system
* Creation of a Debug/Log system (3 types: info, success, error)
* Creation of a wrapper for `document.getElementById()`
* Creation of a `locales.js` file (contains translations to be dynamically filled based on the defined language)
* Creation of a main menu (only the settings button works currently, the others log a message)
* Language selection (main menu if already defined)
* Theme creation (dark-light)
* Creation of the settings page and button functionality for theme and language
* Temporary storage in local storage
* Project structure refactor
* Complete documentation refactor in each file
* Variable and file naming refactor
* Refactor of `locales.js` + addition of new locales for the `new-game.js` page
* Creation of `new-game.js` page and its implementation
* Implementation of player data storage
* Create README-FR.md and translate original README.md in english

## Reusable functions:

### Page display

* Main menu page: `setMainMenu()` *from modules/main-menu.js*
* Settings page: `setSettingsPage()` *from modules/settings.js*
* Language selection page: `setLanguagePage()` *from modules/langage.js*

### Wrappers

* HTML get: *document.getElementById(id)* → `getElemById(id)` *from modules/wrappers.js*
* Log / Debug: `log(type, message)` *(type: "info", "error", "success")* *from modules/wrappers.js*

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
|   └─ wrappers/
|       ├─ theme.js
|       └─ wrappers.js
├─ index.html
├─ script.js
├─ style.css
├─ README-FR.md
└─ README.md
```
