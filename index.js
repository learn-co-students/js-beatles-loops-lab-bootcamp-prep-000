function theBeatlesPlay(musicians, instruments) {
  var finalArray = []
  for (var i = 0; i < musicians.length; i++) {
    finalArray[i] = musicians[i] + ' plays ' + instruments[i]
  }
  return finalArray
}

function johnLennonFacts(array) {
  var result = []
  var i = 0;
  while (i<array.length) {
    result[i] = array[i] + "!!!"
    i++
  }
  return result
}

function iLoveTheBeatles(number) {
  var result = []
  do{
  result.push("I love the Beatles!")
  number++
  }while(number<15);
  return result
}
