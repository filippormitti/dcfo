"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var gameSchema = new mongoose.Schema({
    currentPlayer: {
        type: mongoose.SchemaTypes.Number,
        required: false
    },
    winningPlayer: {
        type: mongoose.SchemaTypes.Number,
        required: false,
    },
    gameStatus: {
        type: mongoose.SchemaTypes.Number,
        required: false
    },
    players: {
        type: [mongoose.SchemaTypes.String],
        required: false
    },
});
var Player = require('./Player.js');
var Settings = require('./settings.js');
var GameStatus = require('./gameStatus.js');
// /**
//  * BattleshipGame constructor
//  * @param {type} id Game ID
//  * @param {type} idPlayer1 Socket ID of player 1
//  * @param {type} idPlayer2 Socket ID of player 2
//  */
// function BattleshipGame(id, idPlayer1, idPlayer2) {
//   // this.id = id;
//   this.currentPlayer = Math.floor(Math.random() * 2);
//   this.winningPlayer = null;
//   this.gameStatus = GameStatus.inProgress;
//   this.players = [new Player(idPlayer1), new Player(idPlayer2)];
// };
gameSchema.methods.start = function (userId) {
    console.log('gameSchema.methods.start - start');
    this.currentPlayer = Math.floor(Math.random() * 2);
    this.winningPlayer = null;
    this.gameStatus = GameStatus.waitingPlayer;
    var player = new Player(userId);
    console.log('player.userId= ' + player.userId);
    this.players.push(JSON.stringify(player));
    console.log('gameSchema.methods.start - end');
};
gameSchema.methods.join = function (userId) {
    console.log('gameSchema.methods.join - start');
    console.log('this.players.length=' + this.players.length);
    console.log('this.players=' + this.players);
    if (this.players.length < 2) {
        var player = new Player(userId);
        this.players.push(JSON.stringify(player));
        this.gameStatus = GameStatus.inProgress;
        this.save();
    }
    console.log('gameSchema.methods.join - end');
    return this.players[0];
};
gameSchema.methods.placeShip = function (x, y, horizontal, shipIndex) {
    console.log('gameSchema.methods.placeShip - start');
    var player = this.getPlayerFromString(this.players[this.currentPlayer]);
    var res = player.placeShip(x, y, horizontal, shipIndex);
    console.log('player.ships= ' + JSON.stringify(player.ships));
    var players = this.players;
    this.players = [];
    this.save();
    this.players = players;
    this.players[this.currentPlayer] = JSON.stringify(player);
    this.save();
    console.log('gameSchema.methods.placeShip - end');
    return res;
};
gameSchema.methods.getPlayerFromString = function (string) {
    var playerString = JSON.parse(string);
    // console.log('playerString= '+JSON.stringify(playerString));
    var player = new Player(playerString.userId);
    player.shipGrid = playerString.shipGrid;
    player.ships = playerString.ships;
    player.shots = playerString.shots;
    // console.log('player.userId= '+player.userId);
    return player;
};
/**
 * Get socket ID of player
 * @param {type} player
 * @returns {undefined}
 */
gameSchema.methods.getPlayerId = function (player) {
    return this.players[player].id;
};
/**
 * Get socket ID of winning player
 * @returns {BattleshipGame.prototype@arr;players@pro;id}
 */
gameSchema.methods.getWinnerId = function () {
    if (this.winningPlayer === null) {
        return null;
    }
    return this.players[this.winningPlayer].id;
};
/**
 * Get socket ID of losing player
 * @returns {BattleshipGame.prototype@arr;players@pro;id}
 */
gameSchema.methods.getLoserId = function () {
    if (this.winningPlayer === null) {
        return null;
    }
    var loser = this.winningPlayer === 0 ? 1 : 0;
    return this.players[loser].id;
};
/**
 * Switch turns
 */
gameSchema.methods.switchPlayer = function () {
    this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
};
/**
 * Abort game
 * @param {Number} player Player who made the request
 */
gameSchema.methods.abortGame = function (player) {
    // give win to opponent
    this.gameStatus = GameStatus.gameOver;
    this.winningPlayer = player === 0 ? 1 : 0;
};
/**
 * Fire shot for current player
 * @param {Object} position with x and y
 * @returns {boolean} True if shot was valid
 */
gameSchema.methods.shoot = function (position) {
    var opponent = this.currentPlayer === 0 ? 1 : 0, gridIndex = position.y * Settings.gridCols + position.x;
    if (this.players[opponent].shots[gridIndex] === 0 && this.gameStatus === GameStatus.inProgress) {
        // Square has not been shot at yet.
        if (!this.players[opponent].shoot(gridIndex)) {
            // Miss
            this.switchPlayer();
        }
        // Check if game over
        if (this.players[opponent].getShipsLeft() <= 0) {
            this.gameStatus = GameStatus.gameOver;
            this.winningPlayer = opponent === 0 ? 1 : 0;
        }
        return true;
    }
    return false;
};
/**
 * Get game state update (for one grid).
 * @param {Number} player Player who is getting this update
 * @param {Number} gridOwner Player whose grid state to update
 * @returns {BattleshipGame.prototype.getGameState.battleshipGameAnonym$0}
 */
gameSchema.methods.getGameState = function (player, gridOwner) {
    return {
        turn: this.currentPlayer === player,
        gridIndex: player === gridOwner ? 0 : 1,
        grid: this.getGrid(gridOwner, player !== gridOwner) // hide unsunk ships if this is not own grid
    };
};
/**
 * Get grid with ships for a player.
 * @param {type} player Which player's grid to get
 * @param {type} hideShips Hide unsunk ships
 * @returns {BattleshipGame.prototype.getGridState.battleshipGameAnonym$0}
 */
gameSchema.methods.getGrid = function (player, hideShips) {
    return {
        shots: this.players[player].shots,
        ships: hideShips ? this.players[player].getSunkShips() : this.players[player].ships
    };
};
//*************************************************************** TODO credo si possa rimuovere
function getSchema() { return gameSchema; }
exports.getSchema = getSchema;
// Mongoose Model
var gameModel; // This is not exposed outside the model
function getModel() {
    if (!gameModel) {
        gameModel = mongoose.model('Game', getSchema());
    }
    return gameModel;
}
exports.getModel = getModel;
function newGame(user1Id) {
    var _gamemodel = getModel();
    var game = new _gamemodel();
    game.start(user1Id);
    return game;
}
exports.newGame = newGame;
//# sourceMappingURL=Game.js.map