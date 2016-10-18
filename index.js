function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(factoids){
  var excitingFactoids = [], i = 0;
  while (i < factoids.length) {
    excitingFactoids.push(factoids[i] + "!!!")
    i++
  }
  return excitingFactoids
}

function iLoveTheBeatles(n){
  var seriousLove = []
  do {
    seriousLove.push("I love the Beatles!")
    n++

  } while (n < 15);
  return seriousLove
}
