
function theBeatlesPlay(musicians,instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + (instruments[i]))
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var x = facts.length
  while (x > 0){
    x = x - 1
    array.unshift(facts[x] + '!!!')
  }
  return array
}
function iLoveTheBeatles(number) {
  var array = []
  do {
    array.unshift('I love the Beatles!')
    number++
  } while (number < 15);
  return array
}
