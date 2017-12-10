// number one
function theBeatlesPlay(musicians,instruments) {
  var british = []
  for (let i = 0; i < 4; i++) {
    british.push(musicians[i]+" plays "+instruments[i])
  }
  return british
}

// number 2
function johnLennonFacts(facts) {
  var i = 0;
    while (i < facts.length ) {
      facts[i] = (facts[i]+"!!!")
      i++
    }
  return facts
}

// number 3
function iLoveTheBeatles(n) {
  var beatles = []
  do {
    beatles.push("I love the Beatles!")
    n++
  }
while (n < 15);
return beatles
}
