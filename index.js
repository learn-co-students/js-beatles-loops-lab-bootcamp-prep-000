function theBeatlesPlay(musicians, instruments) {
  var myResults = []
  var howManyTimesToLoop = musicians.length;
  for(var i = 0; i < howManyTimesToLoop; i++) {
    myResults.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myResults
}

function johnLennonFacts(facts) {
  var  myResults = []
  while(facts.length > 0) {
    var fact = facts.shift()
    myResults.push(`${fact}!!!`)
  }
  return myResults
}

function iLoveTheBeatles(n) {
  var myResults = []
  do {
    myResults.push("I love the Beatles!")
    n++;
  }
  while(n < 15);
  return myResults
}
