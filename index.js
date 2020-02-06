// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = []
  var i = 0
  for (i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}


function johnLennonFacts (facts) {
  var exclamation = []
  var i = 0
  while (i< facts.length) {
    exclamation.push(facts[i] + "!!!")
    i++
  }
  return exclamation
}


function iLoveTheBeatles (n) {
  var love = []
  var j = 15 - n
  var i = 0
  do {
    love.push("I love the Beatles!")
    i++
  }
  while (i < j && j < 15)
  return love
}