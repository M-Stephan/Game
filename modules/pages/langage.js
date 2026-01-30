import { config } from '../../script.js';
import { setMainMenu } from './main-menu.js';
import { getElemById, log  } from '../wrappers/wrappers.js';
import { locale } from '../locales/locales.js';

// Get the 'game-screen' div content
let game_screen = getElemById('game-screen');

// Get the langage choosed
export function getLangage() {
    let saved_langage = localStorage.getItem("lang");

    switch (saved_langage) {
        case "french":
            return locale.fr;
        case "english":
            return locale.en;
        case "spanish":
            return locale.sp;
        case "dutch":
            return locale.du;
        default:
            return config.defaultLangage;
    }
};

// function to save the language into the local storage
export function setLangage(langage) {
    localStorage.setItem("lang", langage);
    log("success", `The language: "${localStorage.getItem("lang")}" has been successfully saved into the local storage`)
};

// function to display the choose langage page
export function setLangagePage() {
    let default_lang = getLangage();
    
    game_screen.innerHTML = `
        <h2>${default_lang.choose_langage_title}</h2><br>
        <button id="french">${default_lang.french}</button><br>
        <button id="english">${default_lang.english}</button><br>
        <button id="spanish">${default_lang.spanish}</button><br>
        <button id="dutch">${default_lang.dutch}</button><br>
    `;
    
    //crea list with all languages available
    const langages = [
        { elem: getElemById("french"), lang: "french" },
        { elem: getElemById("english"), lang: "english" },
        { elem: getElemById("spanish"), lang: "spanish" },
        { elem: getElemById("dutch"), lang: "dutch" }
    ];

    // debug
    log("info", langages);

    // Creaete an Event Listener for all buttons in the list
    langages.forEach(langage => {
        langage.elem.addEventListener("click", function() {
            setLangage(langage.lang);
            setMainMenu();
        });
        return
    });
}