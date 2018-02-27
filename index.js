function theBeatlesPlay(musicians, instruments) {
 var ding = []
  for (var lick = 0; lick < 4; lick++) {
    if (lick < 3) {
      ding.push(musicians[lick] + " plays " + instruments[lick])
    }
    else {
       ding.push(musicians[lick] + " plays " + instruments[lick])
      return ding
    }
  }
}

function johnLennonFacts(facts) {
  var a = 0
  var ping = []
  var d = "!!!"
  while (a < facts.length) {
    ping.push(facts[a] + d)
    a++
  }
  return ping
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    n++
    array.push("I love the Beatles!")
  }
  while (n < 15) 
  return array
}