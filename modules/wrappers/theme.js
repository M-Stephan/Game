// Function to get the theme defined into the local storage
export function getTheme() {

    // Initialize empty boolean variable
    let bool;

    // This variable contain the theme defined into the local storage
    let theme = localStorage.getItem("theme-dark");

    // Transform string value into boolean value
    if (theme === "true") {
        bool = true
    } else {
        bool = false
    };
    
    // Return the bool value
    return bool;
};

// Function to display the theme based on the defined theme or dark by default
export function toggleTheme() {
    // Get theme defined into the local storage return boolean value
    let theme_dark = getTheme();

    // Display the theme
    if (!theme_dark) {
        document.body.classList.add("theme-light");
    } else {
        document.body.classList.remove("theme-light");
    };
};