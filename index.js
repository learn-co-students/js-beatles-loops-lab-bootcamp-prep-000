var musicians = ['John', 'Paul', 'George', 'Ringo']
var instruments = ['Guitar', 'Bass', 'Guitar', 'Drums']

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function theBeatlesPlay(member, axe) {
  var beatlesArray = []
  for (var i = 0; i < 4; i++) {
    beatlesArray.push(`${member[i]} plays ${axe[i]}`)
  }
  return beatlesArray
}

function johnLennonFacts(inputArray) {
  var lennonArray = []
  var counter = 0
  while (counter < inputArray.length) {
    lennonArray.push(`${inputArray[counter]}!!!`)
    counter++
  }
  return lennonArray
}

function iLoveTheBeatles(input) {
  var loveArray = []
  do {
    loveArray.push('I love the Beatles!')
    input++
  } while (input < 15);
  return loveArray
}
