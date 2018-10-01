// add solution here
function theBeatlesPlay(musician, instrument) {
  var Beatle = []
  for (var i = 0; i < musician.length; i++){
    Beatle[i] = `${musician[i]} plays ${instrument[i]}` 
  } return Beatle
} 
function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {facts[i] = facts[i] + '!!!'
  i++
  }return facts
  }
function iLoveTheBeatles(number) {
  var array = []
  do { array.push("I love the Beatles!")
    number++
  } while (number < 15)
return array
} 