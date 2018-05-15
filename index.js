function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i = 0; i < musicians.length; i++) {
    for(var j = i; j < i+1; j++) {
      var string = musicians[i] + " plays " + instruments[j]
      array.push(string)
    }  
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length) {
    facts[i] += "!!!"
    i++
  }
  return facts
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