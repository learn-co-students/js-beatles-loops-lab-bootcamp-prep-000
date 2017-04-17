function theBeatlesPlay(musicians, instruments){
  var sen = []
  for (var idx = 0; idx < 4 ; idx++){
    sen.push(musicians[idx] + " plays " + instruments[idx] )
  }
  return sen
}

function johnLennonFacts(facts){
  var excited = []
  var idx = 0
  while( idx < facts.length){
    excited.push(facts[idx] + "!!!")
    idx++
  }
  return excited
}

function iLoveTheBeatles(n){
  var arr = []
  do{
    arr.push("I love the Beatles!")
    n++
  }
  while(n < 15)
  return arr
}
