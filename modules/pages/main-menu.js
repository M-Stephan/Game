// Import modules
import { getElemById } from '../wrappers/wrappers.js';
import { log  } from '../wrappers/log.js';
import { getLanguage } from './language.js';
import { setSettingsPage } from './settings.js';
import { setNewGamePage } from './new-game.js';

// Function to show main menu
export function setMainMenu() {
    // Debug
    log("success", "Main menu page has been successfully loaded");

    // Get game-screen div
    let game_screen = getElemById('game-screen');

    // Get the language in the local storage
    let lang = getLanguage();

    // Fill the content of the game-screen div
    game_screen.innerHTML = `
        <h2 >${lang.main_menu_title}</h2>
        <button id="new-game-btn">${lang.new_game}</button><br>
        <button id="continue-game-btn">${lang.continue_game}</button><br>
        <button id="parameters">${lang.parameters}</button><br>
    `;

    // Get new game button
    const new_game_btn =  getElemById('new-game-btn');

    // Get continue game button
    const continue_game_btn = getElemById('continue-game-btn');

    // Get parameters button
    const params = getElemById('parameters');

    // Event on new game button
    new_game_btn.addEventListener("click", function() {
        // Show new game page
        setNewGamePage();
    });

    // Event on continue game button
    continue_game_btn.addEventListener("click", function() {
        // setContinueGamePage() -- Will be create in few moment
        // debug
        log("info", "This button will redirect to continue game page.");
    });

    // Event on parameters button
    params.addEventListener("click", function() {
        // Show parameters page
        setSettingsPage();
    });
};