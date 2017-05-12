function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (let i = 0; i < musicians.length; i += 1) {
    newArray.push(musicians[i] + " plays " + instruments[i])
    console.log(newArray)
  }
  return newArray
}
function johnLennonFacts(facts) {
  var indexCounter = 0
  while (indexCounter < facts.length) {
    facts[indexCounter] = facts[indexCounter] + "!!!"
    console.log(facts[indexCounter])
    indexCounter += 1
  }
  return facts
}

function iLoveTheBeatles(counter) {
  var newArray = []
  if (counter < 15) {
    do {
      newArray.push("I love the Beatles!")
    }
    while (newArray.length <= counter)
  }
  else {
    newArray = ["I love the Beatles!"]
  }
  return newArray
}