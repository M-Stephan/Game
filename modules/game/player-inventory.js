import { getElemById } from "../wrappers/wrappers.js";
import { getPlayerInventory } from "../services/inventory-services.js";
import { log } from "../wrappers/log.js";
import { useItem } from "../data/items.js"; // ta fonction useItem robuste

export function refreshPlayerInventory() {
    log('success', 'refresh player inventory page has been loaded')
    let player_inventory = getPlayerInventory().inventory;
    let inventory_content = getElemById("player-inventory");

    inventory_content.innerHTML = `
        <h3>Inventaire</h3>
        <button id="slot0" class="inventory_slot">${player_inventory.slot0.item || "empty"} x${player_inventory.slot0.quantity || 0}</button>
        <button id="slot1" class="inventory_slot">${player_inventory.slot1.item || "empty"} x${player_inventory.slot1.quantity || 0}</button><br>
        <button id="slot2" class="inventory_slot">${player_inventory.slot2.item || "empty"} x${player_inventory.slot2.quantity || 0}</button>
        <button id="slot3" class="inventory_slot">${player_inventory.slot3.item || "empty"} x${player_inventory.slot3.quantity || 0}</button><br>
        <button id="slot4" class="inventory_slot">${player_inventory.slot4.item || "empty"} x${player_inventory.slot4.quantity || 0}</button>
        <button id="slot5" class="inventory_slot">${player_inventory.slot5.item || "empty"} x${player_inventory.slot5.quantity || 0}</button><br>
        <button id="slot6" class="inventory_slot">${player_inventory.slot6.item || "empty"} x${player_inventory.slot6.quantity || 0}</button>
        <button id="slot7" class="inventory_slot">${player_inventory.slot7.item || "empty"} x${player_inventory.slot7.quantity || 0}</button><br>
        <button id="slot8" class="inventory_slot">${player_inventory.slot8.item || "empty"} x${player_inventory.slot8.quantity || 0}</button>
        <button id="slot9" class="inventory_slot">${player_inventory.slot9.item || "empty"} x${player_inventory.slot9.quantity || 0}</button>
    `;

    const slots = [
        "slot0","slot1","slot2","slot3","slot4","slot5","slot6","slot7","slot8","slot9"
    ];

    slots.forEach(slotId => {
        const slotBtn = getElemById(slotId);
        slotBtn.addEventListener("click", function() {
            const itemKey = player_inventory[slotId].item;
            const quantity = 1; // toujours consommer 1 item par clic
            if (!itemKey || itemKey === "empty") return; // slot vide
            useItem(itemKey, quantity);
            refreshPlayerInventory(); // refresh après utilisation
        });
    });
}



            