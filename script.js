import { setLangagePage, getLangage } from './modules/langage.js';
import { locale } from './modules/locales.js';
import { setMainMenu } from './modules/main-menu.js';
import { toggleTheme } from './modules/theme.js';
import { log } from './modules/wrappers.js';


export let config = {};

/************  CONFIGURATION  ************/

// Debug active
config.debug = true;

// Langage by default
config.defaultLangage = locale.fr;

/*****************************************/

// display the last theme or default (dark)
toggleTheme();

// get the last langage or defaut
let lang = getLangage();

// Start the first page don't touch
if (lang !== "") {
    setMainMenu();
} else {
    setLangagePage(lang);
};


// Log local storage
log("info", localStorage);

