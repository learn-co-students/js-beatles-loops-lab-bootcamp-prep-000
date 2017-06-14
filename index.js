function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for(let i = 0; i < 4; i++){
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
  return emptyArray
}

function johnLennonFacts(facts){
  var i = facts.length - 1
  var emptyArray = []
  while (i > -1){
    emptyArray.unshift(facts[i] + "!!!")
    --i
  }
  return emptyArray
}

function iLoveTheBeatles(number){
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    number++
  } while (number < 15)
  return emptyArray
}
