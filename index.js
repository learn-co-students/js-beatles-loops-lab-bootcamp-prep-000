var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(a, b) {
  var beatles = [];
  for (let i = 0; i < 4; i++) {
  let band = a[i]
  let instrument = b[i]
  let sentence = (band + " plays " + instrument)
  beatles.push(sentence)
  }
  return beatles
}

function johnLennonFacts(a) {
  var factList = [];
  for (let i = 0; i < a.length; i++) {
  let facts = a[i]
  let sentence = (facts + "!!!")
  factList.push(sentence)
  }
  return factList;
}

function iLoveTheBeatles(number) {
  var beatlesLove = [];
  var i = (15 - number);
  function incrementVariable() {
    i = i - 1;
    return i;
  }
  do {
    var sentence = "I love the Beatles!"
    incrementVariable();
    beatlesLove.push(sentence);
  } while (i > 0);
  return beatlesLove;
}