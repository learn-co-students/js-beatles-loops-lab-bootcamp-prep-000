function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlayThisInstrument = []
  for (var i=0; i<musicians.length; i++) {
    theBeatlesPlayThisInstrument.push(`${musicians[i]} plays ${instruments[i]}`)
  }  return theBeatlesPlayThisInstrument
}

function johnLennonFacts(facts) {
  var i=0;
  while(i<facts.length) {
    facts[i]= (facts[i]+"!!!")
    i++;
  } return facts
  
}

function iLoveTheBeatles(number) {
  var beatles = []
  do {
    beatles.push("I love the Beatles!")
    number++
  }
  while(number  < 15) {
    
  } return beatles
}
  
