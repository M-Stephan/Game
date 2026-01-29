
import { config } from '../script.js';

// GetElementById
export function getElemById(id) {
    return document.getElementById(id);
};

// Print system
export function log(type, message) {
    if (config.debug) {
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
