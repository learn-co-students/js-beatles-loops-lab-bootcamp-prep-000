function theBeatlesPlay(musicians,instruments) {
  var newArr = []
  for (var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i] )
  }
  return newArr
}

function johnLennonFacts(facts) {
  var final = []
  while (facts.length>0) {
    final.push(facts.shift() + "!!!")
  }
  return final
}

function iLoveTheBeatles(num) {
  var final = []
  do {
    final.push("I love the Beatles!")
    num++
  } while (num < 15)
  return final
}
