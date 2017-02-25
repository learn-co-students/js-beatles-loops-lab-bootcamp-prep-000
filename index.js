
function theBeatlesPlay(musicians, instruments){
  var empty = []  
  var lM = musicians.length
  var lI = instruments.length
  for(var i = 0; i < lM; i++){
    empty.push(musicians[i] + " plays " + instruments[i])
  }
  return empty
}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length ; i++ ){
    facts[i]= facts[i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(n){
  var empty = []
  do {
    empty.push("I love the Beatles!")
    n++
  } while (n < 15)
return empty
}