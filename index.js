function theBeatlesPlay(musicians, instruments) {
  var statement = []
  for (var i=0;i<=musicians.length-1;i++) {
    statement.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return statement
}

function johnLennonFacts(facts) {
  var statement = []
  var i=0
  while (i<facts.length) {
    statement.push (`${facts[i]}!!!`)
    i=i+1
  }
  return statement
}

function iLoveTheBeatles(number) {
  var statement = []
if (number>=15) {
  return statement = ["I love the Beatles!"]
} else {
    do {
      statement.push ("I love the Beatles!")
      number--
    }
    while (number>=0)
    return statement
  }
}
