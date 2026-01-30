// Import modules
import { config } from '../../script.js';

// Function wrapper for document.getElementById()
export function getElemById(id) {
    // Return the method with the id parameter
    return document.getElementById(id);
};

// Function wrapper for console.log()
export function log(type, message) {
    // Only if config.debug = true into script.js
    if (config.debug) {
        // Builds the log based on the defined type or default if type parameter is not defined
        switch (type) {
            case 'info':
                console.log("%c[WGS INFO] ", "color: orange;", message);
                break;
            case 'error':
                console.log("%c[WGS ERROR] ", "color: red;", message);
                break;
            case 'success':
                console.log("%c[WGS SUCCESS] ", "color: green;", message);
                break;
            default:
                console.log("[WGS] "+ message);
                break;
        };
    } else {
        return;
    };
};
