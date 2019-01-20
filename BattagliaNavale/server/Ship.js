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

module.exports = Ship;