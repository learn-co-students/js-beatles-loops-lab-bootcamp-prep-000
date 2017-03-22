function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i=0; i<=3; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(fact){
  var array = []
  while(array.length < fact.length){
    array.push(`${fact[array.length]}!!!`)
  }
  return array
}

function iLoveTheBeatles(n){
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  }while(n<15)
  return array
}