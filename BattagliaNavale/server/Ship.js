"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var shipSchema = new mongoose.Schema({
    x: {
        type: [mongoose.SchemaTypes.Number],
        required: false
    },
    y: {
        type: mongoose.SchemaTypes.Number,
        required: false,
    },
    size: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
    hits: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
    horizontal: {
        type: mongoose.SchemaTypes.Boolean,
        required: false
    },
});
/**
 * Ship constructor
 * @param {Number} size
 */
// function Ship(size) {
//     this.x = 0;
//     this.y = 0;
//     this.size = size;
//     this.hits = 0;
//     this.horizontal = false;
// }
shipSchema.methods.start = function (size) {
    console.log('gameSchema.methods.start - start');
    this.x = 0;
    this.y = 0;
    this.size = size;
    this.hits = 0;
    this.horizontal = false;
    console.log('gameSchema.methods.start - end');
};
/**
 * Check if ship is sunk
 * @returns {Boolean}
 */
shipSchema.methods.isSunk = function () {
    return this.hits >= this.size;
};
function getSchema() { return shipSchema; }
exports.getSchema = getSchema;
// Mongoose Model
var shipModel; // This is not exposed outside the model
function getModel() {
    console.log('export function getModel() - start');
    if (!shipModel) {
        shipModel = mongoose.model('Ship', getSchema());
    }
    console.log('export function getModel() - end');
    return shipModel;
}
exports.getModel = getModel;
function newShip(data) {
    console.log('export function newShip() - start');
    var _shipmodel = getModel();
    var ship = new _shipmodel(data);
    ship.start(data.size);
    console.log('export function newShip() - end');
    return ship;
}
exports.newShip = newShip;
//# sourceMappingURL=Ship.js.map