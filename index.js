function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array2 = []
  let i = 0
  while (i < facts.length) {
    array2.push(facts[i] + "!!!")
    i++
  }
  return array2
}

function iLoveTheBeatles(n) {
  var array3 = []
  do {
    array3.push("I love the Beatles!")
  } while (n++ && n < 15);
  return array3
}
