function theBeatlesPlay(musicians, instruments) {
  var array =[]
    for (let i=0; i < musicians.length; i++) {
          array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return array
}

function johnLennonFacts (facts) {
  var array = []
  var i = -1
  while (i++ < facts.length-1) {
    array.push(`${facts[i]}!!!`)
  }
  return array
}

function iLoveTheBeatles (number) {
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!")
  } while (i++ < number && number < 15);
  return array
}
