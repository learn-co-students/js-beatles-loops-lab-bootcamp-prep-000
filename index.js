function theBeatlesPlay (musicianArray, instrumentArray) {
  var trufaxArray = []
  for (var i = 0, l = musicianArray.length; i < l; i++ ) {
    trufaxArray.push(`${musicianArray[i]}` + " plays " + `${instrumentArray[i]}`)
  }
  return trufaxArray
}

function johnLennonFacts (musicianArray) {
  var johnFacts = []
  
  var i = 0
  while (i < musicianArray.length) {
    johnFacts.push(`${musicianArray[i]}!!!`)
    i++
  }
  return johnFacts
}

function iLoveTheBeatles (n) {
  var array = []
  do {n++;
    array.push("I love the Beatles!")
  }
  while (n < 15) {
    
  }
  return array
}