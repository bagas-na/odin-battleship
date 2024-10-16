"use strict";
console.log("Hello via Bun!!");
const SHIPTYPES = {
    CARRIER: 5,
    BATTLESHIP: 4,
    CRUISER: 3,
    SUBMARINE: 3,
    DESTROYER: 2,
};
class Ship {
    constructor(type) {
        this.length = SHIPTYPES[type];
        this.hitCount = 0;
    }
    hit() {
        this.hitCount += 1;
    }
    isSunk() {
        return this.hitCount >= this.length;
    }
}
class Gameboard {
}
class Player {
}
