// import mongoose = require('mongoose');
//
// export interface Ship extends mongoose.Document {
//     // fields
//     readonly _id: mongoose.Schema.Types.ObjectId,
//     x: number,
//     y: number,
//     size: number,
//     hits: number,
//     horizontal: boolean,
//     // methods
//     start: (size:number)=>number,
//     isSunk: ()=>boolean,
// }
//
// var shipSchema = new mongoose.Schema( {
//     x: {
//         type: [mongoose.SchemaTypes.Number],
//         required: false
//     },
//     y: {
//         type: mongoose.SchemaTypes.Number,
//         required: false,
//     },
//     size:  {
//         type: mongoose.SchemaTypes.String,
//         required: false
//     },
//     hits:  {
//         type: mongoose.SchemaTypes.String,
//         required: false
//     },
//     horizontal:  {
//         type: mongoose.SchemaTypes.Boolean,
//         required: false
//     },
// })
//
//
//
// /**
//  * Ship constructor
//  * @param {Number} size
//  */
// // function Ship(size) {
// //     this.x = 0;
// //     this.y = 0;
// //     this.size = size;
// //     this.hits = 0;
// //     this.horizontal = false;
// // }
// shipSchema.methods.start = function(size){
//     this.x = 0;
//     this.y = 0;
//     this.size = size;
//     this.hits = 0;
//     this.horizontal = false;
// };
//
// /**
//  * Check if ship is sunk
//  * @returns {Boolean}
//  */
// shipSchema.methods.isSunk = function() {
//     return this.hits >= this.size;
// };
//
//
// export function getSchema() { return shipSchema; }
//
// // Mongoose Model
// var shipModel;  // This is not exposed outside the model
// export function getModel() : mongoose.Model< Ship >  { // Return Model as singleton
//     if( !shipModel ) {
//         shipModel = mongoose.model('Ship', getSchema() )
//     }
//     return shipModel;
// }
//
// export function newShip( data ): Ship {
//     var _shipmodel = getModel();
//     var ship = new _shipmodel( data );
//
//     // TODO costructor to test - if it does not work, try method start
//     debugger;
//     ship.start(data.size);
//
//     return ship;
// }