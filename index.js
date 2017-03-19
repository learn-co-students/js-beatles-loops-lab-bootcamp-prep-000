function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts) {
  var shoutedFacts= [];
  let i = 0;
  while (i<facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutedFacts
}

function iLoveTheBeatles(number) {
  var beatlesSuck = []
    do {
      beatlesSuck.push("I love the Beatles!")
      number++
    }
    while (number<15);
    return beatlesSuck;
}
