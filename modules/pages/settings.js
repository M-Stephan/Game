import { getLanguage, setLanguagePage } from "./language.js";
import { getTheme } from "../wrappers/theme.js";
import { setMainMenu } from './main-menu.js';
import { getElemById, log } from "../wrappers/wrappers.js";

// Get the theme defined into local storage
let theme_dark = getTheme();

// Function to show the parameters page
export function setSettingsPage() {
        // Debug
        log("success", "The Parameters page is successfully loaded");
        // Get the language defined into local storage
        let default_lang = getLanguage();
        
        // Get the game-screen div
        const game_screen = getElemById('game-screen');

        // Initialize empty variable for locales translate
        let default_theme;

        // Fill the variable according to the theme (light or dark)
        if (theme_dark) {
            default_theme = default_lang.theme_light; // The value will be "light"
        } else {
            default_theme = default_lang.theme_dark; // The value will be "dark"
        }
        // Fill the content of the game-screen div
        game_screen.innerHTML = `
        <h2>${default_lang.parameter_title}</h2><br>
            <button id="language">${default_lang.language}</button><br>
            <button id="theme">${default_lang.theme} ${default_theme}</button><br>
            <button class="return-btn" id="return-to-main-page">${default_lang.return_to_main_page}</button><br>
        `;

        // Get the language button
        const language_btn = getElemById('language');
        // Get the theme button
        const theme_btn = getElemById('theme');
        // Get the return button
        const return_btn = getElemById('return-to-main-page');


        // Event for language button
        language_btn.addEventListener("click", function() {
            // Show language page
            setLanguagePage();
        });

        // Event for the button
        theme_btn.addEventListener("click", function() {
            // Toggle the theme when button is pressed
            document.body.classList.toggle("theme-light");
            // If theme dark active
            if (theme_dark) {
                // Turn the text of button to "Theme light"
                default_theme = default_lang.theme_light;
                // Turn theme dark to false
                theme_dark = false;
                // Save the new  choice into the local storage
                localStorage.setItem("theme-dark", theme_dark);
                // Debug
                log("success", `the theme "${localStorage.getItem("theme-dark")}" is succesfully saved into local storage`)
            }
            // Else if theme light active
            else if (!theme_dark) {
                // Turn the text of button to "Theme dark"
                default_theme = default_lang.theme_dark;
                // Turn theme dark to true
                theme_dark = true;
                // Save the new choice into the local storage
                localStorage.setItem("theme-dark", theme_dark);
                // Debug
                log("success", `the theme "${localStorage.getItem("theme-dark")}" is succesfully saved into local storage`)
            }
            // Debug
            log("info", `the theme dark is set to ${localStorage.getItem("theme-dark")}`);
        });

        // Event for return button
        return_btn.addEventListener("click", function() {
            // Show main menu page
            setMainMenu();
        });
};