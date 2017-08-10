function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts(facts) {
  var array = []
  var n = 0
  while (n < facts.length) {
    array.push(facts[n] + "!!!")
    n = n + 1
  }
  return array
}
function iLoveTheBeatles(n) {
  var arr = []
  if (parseInt(n) < 15) {
    do {
      arr.push("I love the Beatles!")
      n = n - 1
    } while (n > -1)
  } else {
    arr.push("I love the Beatles!")
  }
  return arr
}
