function theBeatlesPlay(musicians, instruments){
  var strings = []
  for(var i = 0; i < musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return strings
}


function johnLennonFacts(facts) {
  var exclaimedStrings = []
  var counter = 0;
  while (counter < facts.length) {
    exclaimedStrings.push(`${facts[counter]}!!!`)
    counter++
  }
  return exclaimedStrings
}

function iLoveTheBeatles(n) {
  var loveBeatles = []
  do {
    loveBeatles.push('I love the Beatles!')
    n++;
  } while (n < 15);
  return loveBeatles;
}
