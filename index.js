function theBeatlesPlay (musicians, instruments) {
  var arr = []

  while (musicians.length) {
    arr.push(musicians.shift() + " plays " + instruments.shift())
  }
  return arr
}

function johnLennonFacts (facts) {
  var i = 0
  while(i <= facts.length - 1) {
    facts[i] = facts[i] + "!!!"
    i += 1
  }
  return facts
}

function iLoveTheBeatles (i) {
  var res = []
  do {
    res.push("I love the Beatles!")
    i += 1
  } while (i < 15)

  return res
}
