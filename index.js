function theBeatlesPlay(musicians, instruments){
  var combo = [];
  var counter = musicians.length;
  for (var i = 0; i < counter; i++){
    combo.push(musicians[i] + " plays " + instruments[i]);
  }
  return combo;
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
