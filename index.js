function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i=0, l=musicians.length; i<l; i ++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var shoutedFacts = []
  let i = 0
  while (i < array.length) {
    shoutedFacts.push(`${array[i]}!!!`)
    i ++
  }
  return shoutedFacts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n ++
  } while (n < 15)
  return array
}
