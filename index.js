var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["guitar", "vocals", "bass", "drums"]


function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  };
  return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var punctuatedfacts = []
  let i = 0
  while (i < facts.length) {
    punctuatedfacts.push(facts[i] + "!!!")
    i++
  }
  return punctuatedfacts
}

function iLoveTheBeatles(number) {
  var emptyarray = []
  do {
    emptyarray.push("I love the Beatles!")
    number++
  } while (number < 15);
  return emptyarray
}
