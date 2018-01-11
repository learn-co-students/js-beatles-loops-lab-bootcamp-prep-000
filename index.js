function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}
function johnLennonFacts(facts) {
  const exclaimFacts = []
  let i = 0;
  while (i < facts.length) {
    exclaimFacts.push(`${facts[i]}!!!`)
    i++
  }
  return exclaimFacts;
}
function iLoveTheBeatles(n) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!")
    n++
  } while (n < 15)
  return beatles;
}