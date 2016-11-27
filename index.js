function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (var x in musicians){
    empty.push(`${musicians[x]} plays ${instruments[x]}`)
  }
  return empty
}

function johnLennonFacts(facts){
  var empty = []
  while (facts.length > 0){
    var f = facts.shift()
    empty.push(f + '!!!')
  }
  return empty
}

function iLoveTheBeatles(number){
  var empty = []
  do {
    empty.push('I love the Beatles!')
    number++
  } while(number < 15)
  return empty
}
