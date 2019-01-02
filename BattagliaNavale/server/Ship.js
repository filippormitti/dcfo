"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");

var shipSchema = new mongoose.Schema( {
  x: {
      type: [mongoose.SchemaTypes.Number],
      required: false
  },
  y: {
      type: mongoose.SchemaTypes.Number,
      required: false,
  },
  size:  {
      type: mongoose.SchemaTypes.String,
      required: false
  },
  hits:  {
      type: mongoose.SchemaTypes.String,
      required: false
  },
  horizontal:  {
      type: mongoose.SchemaTypes.Boolean,
      required: false
  },
})






/**
 * Ship constructor
 * @param {Number} size
 */
function Ship(size) {
  this.x = 0;
  this.y = 0;
  this.size = size;
  this.hits = 0;
  this.horizontal = false;
}
Ship.prototype.start = function(size){
  this.x = 0;
  this.y = 0;
  this.size = size;
  this.hits = 0;
  this.horizontal = false;
};

/**
 * Check if ship is sunk
 * @returns {Boolean}
 */
Ship.prototype.isSunk = function() {
  return this.hits >= this.size;
};

module.exports = Ship;


