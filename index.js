// add solution here
function theBeatlesPlay(music,instrument) {
  var empty = []
  for (let i = 0; i < music.length; i++) {
  empty = [...empty,`${music[i]} plays ${instrument[i]}`];
}
return empty
}

function johnLennonFacts(array) {
 let fact = []
 var i = 0
  while (array.length > i) {
    fact = [...fact,`${array[i]}!!!`]
    i = ++i
  }
  return fact
}

function iLoveTheBeatles(number) {
  var empty = [];
  do {
    empty = [...empty, "I love the Beatles!"];
    number = --number
    } while (number > -1 && number < 15);
    return empty;
}
