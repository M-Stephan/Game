// Import modules
import { config } from '../../script.js';
import { setMainMenu } from './main-menu.js';
import { getElemById, log  } from '../wrappers/wrappers.js';
import { locale } from '../locales/locales.js';

// Get the 'game-screen' div content
let game_screen = getElemById('game-screen');

// Get the language choosed
export function getLanguage() {

    // get the language saved into local storage
    let saved_language = localStorage.getItem("lang");

    // Transform the string value for get the locale language
    switch (saved_language) {
        case "french":
            return locale.fr;
        case "english":
            return locale.en;
        case "spanish":
            return locale.es;
        case "german":
            return locale.de;
        default:
            // Return the language defined by default into config.defaultLanguage (script.js)
            return config.defaultLanguage;
    };
};

// Return language into the local storage (false if the key value does not exists)
export function getSavedLanguage() {
    return localStorage.getItem("lang");
};

// Function to save the language into the local storage
export function setLanguage(language) {
    // Save the last choice into the local storage
    localStorage.setItem("lang", language);
    // Debug
    log("success", `The language: "${localStorage.getItem("lang")}" has been successfully saved into the local storage`);
};

// Function to display the choose language page
export function setLanguagePage() {
    // get the language defined into local storage
    let default_lang = getLanguage();
    
    // Fill the "game-screen" div content
    game_screen.innerHTML = `
        <h2>${default_lang.choose_language_title}</h2><br>
        <button id="french">${default_lang.french}</button><br>
        <button id="english">${default_lang.english}</button><br>
        <button id="spanish">${default_lang.spanish}</button><br>
        <button id="german">${default_lang.german}</button><br>
    `;
    
    // Create list with all languages availables
    const languages = [
        { elem: getElemById("french"), lang: "french" },
        { elem: getElemById("english"), lang: "english" },
        { elem: getElemById("spanish"), lang: "spanish" },
        { elem: getElemById("german"), lang: "german" }
    ];

    // Debug (show the list of all languages availables)
    log("info", languages);

    // Create an Event Listener for all buttons in the list
    languages.forEach(language => {
        language.elem.addEventListener("click", function() {
            // Save the language into the localstorage
            setLanguage(language.lang);
            // Show main menu page
            setMainMenu();
        });
        return;
    });
}