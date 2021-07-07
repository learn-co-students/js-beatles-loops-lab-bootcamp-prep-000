// add solution here

function theBeatlesPlay(musicians, instruments) {
  var retArray = [];
  
  for(let i = 0; i<4; i++) {
    retArray.push(musicians[i] + " plays " + instruments[i])
  }
  
  return retArray
}

function johnLennonFacts(facts) {
  var retArray = [];
  
  for(let i = 0; i<facts.length;i++) {
    retArray.push(facts[i]+"!!!")
  }
  
  return retArray
}

function iLoveTheBeatles(times) {
  var retArray = [];
  
  do {
    retArray.push("I love the Beatles!")
    times++
  } while (times < 15)
  
  return retArray
}
