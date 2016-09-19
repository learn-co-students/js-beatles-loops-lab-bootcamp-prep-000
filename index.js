function theBeatlesPlay(musicians, instruments){
  var playArray = []
  for(var i=0; i < musicians.length; i++){
      playArray[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return playArray
}

function johnLennonFacts(facts) {
  var excitedFacts = []
  var i = 0
  while(i < facts.length) {
    excitedFacts[i] = `${facts[i]}!!!`
    i += 1
  }
  return excitedFacts
}

function iLoveTheBeatles(number) {
  var array = []
  var i = 0
  do{
    array[i] = 'I love the Beatles!'
    i += 1
    number +=1
  }
  while(number<15)
  return array
}
