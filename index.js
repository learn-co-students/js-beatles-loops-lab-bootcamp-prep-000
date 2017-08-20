function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var lennonArray = []
  var i = 0
  while (i < facts.length) {
    lennonArray.push(facts[i] + "!!!")
    i++
  }
  return lennonArray
}

function iLoveTheBeatles(number) {
  var beatlesArray = []
  do {
    beatlesArray.push("I love the Beatles!")
    number++
  } while (number < 15)
  return beatlesArray
}
