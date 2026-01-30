import { getElemById, log } from '../wrappers/wrappers.js';
import { getLangage } from './langage.js';
import { setParametersPage } from './parameters.js';

export function setMainMenu() {
    let game_screen = getElemById('game-screen');
    let lang = getLangage();

    game_screen.innerHTML = `
        <h2 >${lang.main_menu_title}</h2>
        <button id="new-game-btn">${lang.new_game}</button><br>
        <button id="continue-game-btn">${lang.continue_game}</button><br>
        <button id="parameters">${lang.parameters}</button><br>
    `;

    const new_game_btn =  getElemById('new-game-btn');
    const continue_game_btn = getElemById('continue-game-btn');
    const params = getElemById('parameters');

    new_game_btn.addEventListener("click", function() {
        // setNewGamePage()
        log("info", "This button will redirect to new game page");
    });

    continue_game_btn.addEventListener("click", function() {
        // setContinueGamePage()
        log("info", "This button will redirect to continue game page.");
    });

    params.addEventListener("click", function() {
        setParametersPage(lang);
        log("info", "This button will redirect to parameters page.");
    });
};