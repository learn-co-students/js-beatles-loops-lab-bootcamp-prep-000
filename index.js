function theBeatlesPlay(musicians, instruments) {
  var conCat = []
  for(var i = 0; i < musicians.length; i++) {
    conCat[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  
  return conCat
}

function johnLennonFacts(theFacts) {
  var newArray = []
  var i = 0
  
  while(i < theFacts.length) {
    newArray[i] = `${theFacts[i]}!!!`
    i++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var love = "I love the Beatles!"
  var theArray = []
  do {
    theArray.push(love)
    number++
  } while (number < 15);

  return theArray
}