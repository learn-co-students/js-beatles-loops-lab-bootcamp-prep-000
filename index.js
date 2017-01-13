

function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (var i = 0; i < 4; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts (facts) {
  var i = facts.length - 1
  while (i >= 0) {
    facts[i] = `${facts[i]}!!!`
    --i
  }
  return facts
}

function iLoveTheBeatles (n) {
var array = []
  if (n < 15) {
    do {
      array.push("I love the Beatles!")
      --n
    } while ( n >= 0 )
  } else {
    array.push("I love the Beatles!")
  }
  return array
}
