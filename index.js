var musicians = ['John', 'Eric', 'Dan']

var instruments = ['piano', 'ants', 'harp']

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0 ; i<musicians.length; i++) {
    array = [...array, `${musicians[i]} plays ${instruments[i]}`]
  }
  return array
}

/*
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0 ; i<musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
Can also use this push method
*/
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

/*
function johnLennonFacts(array) {
  var i = 0
  var proclaim = []
  while (array.length > i) {
    proclaim.push(`${array[i]}!!!`);
    i++
  }
  return proclaim
}
*/

function johnLennonFacts(array) {
  var proclaim = []
  while (array.length > 0) {
    proclaim.push(`${array.shift()}!!!`);
  }
  return proclaim
}
// the array.shift removes the first element but also returns the first element when empty thats why it works
//console.log(johnLennonFacts(facts))


function iLoveTheBeatles(num) {
  var array = [] ;
  do {array.push('I love the Beatles!'); num++}
    while (num <15)
    return array
}

console.log(iLoveTheBeatles(16))
