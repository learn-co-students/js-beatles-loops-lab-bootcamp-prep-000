function theBeatlesPlay(musicians, instruments){
  var playing = []
  for (var i = 0; i < musicians.length; i++){
    playing.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return playing
}

function johnLennonFacts(facts){
  var exclaimFacts = []
  var factNumber = facts.length - 1
  while (factNumber >= 0){
    exclaimFacts.unshift(facts[factNumber--] + "!!!")
  }
  return exclaimFacts
}

function iLoveTheBeatles(number){
  var iLoveTheBeatlesStrings = []
  do {
    iLoveTheBeatlesStrings.push("I love the Beatles!")
    number++
  } while (number < 15);
  return iLoveTheBeatlesStrings
}
