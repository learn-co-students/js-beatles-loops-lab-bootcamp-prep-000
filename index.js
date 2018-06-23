function theBeatlesPlay (musicians, instruments){
  var list = []
  
  for (var i = 0; i < musicians.length; i++) {
    list.push(musicians[i] + " plays " + instruments[i])
  }
  return list
}

function johnLennonFacts (facts) {
  var list = []
  var i = 0
  
  while (i < facts.length) {
    list.push(facts[i] + "!!!")
    i += 1
  }
  return list
}

function iLoveTheBeatles (number) {
  var list = []
 
  do {
   list.push("I love the Beatles!")
   number += 1
  } while (number < 15)
  return list
}