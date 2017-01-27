function theBeatlesPlay(musicians, instruments) {
  var arrayEmpty = []
  for (var i = 0; i<musicians.length; i++) {
    arrayEmpty.push (musicians[i] + " plays " + instruments[i])
  }
  return arrayEmpty
}

function johnLennonFacts(facts) {
  var newFacts = []
  var counter = 0
  var loops = facts.length
  while (loops>0){
    newFacts.push (facts[counter] + "!!!")
    loops--
    counter++
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  var emptyArray = []
  do {
    emptyArray.push ("I love the Beatles!")
    number++
  } while (number < 15);
  return emptyArray
}
