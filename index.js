// add solution here
var initArray = []
var i;

function theBeatlesPlay(musicians,instruments) {
  for (i = 0; i < musicians.length; i++) {
    initArray.push(musicians[i] + " plays " + instruments[i])
  } 
  return initArray
}


function johnLennonFacts(lennonArray) {
  i = 0
  while (lennonArray[i]) {
    lennonArray[i] = lennonArray[i] + "!!!"
    i++
  }
  return lennonArray
}

function iLoveTheBeatles(num) {
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    num++
  } while (num < 15) 
  return emptyArray
}