function theBeatlesPlay(musician, instrument) {
  var arr = []
  
  if (musician.length !== instrument.length) {
    console.log("Input arrays are of unequal length")
    return
  }
  
  for (var i = 0; i < musician.length; i++) {
    arr[i] = musician[i] + " plays " + instrument[i]
  }
  
  return arr
}

function johnLennonFacts (facts) {
  var i = 0
  var arr = []
  
  while (i < facts.length) {
    arr[i] = facts[i] + "!!!"
    i++
  }
  return arr
}

function iLoveTheBeatles(num) {
  var arr = []
  
  do {
    arr.push("I love the Beatles!")
    num ++
  } while(num < 15)
  
  return arr
}