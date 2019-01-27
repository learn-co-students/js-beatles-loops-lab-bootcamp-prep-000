// add solution here

function theBeatlesPlay(musicians, instruments) {
  var alpha = []
  for( var i = 0; i <= musicians.length - 1; i++) {
    alpha.push(musicians[i] + " plays " + instruments[i])
  }
  return alpha;
}

function johnLennonFacts(facts) {
  var i = 0;
  while( i <= facts.length - 1 ) {
    var newWord = facts[i];
    newWord += "!!!"
    facts[i] = newWord
    i++
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var alpha = []
  do {
    alpha.push("I love the Beatles!")
    num++
  } while(num < 15)
  
  return alpha
}