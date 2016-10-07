function theBeatlesPlay(musicians, instruments) {
  var music = []
  for (var i = 0; i < musicians.length; i++) {
    if (musicians[i] === 0) {
      music.push(`${musicians[i]} plays ${instruments[i]}`)
    } else {
      music.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  }
  return music;
}

function johnLennonFacts(facts) {
  var counter = 0
  while (counter < facts.length) {
    facts[counter] += "!!!";
    counter++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var quote = []
  do {
    quote.push("I love the Beatles!")
    n++
  } while (n < 15);
  return quote;
}
