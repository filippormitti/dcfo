import mongoose = require('mongoose');
import {Player} from "../client/src/app/Player";
// import * as Player from './Player';
// import Player from './Player.js';

export interface Game extends mongoose.Document {
    // fields
    readonly _id: mongoose.Schema.Types.ObjectId,
    currentPlayer: number,
    winningPlayer: number,
    gameStatus: number,
    players: Object[],
    // methods
    start: (userId:string)=>void,
    join: (userId:string)=>void,
    placeShip: (x:number, y:number, size:number, horizontal:boolean)=>boolean,
    getPlayerFromIndex: (playerIndex:number)=>Player,
    getPlayerFromString: (string:string)=>Player,
    forceSave: (player:Player, playerIndex:number)=>void,
    isMyTurn: (userId:string)=>boolean,
    getPlayerId: (playerIndex:number)=>string,
    getWinnerId: ()=>string,
    getLoserId: ()=>string,
    switchPlayer: ()=>void,
    abortGame: (playerIndex:number)=>void,
    shoot: (x:number,y:number)=>boolean,
    getGameState: (playerIndex:number, gridOwner:number)=>string,
    getGrid: (userId:number)=>string,
}

var gameSchema = new mongoose.Schema( {
    currentPlayer: {
        type: mongoose.SchemaTypes.Number,
        required: false
    },
    winningPlayer: {
        type: mongoose.SchemaTypes.Number,
        required: false,
    },
    gameStatus:  {
        type: mongoose.SchemaTypes.Number,
        required: false
    },
    players:  {
        type: [mongoose.SchemaTypes.String],
        required: false
    },
})




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
    console.log('player.userId= '+player.userId);
    this.players.push(JSON.stringify(player));

    console.log('gameSchema.methods.start - end');
};

gameSchema.methods.join = function (userId) {
    console.log('gameSchema.methods.join - start');
    console.log('this.players.length='+this.players.length);
    console.log('this.players='+this.players);

    if (this.players.length < 2){
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

    // convert Player from string to object
    var player = this.getPlayerFromIndex(this.currentPlayer);

    var response = player.placeShip(x, y, horizontal, shipIndex);

    console.log('player.ships= '+JSON.stringify(player.ships));
    console.log('player.ships= '+this.currentPlayer);

    if (response.all){
        this.switchPlayer();
    }

    this.forceSave(player, this.currentPlayer);

    console.log('player.ships= '+this.currentPlayer);
    console.log('gameSchema.methods.placeShip - end');

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
gameSchema.methods.getPlayerId = function(playerIndex) {
    var player = this.getPlayerFromIndex(playerIndex)
    return player._id;
};

/**
 * Get socket ID of winning player
 * @returns {BattleshipGame.prototype@arr;players@pro;id}
 */
gameSchema.methods.getWinnerId = function() {
    if(this.winningPlayer === null) {
        return null;
    }
    var player = this.getPlayerFromIndex(this.winningPlayer);

    return player.userId;
};

gameSchema.methods.isMyTurn = function(userId) {
    console.log('gameSchema.methods.placeShip - userId='+userId);
    var currentPlayer = this.getPlayerFromIndex(this.currentPlayer);
    console.log("gameSchema.methods.placeShip - currentPlayer.userId="+currentPlayer.userId);

    if (currentPlayer.userId == userId){
        return true;
    }
    else{
        return false;
    }
};

/**
 * Get socket ID of losing player
 * @returns {BattleshipGame.prototype@arr;players@pro;id}
 */
gameSchema.methods.getLoserId = function() {
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
gameSchema.methods.switchPlayer = function() {
  this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
};

/**
 * Abort game
 * @param {Number} player Player who made the request
 */
gameSchema.methods.abortGame = function(playerIndex) {
  // give win to opponent
  this.gameStatus = GameStatus.gameOver;
  this.winningPlayer = playerIndex === 0 ? 1 : 0;
  this.save();
}

/**
 * Fire shot for current player
 * @param {Object} position with x and y
 * @returns {boolean} True if shot was valid
 */
gameSchema.methods.shoot = function(x, y) {
    var opponentPlayerIndex = this.currentPlayer === 0 ? 1 : 0;
    var gridIndex = y * Settings.gridCols + x;

    // convert Player from string to object
    var opponentPlayer = this.getPlayerFromIndex(opponentPlayerIndex);

    if(opponentPlayer.shots[gridIndex] === 0 && this.gameStatus === GameStatus.inProgress) {
        // Square has not been shot at yet.
        if(!opponentPlayer.shoot(gridIndex)) {
            // Miss
            this.switchPlayer();
        }

        // Check if game over
        if(opponentPlayer.getShipsLeft() <= 0) {
            this.gameStatus = GameStatus.gameOver;
            this.winningPlayer = opponentPlayerIndex === 0 ? 1 : 0;
        }

        this.forceSave(opponentPlayer, opponentPlayerIndex);

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
gameSchema.methods.getGameState = function(playerIndex, gridOwner) {
  return {
    turn: this.currentPlayer === playerIndex,                 // is it this player's turn?
    gridIndex: playerIndex === gridOwner ? 0 : 1,             // which client grid to update (0 = own, 1 = opponent)
    grid: this.getGrid(gridOwner, playerIndex !== gridOwner)  // hide unsunk ships if this is not own grid
  };
};

/**
 * Get grid with ships for a player.
 * @param {type} player Which player's grid to get
 * @param {type} hideShips Hide unsunk ships
 * @returns {BattleshipGame.prototype.getGridState.battleshipGameAnonym$0}
 */
gameSchema.methods.getGrid = function(userId) {
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
        console.log('gameSchema.methods.getGrid - player.shots='+JSON.stringify(player.shots));
        response[player.userId] = player.getGrids();
        console.log('gameSchema.methods.getGrid - grids='+JSON.stringify(response[player.userId]));
    });

    return response;
};

 //*************************************************************** TODO credo si possa rimuovere



export function getSchema() { return gameSchema; }

// Mongoose Model
var gameModel;  // This is not exposed outside the model
export function getModel() : mongoose.Model< Game >  { // Return Model as singleton
    if( !gameModel ) {
        gameModel = mongoose.model('Game', getSchema() )
    }
    return gameModel;
}

export function newGame( user1Id ): Game {
    var _gamemodel = getModel();
    var game = new _gamemodel();
    game.start(user1Id);

    return game;
}