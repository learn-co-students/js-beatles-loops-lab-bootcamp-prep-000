// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}

function johnLennonFacts(facts) {
  var counter = 0
  while (counter < facts.length) {
    facts[counter] += "!!!"
    counter++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = []
  var count = num
  do {
    count++
    array.push("I love the Beatles!")
  }
  while (count < 15)
  return array
}