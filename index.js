function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
  var string = musicians[i] + " plays " + instruments[i]
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  var i = 0
  while (i < facts.length){
  var string = facts[i] + "!!!"
    array.push(string)
    i++
  }
  return array
}

function iLoveTheBeatles(n){
  var array = []
  var i = n
  do {
    var string = "I love the Beatles!"
    array.push(string)
    i++
  } while (i < 15);
  return array
}





