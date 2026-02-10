// Import Locales
import { setPlayerData } from '../services/player-service.js';
import { getElemById } from '../wrappers/wrappers.js';
import { log  } from '../wrappers/log.js';
import { getLanguage } from './language.js';
import { setMainMenu } from './main-menu.js';
import { setDefaultPlayerInventory } from '../services/inventory-services.js';
import { startGame } from '../game/start-game.js';

// Get 'game-screen' div
const game_screen = getElemById('game-screen');

// Show New game page
export function setNewGamePage() {
    const language = getLanguage();
    // Debug
    log("success", "New game page has been successfully loaDed");

    //  (need locales)
    // Fill the content into 'game-screen ' div
    game_screen.innerHTML = `
        <h1>${language.new_game}</h1>
        <p>${language.new_game_description}</p>
        <form id="new-game-form">
            <label for="player-gamertag">${language.gamertag_label}</label>
            <input id="player-gamertag" name="player-gamertag" type="text" minlength="3" maxlength="15"/>
            
            <label for="player-firstname">${language.firstname_label}</label>
            <input id="player-firstname" name="player-firstname" type="text" minlength="3" maxlength="15"/>
            
            <label for="player-lastname">${language.lastname_label}</label>
            <input id="player-lastname" name="player-lastname" type="text" minlength="3" maxlength="15"/>

            <input id="new-game-submit" type="submit" value="${language.start_new_game}"/>
        </form>
        <button class="return-btn" id="return-to-main-page">${language.return_to_main_page}</button>
    `;
    
    // Get form
    const new_game_form = getElemById('new-game-form');

    const return_btn = getElemById('return-to-main-page');

    // Event for the submit input
    new_game_form.addEventListener("submit", function(event) {
        // Don't refresh the page after submit
        event.preventDefault();
        // Get gamertag input
        const gamertag = getElemById('player-gamertag');
        // Get firstname input
        const firstname = getElemById('player-firstname');
        // Get lastname input
        const lastname = getElemById('player-lastname');

        // Debug
        log("info", `\nGamerTag: ${gamertag.value}\nFirstname: ${firstname.value}\nLastname: ${lastname.value}\n`);

        // Create player datas for local storage
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

        // Save de player data into local storage
        setPlayerData(player_data);
        setDefaultPlayerInventory();

        startGame();

    });

    // Evet to return to the main menu page
    return_btn.addEventListener("click", function() {
        setMainMenu();
    });

};

