import { getLangage, setLangagePage } from "./langage.js";
import { getTheme } from "../wrappers/theme.js";
import { setMainMenu } from './main-menu.js';
import { getElemById, log } from "../wrappers/wrappers.js";

let theme_dark = getTheme();

export function setParametersPage() {
        let default_lang = getLangage();
        
        const game_screen = getElemById('game-screen');

        let default_theme;

        if (theme_dark) {
            default_theme = default_lang.theme_light;
        } else {
            default_theme = default_lang.theme_dark;
        }

        game_screen.innerHTML = `
        <h2>${default_lang.parameter_title}<h2><br>
            <button id="langage">${default_lang.langage}</button><br>
            <button id="theme">${default_lang.theme} ${default_theme}</button><br>
            <button id="return-to-main-page">${default_lang.return_to_main_page}</button><br>
        `;

        const langage_btn = getElemById('langage');
        const theme_btn = getElemById('theme');
        const return_btn = getElemById('return-to-main-page');

        langage_btn.addEventListener("click", function() { 
            setLangagePage(default_lang);
        });

        theme_btn.addEventListener("click", function() {
            document.body.classList.toggle("theme-light");
            if (theme_dark) {
                default_theme = default_lang.theme_light;
                theme_dark = false;
                localStorage.setItem("theme-dark", theme_dark);
                log("info", localStorage.getItem("theme-dark"));
                return setParametersPage(default_lang);
            } else if (!theme_dark) {
                default_theme = default_lang.theme_dark;
                theme_dark = true;
                localStorage.setItem("theme-dark", theme_dark);
                log("info", localStorage.getItem("theme-dark"));
                return setParametersPage(default_lang);
            }
        });

        return_btn.addEventListener("click", function() { 
            setMainMenu();
        });
};