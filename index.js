function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (let i=0; i<musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var num = 0
  var emptyArray = []
  while(num<facts.length) {
    emptyArray.push(facts[num]+"!!!")
    num++
  }
  return emptyArray
}

function iLoveTheBeatles(x) {
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    x++
  }
  while (x<15)
  return emptyArray
}
