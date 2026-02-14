import { log } from "../wrappers/log.js";

// Set default player inventory
export function setDefaultPlayerInventory() {
    let default_player_inventory = {
        slots: 10,
        inventory: {
            slot0: { item: "bread", quantity: 2 },
            slot1: { item: "water", quantity: 2 },
            slot2: { item: "medicine_kit", quantity: 2 }, 
            slot3: { item: "money", quantity: 1000 }, 
            slot4: { item: "pickaxe", quantity: 1 },
            slot5: {},
            slot6: {},
            slot7: {},
            slot8: {},
            slot9: {}
        }
    };

    let json_inventory_version = JSON.stringify(default_player_inventory)
    localStorage.setItem("inventory", json_inventory_version);
    log("info", json_inventory_version);
}

// GET player inventory
export function getPlayerInventory() {
    const saved_inventory = localStorage.getItem("inventory");
    if (!saved_inventory) throw new Error("Inventory does not exists");
    const parsed_inventory = JSON.parse(saved_inventory);
    log("success", "player inventory has been sucessfully loaded");
    return parsed_inventory;
}

// ADD item into player inventory
export function addInventoryItem(item, quantity) {
    const player_inventory = getPlayerInventory();
    if (!player_inventory) {
        log("error", "No inventory found!");
        return;
    }

    const slots = Number(player_inventory.slots);
    const inventory = player_inventory.inventory;

    for (let i = 0; i < slots; i++) {
        const slotKey = `slot${i}`;
        const slot = inventory[slotKey];

        if (slot && slot.item === item) {
            slot.quantity += quantity;
            localStorage.setItem("inventory", JSON.stringify(player_inventory));
            log("success", `${quantity} ${item} added to existing slot ${slotKey}. Total: ${slot.quantity}`);
            return;
        }
    }

    for (let i = 0; i < slots; i++) {
        const slotKey = `slot${i}`;
        const slot = inventory[slotKey];

        if (!slot || Object.keys(slot).length === 0) {
            inventory[slotKey] = { item, quantity };
            localStorage.setItem("inventory", JSON.stringify(player_inventory));
            log("success", `${item} x${quantity} added to ${slotKey}`);
            return;
        }
    }

    alert("Inventory full!");
    log("error", "Cannot add item, inventory is full!");
}

// REMOVE item into player inventory
export function removeInventoryItem(item, quantity) {
    const player_inventory = getPlayerInventory();
    if (!player_inventory) {
        log("error", "No inventory found!");
        return;
    }

    const slots = Number(player_inventory.slots);
    const inventory = player_inventory.inventory;

    // Search item into the inventory
    for (let i = 0; i < slots; i++) {
        const slotKey = `slot${i}`;
        const slot = inventory[slotKey];

        if (slot && slot.item === item) {
            // Item exists
            if (quantity > slot.quantity) {
                alert("Not enough " + item + " in inventory!");
                log("error", `Tried to remove ${quantity} ${item}, but only ${slot.quantity} available`);
                return;
            } else if (quantity === slot.quantity) {
                // Totaly delete the slot if quantity fall to 0
                inventory[slotKey] = {};
                localStorage.setItem("inventory", JSON.stringify(player_inventory));
                log("success", `${item} removed completely from ${slotKey}`);
                return;
            } else {
                // We decrement quantity if the inventory item quantity > item quantity to remove
                slot.quantity -= quantity;
                localStorage.setItem("inventory", JSON.stringify(player_inventory));
                log("success", `${quantity} ${item} removed from ${slotKey}. Remaining: ${slot.quantity}`);
                return;
            }
        }
    }

    // Item not found
    alert(item + " does not exist in inventory!");
    log("error", `${item} not found in inventory`);
}

// GET ITEM into player inventory 
export function getInventoryItem(item, quantity) {
    const player_inventory = getPlayerInventory();
    if (!player_inventory) {
        log("error", "No inventory found!");
        return false;
    }

    const slots = Number(player_inventory.slots);
    const inventory = player_inventory.inventory;

    // Search item in all slots
    for (let i = 0; i < slots; i++) {
        const slotKey = `slot${i}`;
        const slot = inventory[slotKey];

        if (slot && slot.item === item) {
            // Verifiy quantity if item exist
            if (slot.quantity >= quantity) {
                return true;
            } else {
                return false;
            }
        }
    }

    // Item not found
    return false;
}



