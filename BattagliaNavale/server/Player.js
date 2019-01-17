var Ship = require('./Ship.js');
var Settings = require('./settings.js');

/**
 * Player constructor
 * @param {type} id Socket ID
 */
function Player(userId) {
    this.id ='_' + Math.random().toString(36);
    this.userId = userId;
    this.shots = Array(Settings.gridRows * Settings.gridCols);
    this.shipGrid = Array(Settings.gridRows * Settings.gridCols);
    this.ships = [];

    var i;
    for(i = 0; i < Settings.gridRows * Settings.gridCols; i++) {
        this.shots[i] = 0;
        this.shipGrid[i] = -1;
    }
};

// Player.prototype.getShipFromString = function (string) {
//     var oPlayer = JSON.parse(string);
//     // console.log('oPlayer= '+JSON.stringify(oPlayer));
//     var player = new Player(oPlayer.userId);
//     player.shipGrid = oPlayer.shipGrid;
//     player.ships = oPlayer.ships;
//     player.shots = oPlayer.shots;
//     // console.log('player.userId= '+player.userId);
//
//     return player;
// };

/**
 * Fire shot on grid
 * @param {type} gridIndex
 * @returns {Boolean} True if hit
 */
Player.prototype.shoot = function(gridIndex) {
    if(this.shipGrid[gridIndex] >= 0) {
        // Hit!
        this.ships[this.shipGrid[gridIndex]].hits++;
        this.shots[gridIndex] = 2;
        return true;
    } else {
        // Miss
        this.shots[gridIndex] = 1;
        return false;
    }
};

/**
 * Get an array of sunk ships
 * @returns {undefined}
 */
Player.prototype.getSunkShips = function() {
    var i, sunkShips = [];

    for(i = 0; i < this.ships.length; i++) {
        // console.log('Player.prototype.getSunkShips - this.ships[i]='+JSON.stringify(this.ships[i]));
        if(this.ships[i].hits >= this.ships[i].size) {
            sunkShips.push(this.ships[i]);
        }
    }

    return sunkShips;
};

/**
 * Get the number of ships left
 * @returns {Number} Number of ships left
 */
Player.prototype.getShipsLeft = function() {
    var i, shipCount = 0;

    for(i = 0; i < this.ships.length; i++) {
        if(!this.ships[i].hits >= this.ships[i].size) {
            shipCount++;
        }
    }

    return shipCount;
};

// /**
//  * Create ships and place them randomly in grid
//  * @returns {Boolean}
//  */
// Player.prototype.createRandomShips = function() {
//     var shipIndex;
//
//     for(shipIndex = 0; shipIndex < Settings.ships.length; shipIndex++) {
//         ship = new Ship(Settings.ships[shipIndex]);
//
//         if(!this.placeShipRandom(ship, shipIndex)) {
//             return false;
//         }
//
//         this.ships.push(ship);
//     }
//
//     return true;
// };

/**
 * Try to place a ship randomly in grid without overlapping another ship.
 * @param {Ship} ship
 * @param {Number} shipIndex
 * @returns {Boolean}
 */
Player.prototype.placeShip = function(x, y, horizontal, shipIndex) {
    console.log('Player.prototype.placeShip - start');

    // create ship
    var ship = new Ship(Settings.ships[shipIndex]);
    ship.x = x;
    ship.y = y;
    ship.horizontal = horizontal;

    // save ship
    this.ships.push(ship);
    console.log('this.ships= '+JSON.stringify(this.ships));

    // place ship in shipGrid
    var placed = false;
    var i;
    if(!this.checkShipOverlap(ship) && !this.checkShipAdjacent(ship)) {
        // success - ship does not overlap or is adjacent to other ships
        // place ship array-index in shipGrid
        var gridIndex = ship.y * Settings.gridCols + ship.x;
        for(i = 0; i < ship.size; i++) {
            this.shipGrid[gridIndex] = shipIndex;
            gridIndex += ship.horizontal ? 1 : Settings.gridCols;
        }
        placed = true;
    }

    // check if all ships has been placed
    var response = {
        placed: placed,
        all: this.ships.length == Settings.ships.length,
    };

    console.log('this.ships.length='+this.ships.length);
    console.log('Settings.ships.length='+Settings.ships.length);
    console.log('response='+JSON.stringify(response));

    return response;
};

/**
 * Check if a ship overlaps another ship in the grid.
 * @param {Ship} ship
 * @returns {Boolean} True if ship overlaps
 */
Player.prototype.checkShipOverlap = function(ship) {
    var i, gridIndex = ship.y * Settings.gridCols + ship.x;

    for(i = 0; i < ship.size; i++) {
        if(this.shipGrid[gridIndex] >= 0) {
            return true;
        }
        gridIndex += ship.horizontal ? 1 : Settings.gridCols;
    }

    return false;
};

/**
 * Check if there are ships adjacent to this ship placement
 * @param {Ship} ship
 * @returns {Boolean} True if adjacent ship found
 */
Player.prototype.checkShipAdjacent = function(ship) {
    var i, j,
        x1 = ship.x - 1,
        y1 = ship.y - 1,
        x2 = ship.horizontal ? ship.x + ship.size : ship.x + 1,
        y2 = ship.horizontal ? ship.y + 1 : ship.y + ship.size;

    for(i = x1; i <= x2; i++) {
        if(i < 0 || i > Settings.gridCols - 1) continue;
        for(j = y1; j <= y2; j++) {
            if(j < 0 || j > Settings.gridRows - 1) continue;
            if(this.shipGrid[j * Settings.gridCols + i] >= 0) {
                return true;
            }
        }
    }

    return false;
};

// Player.prototype.getGrids = function() {
//     var Grids = {
//         shotsGrid: null,
//         shipsGrid: null
//     };
//     // var grid = [];
//     var lists = [this.shots, this.shipGrid];
//     var gridIndex;
//
//     // for(gridIndex = 0; gridIndex < lists.length; gridIndex++)
//     // {
//     //     var matrix = [], i, k;
//     //
//     //     for (i = 0, k = -1; i < lists[gridIndex].length; i++) {
//     //         if (i % 10 === 0) {
//     //             k++;
//     //             matrix[k] = [];
//     //         }
//     //         matrix[k].push(lists[gridIndex][i]);
//     //     }
//     //
//     //     if (gridIndex === 0){
//     //         Grids.shotsGrid = matrix;
//     //     }
//     //     else{
//     //         Grids.shipsGrid = matrix;
//     //     }
//     // }
//
//     var matrix = [], i, j, k;
//
//     for (i = 0, k = -1; i < this.shots.length; i++) {
//         if (i % 10 === 0) {
//             k++;
//             matrix[k] = [];
//         }
//         var Cell = {
//             shot: this.shots[i]
//         };
//         matrix[k].push(Cell);
//     }
//     for (i = 0; i < this.shipGrid.length; i++) {
//         for (j = 0; j < Settings.gridCols; j++) {
//             matrix[i][].ship = this.shipGrid[i];
//         }
//     }
//
//     // if (gridIndex === 0){
//     //     Grids.shotsGrid = matrix;
//     // }
//     // else{
//     //     Grids.shipsGrid = matrix;
//     // }
//
//
//     return Grids;
// };

Player.prototype.getSmartGrid = function() {
    var grid = [];

    for (var i = 0; i < this.shots.length; i++) {
        var shipIndex = this.shipGrid[i];
        var ship = this.ships[shipIndex];

        grid[i] = {
            shot: this.shots[i],
            ship: this.shipGrid[i],
            sunk: ship.hits >= ship.size
        };
    }

    return grid;
};

module.exports = Player;
