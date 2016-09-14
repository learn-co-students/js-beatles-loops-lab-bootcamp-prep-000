function theBeatlesPlay(musicians, instruments) {
  var array = new Array()
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array = new Array()
  var i = 0
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = new Array()
  var i = 0
  do {
    array.push("I love the Beatles!")
    i++
  } while (n < 15 && i <= n);
  return array

}
