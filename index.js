// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i = 0; i < musicians.length; ++i) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}

function johnLennonFacts(facts){
  var strings = []
  while(facts.length > 0) {
    strings.push(facts.shift() + "!!!")
  }
  return strings
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!")
  } while(++num < 15)
  return array
}