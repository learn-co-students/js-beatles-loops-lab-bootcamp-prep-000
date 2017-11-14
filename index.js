function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts (facts) {
  var arraytwo = []
  var i = 0
  while (i < facts.length) {
    arraytwo.push(`${facts[i]}!!!`)
    i++
  }
  return arraytwo
}

function iLoveTheBeatles(number) {
  var arraythree = []
  do {
    arraythree.push ("I love the Beatles!")
    number++
  } while (number < 15)
  return arraythree
}
