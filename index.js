function theBeatlesPlay(musicians, instruments) {
  var finishedList = []
  
  for (var i = 0; i>-1; i++) {
    if (musicians[i] === undefined) {
      return finishedList
    } else {
      finishedList[i] = musicians[i] + ' plays ' + instruments[i]
    }
  }
}

function johnLennonFacts(facts) {
  var i = 0
  var list = []
  
  while (facts[i] !== undefined) {
    list[i] = facts[i] + "!!!"
    i += 1
  }
  
  return list
}

function iLoveTheBeatles(number) {
  var a = number
  var newList = []
  
  if (number > 15) {
    return newList[0] = ('I love the Beatles!')
  }
  
  do {
    newList.push('I love the Beatles!')
    number -= 1
  } while (number >= 0)
  
  return newList
}