function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i = 0; i < 4; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts) {
var lennon = []
let i = 0
  while (i < facts.length) {
    lennon.push(`${facts[i]}!!!`);
      i++;
  }
  return lennon;
}

function iLoveTheBeatles(n) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while (n < 15) {}
  return arr
}
