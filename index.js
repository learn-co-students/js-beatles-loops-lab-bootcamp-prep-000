function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0, b = musicians.length; i < b;  i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
      }
    return array
  }
function johnLennonFacts(array) {
  var facts = []
  let i = 0
  while (i < array.length) {
    facts.push(`${array[i]}!!!`)
    i++
  }
  return facts
}
function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)
  return array
}
