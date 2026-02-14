import { getPlayerData, getPlayerIsDead } from '../services/player-service.js';
import { getElemById } from '../wrappers/wrappers.js';
import { changeStats } from '../services/player-service.js';
import { refreshPlayerInventory } from './player-inventory.js';

let intervalId = null;

// --- PLAYER STATE ---
let playerPos = { x: 10, y: 10 }; // position du joueur
let lastMoveTime = 0; // Timestamp du dernier déplacement
const moveDelay = 200; // délai en ms entre deux mouvements
const map_size_x = 50; // taille de la map
const map_size_y = 150;
// --- WALLS STORAGE ---
let walls = JSON.parse(localStorage.getItem('walls')) || [];

// --- START GAME ---
export function startGame() {
    document.body.classList.add('new-game'); // <-- ajoute la classe

    showLifeBar();
    refreshPlayerInventory();
    showMap();
    restoreWalls();
    placePlayer(playerPos.x, playerPos.y);    
    
    const header = getElemById('header');
    if (header) {
        header.tabIndex = -1;  // rendre focusable
        header.focus();         // focus dessus
    }
};


// --- LIFE BAR ---
function showLifeBar() {
    const header = getElemById('header');

    header.innerHTML = `
        <div id="life-bar">
            <p class="hunger"></p>
            <p class="thirst"></p>
            <p class="hp"></p>
            <p class="level"></p>
        </div>
        <div id="player-inventory">
        </div>

    `;

    updateLifeBar();

    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(updateLifeBar, 500); // auto refresh
}

function updateLifeBar() {
    const player_data = getPlayerData();
    if (!player_data) return;

    const { hunger, thirst, hp, level } = player_data.stats;

    const lifeBar = getElemById('life-bar');
    lifeBar.querySelector('.hunger').textContent = `Faim: ${hunger}`;
    lifeBar.querySelector('.thirst').textContent = `Soif: ${thirst}`;
    lifeBar.querySelector('.hp').textContent = `PV: ${hp}`;
    lifeBar.querySelector('.level').textContent = `Niveau: ${level}`;
}

// --- MAP ---
function showMap() {
    const screen = getElemById('game-screen');
    screen.innerHTML = `<div id="map-grid"></div>`;
    const map = getElemById('map-grid');

    for (let i = 0; i < map_size_x * map_size_y; i++) {
        const cell = document.createElement('div');
        cell.classList.add('map-cell');
        map.appendChild(cell);
    }
}

// --- PLACE PLAYER ---
export function placePlayer(x, y) {
    const isdead = getPlayerIsDead();

    if (isdead) {
        const screen = getElemById('game-screen');
        screen.innerHTML = `<h1>Ton personnage est mort!</h1>`;
        return;
    }

    const map = getElemById('map-grid');
    if (!map) return;

    const index = y * map_size_x + x;
    if (index < 0 || index >= map.children.length) return;

    const old = map.querySelector('.player');
    if (old) old.classList.remove('player');

    // Si case mur, ne place pas le joueur
    if (walls.some(w => w.x === x && w.y === y)) return;

    map.children[index].classList.add('player');
    savePlayerCoord(); // sauvegarde automatique
}

// --- GÉRER DÉPLACEMENTS ---
window.addEventListener('keydown', (event) => {
    if (!event.key) return;
    const now = Date.now();
    if (now - lastMoveTime < moveDelay) return; // trop tôt

    let moved = false;

    switch(event.key.toLowerCase()) {
        case 'z': // up
            if (playerPos.y > 0 && !isWall(playerPos.x, playerPos.y - 1)) { playerPos.y--; moved = true; }
            break;
        case 's': // down
            if (playerPos.y < map_size_y - 1 && !isWall(playerPos.x, playerPos.y + 1)) { playerPos.y++; moved = true; }
            break;
        case 'q': // left
            if (playerPos.x > 0 && !isWall(playerPos.x - 1, playerPos.y)) { playerPos.x--; moved = true; }
            break;
        case 'd': // right
            if (playerPos.x < map_size_x - 1 && !isWall(playerPos.x + 1, playerPos.y)) { playerPos.x++; moved = true; }
            break;
    }

    if (moved) {
        placePlayer(playerPos.x, playerPos.y);
        lastMoveTime = now;
        changeStats("decrease", "thirst", "1"); // maintenant exécuté seulement si le joueur bouge
    }
});

// --- UTILITAIRES REUTILISABLES ---
export function getPlayerCoord() {
    return { ...playerPos };
}

export function savePlayerCoord() {
    localStorage.setItem('playerPos', JSON.stringify(playerPos));
}

export function createWall(x, y) {
    if (!walls.some(w => w.x === x && w.y === y)) {
        walls.push({ x, y });
        localStorage.setItem('walls', JSON.stringify(walls));
        drawWall(x, y);
    }
}

export function deleteWall(x, y) {
    walls = walls.filter(w => !(w.x === x && w.y === y));
    localStorage.setItem('walls', JSON.stringify(walls));
    removeWall(x, y);
}

// --- HELPERS WALL ---
export function drawWall(x, y) {
    const map = getElemById('map-grid');
    const index = y * map_size_x + x;
    if (index < 0 || index >= map.children.length) return;
    map.children[index].classList.add('wall');
}

export function removeWall(x, y) {
    const map = getElemById('map-grid');
    const index = y * map_size_x + x;
    if (index < 0 || index >= map.children.length) return;
    map.children[index].classList.remove('wall');
}

export function restoreWalls() {
    walls.forEach(w => drawWall(w.x, w.y));
}

// Vérifie s'il y a un mur à la position
function isWall(x, y) {
    return walls.some(w => w.x === x && w.y === y);
}