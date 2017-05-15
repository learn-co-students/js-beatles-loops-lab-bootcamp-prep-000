function theBeatlesPlay(musicians, instruments) {
  var new_array = []

  for (let i = 0; i < musicians.length; i++ ){
    new_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return new_array
}

function johnLennonFacts(facts) {
   return facts.map(fact => fact + "!!!")
}

function iLoveTheBeatles(times) {
  var new_array = []
//  var i = 0
  do {
    new_array.push("I love the Beatles!");
    times++
  } while ( times < 15)
  return new_array
}
