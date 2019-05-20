// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i=0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  var results = []
  var index = 0
  while (index < facts.length) {
    results.push(facts[index] + "!!!")
    index++
      }
      return results
}

function iLoveTheBeatles(number) {
  var array = []
  do{
    array.push("I love the Beatles!")
    number++
  }
  while(number<15)
return array
}
