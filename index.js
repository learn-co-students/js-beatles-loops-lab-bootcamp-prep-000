function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; musicians.length > i; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length) {
    facts[i] += "!!!"
    i++;
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = []
  do {
    array.push("I love the Beatles!")
    n++ 1;
  }
  while (n < 15)
  return array
}
