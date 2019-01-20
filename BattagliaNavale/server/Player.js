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
        if(this.ships[i] != undefined && this.ships[i] != null
            && this.ships[i].hits < this.ships[i].size) {
            shipCount++;
        }
    }

    return shipCount;
};

/**
 * Try to place a ship in grid without overlapping another ship.
 * @param {Ship} ship
 * @param {Number} shipIndex
 * @returns {Boolean}
 */
Player.prototype.placeShip = function(x, y, horizontal, shipIndex) {
    // create ship
    var ship = new Ship(Settings.ships[shipIndex]);
    ship.x = x;
    ship.y = y;
    ship.horizontal = horizontal;

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

        // save ship
        this.ships[shipIndex] = ship;
        placed = true;
    }

    // check if all ships has been placed
    var response = {
        placed: placed,
        placemCompleted: this.isPlacemCompleted(),
    };

    // console.log('response='+JSON.stringify(response));
    return response;
};

Player.prototype.isPlacemCompleted = function() {
    var placemCompleted = true;

    for (var i=0; i < Settings.ships.length; i++){
        if (this.ships[i] == undefined || this.ships[i] == null){
            placemCompleted = false;
        }
    }

    return placemCompleted;
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

Player.prototype.getSmartGrid = function() {
    var grid = [];

    for (var i = 0; i < this.shots.length; i++) {
        var shipIndex = this.shipGrid[i];
        var ship = this.ships[shipIndex];

        grid[i] = {
            shot: this.shots[i],
            ship: this.shipGrid[i],
        };
        if (ship != null && ship != undefined){
            grid[i].sunk = ship.hits >= ship.size;

        }
    }

    return grid;
};

module.exports = Player;
