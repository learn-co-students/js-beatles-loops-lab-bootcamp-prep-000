function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (var i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i])
  }
  return empty
}
function johnLennonFacts(facts) {
  var newFactsArray = []
  var i = 0
  while(i < facts.length) {
    newFactsArray.push(facts[i] + "!!!" )
    i++
  }
  return newFactsArray
}
function iLoveTheBeatles(number) {
  var empty = []
  do{
    empty.push("I love the Beatles!")
    number++
  }while(number < 15)
  return empty
}
