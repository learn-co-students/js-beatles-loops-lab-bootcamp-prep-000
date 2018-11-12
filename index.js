// add solution here
//const musicians['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
//const instruments['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

var array = []

function theBeatlesPlay(musicians, instruments) {
    for (let i = 0; i < 4 ; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let i = 0
  var array = []
  while (i < facts.length) {
  array.push(facts[i] + "!!!");
  i++
}
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}
