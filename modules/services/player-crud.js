import { log } from "../wrappers/wrappers.js";

// READ
export function getPlayerData() {
    const saved_player_data = localStorage.getItem("player-data");

    if (!saved_player_data) {
        throw new Error("Player data not found in localStorage");
    }

    const player_data = JSON.parse(saved_player_data);

    return player_data;
};

// DELETE
export function deletePlayerData() {
    localStorage.removeItem("player-data");

    // Debug
    log("success", `The player data has been successfully deleted`);
};

// CREATE - UPDATE
export function setPlayerData(player_data) {
    const data = JSON.stringify(player_data);
    localStorage.setItem("player-data", data);

    // Debug
    log("success", `The player data has been successfully saved into local storage.\nobject:\n${data}`);
};

export function getPlayerInfo(info) {
    const player_data = getPlayerData();
    const player = player_data.player;
    const stats = player_data.stats;
    switch (info) {
        case "gamertag":
            return player.gamertag;
        case "firstname":
            return player.firstname;
        case "lastname":
            return player.lastname;
        case "fullname":
            return `${player.firstname} ${player.lastname}`;
        case "hunger":
            return stats.hunger;
        case "thirst":
            return stats.thirst;
        case "hp":
            return stats.hp;
        case "level":
            return stats.level;
        case "full-stats":
            return `Hunger: ${stats.hunger}\n Thirst: ${stats.thirst}\n HP: ${stats.hp}\n Level: ${stats.level}`;
        default:
            log("error", `This info does not exists: ${info}`);
            throw new Error(`This info does not exists: ${info}`);
    }
}

function amountVerify(info_value, amount, type_change) {
    if (type_change === "increase") {
        let result;
        if (info_value + amount > 100) {
            result = 100;
        } else {
            result = info_value + amount;
        };
        return result;
    } else if (type_change === "decrease") {
        let result;
        if (info_value - amount < 0) {
            result = 0;
        } else {
            result = info_value - amount;
        } 
        return result;
    } else {
            log("error", `Type change: ${type_change} does not exists`);
            throw new Error(`Type change: ${type_change} does not exists`);
    };
};

export function changeStats(type, stats, amount) {
    let new_hunger = getPlayerInfo("hunger");
    let new_thirst = getPlayerInfo("thirst");
    let new_hp = getPlayerInfo("hp");
    let new_level = getPlayerInfo("level");


    switch (stats) {
        case "hunger":
            new_hunger = amountVerify(new_hunger, amount, type);
            break;
        case "thirst":
            new_thirst = amountVerify(new_thirst, amount, type);
            break;
        case "hp":
            new_hp = amountVerify(new_hp, amount, type);
            break;
        case "level":
            new_level = amountVerify(new_level, amount, type)
            break;
        default:
            log("error", `Stats: ${stats} does not exists`);
            throw new Error(`Stats: ${stats} does not exists`);
    }

    const new_player_data = {          
        player: {
            gamertag: getPlayerInfo("gamertag"),
            firstname: getPlayerInfo("firstname"),
            lastname: getPlayerInfo("lastname")
        },
        stats: {
            hunger: new_hunger,
            thirst: new_thirst,
            hp: new_hp,
            level: new_level
        }          
    };

    setPlayerData(new_player_data);
}

// Increase 1 level
export function levelUp() {
    changeStats("increase", "level", 1);
}

/************************************************************************/

// TESTS PLAYER DATA MANIPULATION
export function testGetSavedPlayerData() {
    log("info", `\n
        GAMERTAG: ${getPlayerInfo("gamertag")}\n
        FULL NAME: ${getPlayerInfo("firstname")}, ${getPlayerInfo("lastname")}\n
        STATS:\n
          - Hunger: ${getPlayerInfo("hunger")}\n
          - Thirst: ${getPlayerInfo("thirst")}\n
          - HP: ${getPlayerInfo("hp")}\n
          - Level: ${getPlayerInfo("level")}
    `);
};


