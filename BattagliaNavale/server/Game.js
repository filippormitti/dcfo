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
        this.gameStatus = GameStatus.ply1ShipsPlacement;
        this.save();
    }
    console.log('gameSchema.methods.join - end');
    return this.players[0];
};
gameSchema.methods.placeShip = function (x, y, horizontal, shipIndex) {
    // convert Player from string to object
    var player = this.getPlayerFromIndex(this.currentPlayer);
    var response = player.placeShip(x, y, horizontal, shipIndex);
    // console.log('gameSchema.methods.placeShip - player.ships= '+JSON.stringify(player.ships));
    // console.log('gameSchema.methods.placeShip - this.currentPlayer= '+this.currentPlayer);
    // console.log('gameSchema.methods.placeShip - response= '+JSON.stringify(response));
    if (response != undefined && response != null && response.placed) {
        this.forceSave(player, this.currentPlayer);
    }
    if (response != undefined && response != null && response.placemCompleted) {
        this.switchPlayer();
        this.gameStatus = (this.gameStatus === GameStatus.ply1ShipsPlacement) ? GameStatus.ply2ShipsPlacement : GameStatus.inProgress;
        this.save();
    }
    return response.placed;
};
gameSchema.methods.getPlayerFromIndex = function (playerIndex) {
    return this.getPlayerFromString(this.players[playerIndex]);
};
gameSchema.methods.getPlayerFromString = function (string) {
    var oPlayer = JSON.parse(string);
    // console.log('oPlayer= '+JSON.stringify(oPlayer));
    var player = new Player(oPlayer.userId);
    player.shipGrid = oPlayer.shipGrid;
    player.ships = oPlayer.ships;
    player.shots = oPlayer.shots;
    // console.log('player.userId= '+player.userId);
    return player;
};
gameSchema.methods.forceSave = function (player, playerIndex) {
    // to save game.players it's needed to clear it and save it again... probably some mongoose bug
    var players = this.players;
    this.players = [];
    this.save();
    this.players = players;
    this.players[playerIndex] = JSON.stringify(player);
    this.save();
};
/**
 * Get socket ID of player
 * @param {type} player
 * @returns {undefined}
 */
gameSchema.methods.getPlayerId = function (playerIndex) {
    var player = this.getPlayerFromIndex(playerIndex);
    return player._id;
};
/**
 * Get socket ID of winning player
 * @returns {BattleshipGame.prototype@arr;players@pro;id}
 */
gameSchema.methods.getWinnerId = function () {
    if (this.winningPlayer === null) {
        return null;
    }
    var player = this.getPlayerFromIndex(this.winningPlayer);
    return player.userId;
};
gameSchema.methods.isMyTurn = function (userId) {
    console.log('gameSchema.methods.placeShip - userId=' + userId);
    var currentPlayer = this.getPlayerFromIndex(this.currentPlayer);
    console.log("gameSchema.methods.placeShip - currentPlayer.userId=" + currentPlayer.userId);
    if (currentPlayer.userId == userId) {
        return true;
    }
    else {
        return false;
    }
};
/**
 * Get socket ID of losing player
 * @returns {BattleshipGame.prototype@arr;players@pro;id}
 */
gameSchema.methods.getLoserId = function () {
    if (this.winningPlayer === null) {
        return null;
    }
    var loserIndex = this.winningPlayer === 0 ? 1 : 0;
    var player = this.getPlayerFromIndex(loserIndex);
    return player.userId;
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
gameSchema.methods.abortGame = function (playerIndex) {
    // give win to opponent
    this.gameStatus = GameStatus.gameOver;
    this.winningPlayer = playerIndex === 0 ? 1 : 0;
    this.save();
};
/**
 * Fire shot for current player
 * @param {Object} position with x and y
 * @returns {boolean} True if shot was valid
 */
gameSchema.methods.shoot = function (x, y) {
    var opponentPlayerIndex = this.currentPlayer === 0 ? 1 : 0;
    var gridIndex = y * Settings.gridCols + x;
    var response = {
        valid: false,
        hit: false,
        gameOver: false
    };
    // convert Player from string to object
    var opponentPlayer = this.getPlayerFromIndex(opponentPlayerIndex);
    console.log('this.gameStatus=' + this.gameStatus);
    console.log('gridIndex=' + gridIndex);
    // console.log('opponentPlayer.shots[gridIndex]='+opponentPlayer.shots[gridIndex]);
    if (opponentPlayer.shots[gridIndex] === 0 && this.gameStatus === GameStatus.inProgress) {
        response.valid = true;
        // shoot
        if (opponentPlayer.shoot(gridIndex)) {
            // hit
            response.hit = true;
        }
        this.switchPlayer();
        // Check if game over
        if (opponentPlayer.getShipsLeft() <= 0) {
            this.gameStatus = GameStatus.gameOver;
            this.winningPlayer = opponentPlayerIndex === 0 ? 1 : 0;
            response.gameOver = true;
        }
        this.forceSave(opponentPlayer, opponentPlayerIndex);
    }
    return response;
};
/**
 * Get game state update (for one grid).
 * @param {Number} player Player who is getting this update
 * @param {Number} gridOwner Player whose grid state to update
 * @returns {BattleshipGame.prototype.getGameState.battleshipGameAnonym$0}
 */
gameSchema.methods.getGameState = function (playerIndex, gridOwner) {
    return {
        turn: this.currentPlayer === playerIndex,
        gridIndex: playerIndex === gridOwner ? 0 : 1,
        grid: this.getGrid(gridOwner, playerIndex !== gridOwner) // hide unsunk ships if this is not own grid
    };
};
/**
 * Get grid with ships for a player.
 * @param {type} player Which player's grid to get
 * @param {type} hideShips Hide unsunk ships
 * @returns {BattleshipGame.prototype.getGridState.battleshipGameAnonym$0}
 */
gameSchema.methods.getGrids = function () {
    var response = {};
    var self = this;
    this.players.forEach(function (playerString, index) {
        // console.log('gameSchema.methods.getGrid - playerString='+playerString+', index='+index);
        var player = self.getPlayerFromIndex(index);
        // console.log('gameSchema.methods.getGrid - player='+player.userId);
        // if (player.userId === userId){
        //     matchedPlayer = player;
        //     // console.log('gameSchema.methods.getGrid - matchedPlayer='+matchedPlayer.userId);
        // }
        console.log('gameSchema.methods.getGrid - player.shots=' + JSON.stringify(player.shots));
        response['player' + index] = player.getSmartGrid();
        // console.log('gameSchema.methods.getGrid - grids='+JSON.stringify(response[player.userId]));
    });
    return response;
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