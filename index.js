function theBeatlesPlay(musicians, instruments){
  var bands = [];
  for (var i = 0; i < musicians.length; i++ ){
    bands.push(musicians[i] + " plays " + instruments[i])
  }
  return bands
}

function johnLennonFacts(facts){
  var i = 0
  var updatedFacts = [];
  while (facts[i]){
    updatedFacts.push(facts[i] + "!!!")
    
    i++;

  }
  return updatedFacts
}

function iLoveTheBeatles(number){
  var x = []
  do {
    x.push("I love the Beatles!")
    number++
  } while (number < 15)
  return x
}