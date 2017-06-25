
function theBeatlesPlay(musician, instrument){
  var tmpArr = []
  for (var i = 0; i < musician.length; i++) {
    tmpArr.push(musician[i] + ' plays ' + instrument [i])
  }
  return tmpArr
}

function johnLennonFacts(facts) {
  var counter = 0;
  while(counter < facts.length) {
    facts[counter] += '!!!'
    counter++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var tmpArr = []
  do {
    tmpArr.push('I love the Beatles!')
    n++
  } while(n < 15)
  return tmpArr
}
