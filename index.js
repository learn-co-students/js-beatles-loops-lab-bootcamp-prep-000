function theBeatlesPlay(musician, instrument) {
  var theBeatles = [];
  var string = " plays "
  for (let i = 0; i < musician.length; i++) {
    theBeatles.push(musician[i] + string + instrument[i])
  }
  return theBeatles
};

function johnLennonFacts(array) {
  var crazyFacts = new Array();
  var crazyness = "!!!"
  for (let i = 0; i < array.length; i++) {
    crazyFacts.push(array[i] + crazyness)
  }
  return crazyFacts
};

function iLoveTheBeatles(n) {
  var iLoveTheBeatles = new Array();
  do {
    iLoveTheBeatles.push("I love the Beatles!")
    n++
  }
  while (n < 15)
  return iLoveTheBeatles

};
