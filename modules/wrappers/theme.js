export function getTheme() {
    let bool;

    let theme = localStorage.getItem("theme-dark");

    if (theme === "true") {
        bool = true
    } else {
        bool = false
    };
    
    return bool;
};

export function toggleTheme() {
    let theme_dark = getTheme();

    if (!theme_dark) {
        document.body.classList.add("theme-light");
    } else {
        document.body.classList.remove("theme-light");
    };
};