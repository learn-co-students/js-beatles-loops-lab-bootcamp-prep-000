function theBeatlesPlay(musicians, instruments) {
  var newArray = new Array()
  for (let i = 0; i < musicians.length; i++) {
    if (i == 0)
      newArray.push(musicians[i]+" plays "+instruments[i])
    else
      newArray.push(musicians[i]+" plays "+instruments[i])
  }
  return newArray
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i++] += "!!!"
  }
  return facts
}

function iLoveTheBeatles(number) {
  var newArray = new Array()
  do {
    newArray.push("I love the Beatles!")
    number++
  } while (number < 15)
  return newArray
}