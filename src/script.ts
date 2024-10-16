console.log("Hello via Bun!!");

const SHIPTYPES = {
  CARRIER: 5,
  BATTLESHIP: 4,
  CRUISER: 3,
  SUBMARINE: 3,
  DESTROYER: 2,
}

type ShipType = keyof typeof SHIPTYPES

class Ship {
  length: number;
  hitCount: number;
  
  constructor(type: ShipType) {
    this.length = SHIPTYPES[type];
    this.hitCount = 0;
  }

  hit(): void {
    this.hitCount += 1;
  }

  isSunk(): boolean {
    return this.hitCount >= this.length
  }
}

class Gameboard {

}

class Player {

}