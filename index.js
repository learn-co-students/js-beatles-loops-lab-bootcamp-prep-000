// add solution here

function theBeatlesPlay(musicians, instruments){
  var roster = []
  for(var i = 0; i < musicians.length; i++){
    roster[i] = (musicians[i] + " plays " + instruments[i])
  }
  return roster
}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++){
    facts[i] = (facts[i] + "!!!")
  }
  return facts
}

function iLoveTheBeatles(num){
  var array = []
  do {
    array.unshift("I love the Beatles!")
    num++
  } while (num < 15)
  return array
}
