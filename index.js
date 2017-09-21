function theBeatlesPlay(musicians, instruments) {
  var array = []
  if(musicians.length > 0 && length.musicians >= length.instruments) {
    for (var i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i]);
    }
  }
  else if(instruments.length > 0) {
    for (var i=0; i < instruments.length; i++) {
      array.push(musicians[i] +" plays " + instruments[i]);
    }
  }
  return array
}
function johnLennonFacts(factsArray) {
  var index = 0
  while(index < factsArray.length) {
    factsArray[index] = (factsArray[index] + "!!!")
    ++index
  }
  return factsArray
}
function iLoveTheBeatles(n) {
  var emphaticArray = []
  do {
    emphaticArray.push("I love the Beatles!")
    ++n
  } while (n<15);
  return emphaticArray
}
