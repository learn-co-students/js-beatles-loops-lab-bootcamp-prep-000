function theBeatlesPlay(musicianArray, instrumentArray) {
  var array = []
  for (let i = 0; i < musicianArray.length; i++) {
    var string = `${musicianArray[i]} plays ${instrumentArray[i]}`;
    array.push(string);
  }
  return array
}

function johnLennonFacts(array) {
  var factsArray = []
  let i = 0
  while (i < array.length) {
    var string = `${array[i]}!!!`;
    factsArray.push(string);
    i++;
  }
  return factsArray
}

function iLoveTheBeatles(int) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    int++;
  } while (int < 15);
  return array
}
