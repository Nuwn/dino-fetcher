
var uniqueRandomArray = require('unique-random-array');
var dino = require('./dinosaurs.json');

var getRandomItem = uniqueRandomArray(dino);

module.exports = {
    all: dino,
    random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
