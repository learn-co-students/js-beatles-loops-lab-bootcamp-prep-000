function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (let i=0; i < musicians.length; i++)
  {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty
}
function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = (`${facts[i]}!!!`)
    i++
  }
  return facts
}
function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}