function theBeatlesPlay(musicians, instruments) {
  var temp = []
  for(var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i]
    temp.push(string)
  }
  return temp
}

function johnLennonFacts(facts) {
  var string = ""
  var array = []
  while(facts.length !== 0) {
    string = facts.shift() + "!!!"
    array.push(string)
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  var string = "I love the Beatles!"
  do {
    array.push(string)
    n++
  } while (n < 15)
  return array
}
