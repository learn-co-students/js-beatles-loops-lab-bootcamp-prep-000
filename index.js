

function theBeatlesPlay(musician, instrument) {
 var beatles = []
  for (var i = 0; musician.length > i && instrument.length > i; i++){
    beatles[i] = (musician[i] + ' plays ' + instrument[i])
  }
  return beatles
}

function johnLennonFacts(facts) {
  var i = 0
  var facts2 = []
  while (i < facts.length) {
  facts2.push(facts[i] + '!!!'); i++;
  }
  return facts2
}

function iLoveTheBeatles(i) {
  var statement = []
  do {
    statement.push("I love the Beatles!"); i++;
     }
     while (i < 15){}
  return statement
}
