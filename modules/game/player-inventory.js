import { getElemById } from "../wrappers/wrappers.js";
import { getPlayerInventory } from "../services/inventory-services.js";
import { log } from "../wrappers/log.js";
import { useItem } from "../data/items.js"; // ta fonction useItem robuste
import { playerCutTree } from "../services/threes-service.js";
export function refreshPlayerInventory() {
    log('success', 'refresh player inventory page has been loaded')
    let player_inventory = getPlayerInventory().inventory;
    let inventory_content = getElemById("player-inventory");

    inventory_content.innerHTML = `
        <h3>Inventaire</h3>
        <button id="slot0" class="inventory_slot">${player_inventory.slot0.item || ""} X${player_inventory.slot0.quantity || ""}</button>
        <button id="slot1" class="inventory_slot">${player_inventory.slot1.item || ""} X${player_inventory.slot1.quantity || ""}</button><br>
        <button id="slot2" class="inventory_slot">${player_inventory.slot2.item || ""} X${player_inventory.slot2.quantity || ""}</button>
        <button id="slot3" class="inventory_slot">${player_inventory.slot3.item || ""} X${player_inventory.slot3.quantity || ""}</button><br>
        <button id="slot4" class="inventory_slot">${player_inventory.slot4.item || ""} X${player_inventory.slot4.quantity || ""}</button>
        <button id="slot5" class="inventory_slot">${player_inventory.slot5.item || ""} X${player_inventory.slot5.quantity || ""}</button><br>
        <button id="slot6" class="inventory_slot">${player_inventory.slot6.item || ""} X${player_inventory.slot6.quantity || ""}</button>
        <button id="slot7" class="inventory_slot">${player_inventory.slot7.item || ""} X${player_inventory.slot7.quantity || ""}</button><br>
        <button id="slot8" class="inventory_slot">${player_inventory.slot8.item || ""} X${player_inventory.slot8.quantity || ""}</button>
        <button id="slot9" class="inventory_slot">${player_inventory.slot9.item || ""} X${player_inventory.slot9.quantity || ""}</button>
    `;

    const slots = [
        "slot0","slot1","slot2","slot3","slot4","slot5","slot6","slot7","slot8","slot9"
    ];

    slots.forEach(slotId => {
        const slotBtn = getElemById(slotId);
            slotBtn.addEventListener("click", function() {
        const itemKey = player_inventory[slotId].item;
        const quantity = 1;
        if (!itemKey || itemKey === "empty") return;

        if(itemKey === "hache") {
            // coup sur l'arbre autour du joueur
            playerCutTree();
        } else {
            useItem(itemKey, quantity);
        }

        refreshPlayerInventory();
    });
    });
}



            