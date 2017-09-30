var musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"]
var instruments = ["rhythm guitar", "bass", "drums", "lead guitar"]

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlayArray = []

  for(let i = 0; i < musicians.length; i++) {
    theBeatlesPlayArray[i]= musicians[i] + " plays " + instruments[i]
  }
  return theBeatlesPlayArray
}

function johnLennonFacts(facts) {
  var excitedFacts = []
  var n = 0

  while (n < facts.length) {
    excitedFacts[n] = facts[n].concat("!!!")
    n += 1
  }
  return excitedFacts
}

function iLoveTheBeatles(n) {
  var loveArray = []

  do {
    loveArray.push("I love the Beatles!")
    n += 1
  } while (n < 15)
  return loveArray
}
//1) Beatles Loops returns an array of strings containing what instruments each musician plays:
//2) Beatles Loops johnLennonFacts returns an array of strings with exclamation points:
//3) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
//4) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:
