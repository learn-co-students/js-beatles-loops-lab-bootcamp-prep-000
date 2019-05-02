function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i=0; i<musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var i=0
  var newArray = []
  while(facts.length>i) {
    newArray.push(`${facts[i]}!!!`)
    i++
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var thisArray = []
  do { thisArray.push(`I love the Beatles!`)
  n++
  } while (n<15)
  return thisArray
}



