import { getElemById } from "../wrappers/wrappers.js";
import { getPlayerInventory } from "../services/inventory-services.js";
import { log } from "../wrappers/log.js";
import { getItemName, useItem } from "../data/items.js"; // ta fonction useItem robuste
import { playerCutTree } from "../services/threes-service.js";
export function refreshPlayerInventory() {
    log('success', 'refresh player inventory page has been loaded')
    let player_inventory = getPlayerInventory().inventory;
    let inventory_content = getElemById("player-inventory");
    function getInventoryItemName(item_name) {
        return item_name?getItemName(item_name):""
    }
    inventory_content.innerHTML = `
        <h3>Inventaire</h3>
        <button id="slot0" class="inventory_slot">${getInventoryItemName(player_inventory.slot0.item)} X${player_inventory.slot0.quantity || ""}</button>
        <button id="slot1" class="inventory_slot">${getInventoryItemName(player_inventory.slot1.item)} X${player_inventory.slot1.quantity || ""}</button>
        <button id="slot2" class="inventory_slot">${getInventoryItemName(player_inventory.slot2.item)} X${player_inventory.slot2.quantity || ""}</button><br>
        <button id="slot3" class="inventory_slot">${getInventoryItemName(player_inventory.slot3.item)} X${player_inventory.slot3.quantity || ""}</button>
        <button id="slot4" class="inventory_slot">${getInventoryItemName(player_inventory.slot4.item)} X${player_inventory.slot4.quantity || ""}</button>
        <button id="slot5" class="inventory_slot">${getInventoryItemName(player_inventory.slot5.item)} X${player_inventory.slot5.quantity || ""}</button><br>
        <button id="slot6" class="inventory_slot">${getInventoryItemName(player_inventory.slot6.item)} X${player_inventory.slot6.quantity || ""}</button>
        <button id="slot7" class="inventory_slot">${getInventoryItemName(player_inventory.slot7.item)} X${player_inventory.slot7.quantity || ""}</button>
        <button id="slot8" class="inventory_slot">${getInventoryItemName(player_inventory.slot8.item)} X${player_inventory.slot8.quantity || ""}</button><br>
        <button id="slot9" class="inventory_slot">${getInventoryItemName(player_inventory.slot9.item)} X${player_inventory.slot9.quantity || ""}</button>
        <button id="slot10" class="inventory_slot">${getInventoryItemName(player_inventory.slot10.item)} X${player_inventory.slot10.quantity || ""}</button>
        <button id="slot11" class="inventory_slot">${getInventoryItemName(player_inventory.slot11.item)} X${player_inventory.slot11.quantity || ""}</button><br>
        <button id="slot12" class="inventory_slot">${getInventoryItemName(player_inventory.slot12.item)} X${player_inventory.slot12.quantity || ""}</button>
        <button id="slot13" class="inventory_slot">${getInventoryItemName(player_inventory.slot13.item)} X${player_inventory.slot13.quantity || ""}</button>
        <button id="slot14" class="inventory_slot">${getInventoryItemName(player_inventory.slot14.item)} X${player_inventory.slot14.quantity || ""}</button><br>
        <button id="slot15" class="inventory_slot">${getInventoryItemName(player_inventory.slot15.item)} X${player_inventory.slot15.quantity || ""}</button>
        <button id="slot16" class="inventory_slot">${getInventoryItemName(player_inventory.slot16.item)} X${player_inventory.slot16.quantity || ""}</button>
        <button id="slot17" class="inventory_slot">${getInventoryItemName(player_inventory.slot17.item)} X${player_inventory.slot17.quantity || ""}</button><br>
        <button id="slot18" class="inventory_slot">${getInventoryItemName(player_inventory.slot18.item)} X${player_inventory.slot18.quantity || ""}</button>
        <button id="slot19" class="inventory_slot">${getInventoryItemName(player_inventory.slot19.item)} X${player_inventory.slot19.quantity || ""}</button>
    `;

    const slots = [
        "slot0","slot1","slot2","slot3","slot4","slot5","slot6","slot7","slot8","slot9","slot10","slot11","slot12","slot13","slot14","slot15","slot16","slot17","slot18","slot19"
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



            