function theBeatlesPlay(array, instruments) {
  var newArr = [];
  for (var i=0; i<array.length; i++) {
    var musicians = array[i]
    var instr = instruments[i]
    newArr.push(`${musicians} plays ${instr}`)
  }
  return newArr
}

function johnLennonFacts(facts) {
  for (var i = 0; i<facts.length; i++) {
    while (i < facts.length) {
      facts[i] += "!!!"
      i++
    }
  }
  return facts
}

function iLoveTheBeatles(n) {
  var newArr = [];
  do {
    newArr.push("I love the Beatles!")
    n++
  } while (n < 15)
  return newArr
}
