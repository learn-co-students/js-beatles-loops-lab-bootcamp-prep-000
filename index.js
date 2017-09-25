function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i=0;i<musicians.length;i++) {
    //array.splice(i,0,"${musicians[$[i]]} plays ${instruments[i]}")
    array.push(musicians[i] + " plays " + instruments[i])
  }
    return array
}

function johnLennonFacts(facts) {
  var num = 0
  while (num<facts.length) {
    facts[num] = facts[num] + "!!!"
    num++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!")
    num++
  }
  while(num<15)
  return array
}
