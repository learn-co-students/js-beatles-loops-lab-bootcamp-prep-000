function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i = 0; i < musicians.length; i++) {
    for(var b = i; b < i+1; b++) {
      var string = musicians[i] + " plays " + instruments[b]
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
    n++ }
  while (n < 15)
  return array
}