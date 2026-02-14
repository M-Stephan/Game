import { getPlayerCoord } from '../game/start-game.js';
import { getElemById } from '../wrappers/wrappers.js';
import { getInventoryItem, addInventoryItem } from '../services/inventory-services.js';

let trees = []; // stocke les arbres avec { x, y, hits }
const maxHits = 3;
const treeSpawnInterval = 2 * 60 * 1000; // 2 minutes

// --- CREATE TREE ---
export function createTree(coord) {
    const map = getElemById('map-grid');
    const index = coord.y * 50 + coord.x; // map_size_x = 50
    if (index < 0 || index >= map.children.length) return;

    const cell = map.children[index];
    if (cell.classList.contains('wall') || cell.classList.contains('tree')) return; // collision

    cell.classList.add('tree');
    trees.push({ x: coord.x, y: coord.y, hits: 0 });
}

// --- DELETE TREE ---
export function deleteTree(coord) {
    const map = getElemById('map-grid');
    const index = coord.y * 50 + coord.x;
    if (index < 0 || index >= map.children.length) return;

    const cell = map.children[index];
    cell.classList.remove('tree');
    trees = trees.filter(t => !(t.x === coord.x && t.y === coord.y));
}

// --- SPAWN RANDOM TREES ---
export function spawnRandomTrees() {
    const map = getElemById('map-grid');
    if (!map) return;

    const target = 15; // nombre total d'arbres voulu
    let toSpawn = target - trees.length; // spawn seulement ce qu'il manque
    if(toSpawn <= 0) return;

    let spawned = 0;
    while (spawned < toSpawn) {
        const x = Math.floor(Math.random() * 50);
        const y = Math.floor(Math.random() * 150);
        const index = y * 50 + x;
        const cell = map.children[index];
        if (!cell.classList.contains('wall') && !cell.classList.contains('tree')) {
            createTree({ x, y });
            spawned++;
        }
    }
}


// auto spawn toutes les 2 minutes
setInterval(spawnRandomTrees, treeSpawnInterval);

// --- PLAYER CUT TREE ---
export function playerCutTree() {
    const player = getPlayerCoord();
    const directions = [
        { x: 0, y: -1 }, // haut
        { x: 0, y: 1 },  // bas
        { x: -1, y: 0 }, // gauche
        { x: 1, y: 0 }   // droite
    ];

    for (const dir of directions) {
        const coord = { x: player.x + dir.x, y: player.y + dir.y };
        const tree = trees.find(t => t.x === coord.x && t.y === coord.y);
        if (!tree) continue;

        tree.hits++; // chaque coup incrémente le compteur
        console.log(`Coup sur arbre (${coord.x}, ${coord.y}) => ${tree.hits} / ${maxHits}`);

        if (tree.hits >= maxHits) {
            const quantity = Math.floor(Math.random() * 4) + 2; // 2 à 5 bois
            addInventoryItem("wood", quantity);
            deleteTree(coord);
        }

        break; // ne coupe qu'un arbre à la fois
    }
}



// --- UTILITY ---
export function isTreeAt(coord) {
    return trees.some(t => t.x === coord.x && t.y === coord.y);
}
