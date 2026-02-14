import { removeInventoryItem } from "../services/inventory-services.js";
import { changeStats } from "../services/player-service.js";

export const existing_items = {

    "money": {
        label: "Monnaie",
        type: "item",
        consume: true,
        stack: true
    },

    "bread": {
        label: "Pain",
        type: "food",
        consume: true,
        stack: true
    },

    "burger": {
        label: "Burger",
        type: "food",
        consume: true,
        stack: true
    },

    "water": {
        label: "Bouteille d'eau",
        type: "drink",
        consume: true,
        stack: true
    },

    "pickaxe": {
        label: "Pioche",
        type: "tools",
        consume: false,
        stack: false
    },

    "hache": {
        label: "Hache",
        type: "tools",
        consume: false,
        stack: false
    },

    "fishing_rod": {
        label: "Canne à pêche",
        type: "item",
        consume: false,
        stack: false
    },

    "fresh_fish": {
        label: "Poisson frais",
        type: "item",
        consume: false,
        stack: true
    },

    "cooked_fish": {
        label: "Poisson cuit",
        type: "food",
        consume: true,
        stack: true
    },

    "fresh_meat": {
        label: "Viande fraiche",
        type: "item",
        consume: false,
        stack: true
    },

    "cooked_meat": {
        label: "Viande cuite",
        type: "food",
        consume: true,
        stack: true
    },

    "medicine_kit": {
        label: "Kit de soin",
        type: "item",
        consume: true,
        stack: true
    },

    "bandage": {
        label: "Bandage",
        type: "item",
        consume: true,
        stack: true
    },

    "wood": {
        label: "Bois",
        type: "item",
        consume: false,
        stack: true
    },


    "stone": {
        label: "Pierre",
        type: "item",
        consume: false,
        stack: true
    },

    "cotton": {
        label: "Cotton",
        type: "item",
        consume: false,
        stack: true
    },

    "fabric": {
        label: "Tissu",
        type: "item",
        consume: false,
        stack: true
    }
};

export function useItem(itemKey, quantity) {
    const item = existing_items[itemKey];
    if (!item) return;

    switch(item.type) {
        case "item":
            if (item.consume) removeInventoryItem(itemKey, quantity);
            if (itemKey === "medicine_kit") changeStats("increase", "hp", 50, true);
            else if (itemKey === "bandage") changeStats("increase", "hp", 25, true);
            break;
        case "tools":
            // utiliser un outil fait perdre 1 de faim
            changeStats("decrease", "hunger", 1, true);
            break;
        case "drink":
            if (item.consume) removeInventoryItem(itemKey, quantity);
            changeStats("increase", "thirst", 25, true);
            break;
        case "food":
            if (item.consume) removeInventoryItem(itemKey, quantity);
            changeStats("increase", "hunger", 25, true);
            break;
    }
}

