import { setLanguagePage, getSavedLanguage } from './modules/pages/language.js';
import { locale } from './modules/locales/locales.js';
import { setMainMenu } from './modules/pages/main-menu.js';
import { toggleTheme } from './modules/wrappers/theme.js';
import { log } from './modules/wrappers/wrappers.js';

export let config = {};

/************  CONFIGURATION  ************/

// Debug active
config.debug = true;

// Language by default
config.defaultLanguage = locale.en; // Possible choices: locale.de, locale.es, locale.en, locale.fr

/*****************************************/

// display the last theme or default (dark)
toggleTheme();

// get the last language or defaut
let lang = getSavedLanguage();

// Start the first page don't touch
if (lang) {
    setMainMenu();
} else {
    setLanguagePage();
};

// Log local storage
log("info", localStorage);