import { getElemById } from "../wrappers/wrappers.js";
import { getPlayerInventory } from "../services/inventory-services.js";

export function showPlayerInventory() {
    const player_inventory = getPlayerInventory().inventory;
    const inventory_content = getElemById("player-inventory");

    inventory_content.innerHTML = `
        <h3>Inventaire</h3>
        <p>${player_inventory.slot0.item || "empty"} x${player_inventory.slot0.quantity || 0}</p>
        <p>${player_inventory.slot1.item || "empty"} x${player_inventory.slot1.quantity || 0}</p>
        <p>${player_inventory.slot2.item || "empty"} x${player_inventory.slot2.quantity || 0}</p>
        <p>${player_inventory.slot3.item || "empty"} x${player_inventory.slot3.quantity || 0}</p>
        <p>${player_inventory.slot4.item || "empty"} x${player_inventory.slot4.quantity || 0}</p>
        <p>${player_inventory.slot5.item || "empty"} x${player_inventory.slot5.quantity || 0}</p>
        <p>${player_inventory.slot6.item || "empty"} x${player_inventory.slot6.quantity || 0}</p>
        <p>${player_inventory.slot7.item || "empty"} x${player_inventory.slot7.quantity || 0}</p>
        <p>${player_inventory.slot8.item || "empty"} x${player_inventory.slot8.quantity || 0}</p>
        <p>${player_inventory.slot9.item || "empty"} x${player_inventory.slot9.quantity || 0}</p>
    `;    
}