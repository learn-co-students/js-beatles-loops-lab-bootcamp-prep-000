function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(let i = musicians.length; i > 0; i--) {
    array.push (`${musicians.shift()} plays ${instruments.shift()}`)
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
  var newArray = []
  while ( facts.length > 0) {
  newArray.push (facts.shift() + '!!!')
}
  return newArray
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!");
    n++;
  }
  while (n < 15)
  return array
}
