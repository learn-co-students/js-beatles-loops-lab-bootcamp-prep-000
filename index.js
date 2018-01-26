function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i <= musicians.length - 1 ; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
 return array
  
}
function johnLennonFacts(facts) {
  var count = 0
  while (count <= facts.length - 1) {
    facts[count] = facts[count] + "!!!"
    count++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!")
    num++;
  } while(num < 15)
  return array
}