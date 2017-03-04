
function theBeatlesPlay(musicians, instruments) {
  var n = musicians.length
  var array = []
  for (var i = 0; i < n; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var n = facts.length
  var array = []
  var i = 0
  while (i<n) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  var i = 0
  if (n>15) {
    array.push("I love the Beatles!")
  } else {
    do {
      array.push("I love the Beatles!")
      i++
    } while (i<=n)
  }
  return array
}
