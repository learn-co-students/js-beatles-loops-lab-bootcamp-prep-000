function theBeatlesPlay(musicians, instruments) {
  var arrayMuscians = []

  for(var i = 0; i < musicians.length; i++) {
    arrayMuscians.push(musicians[i] + " plays " + instruments[i])
  }
  return arrayMuscians
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length){
    array[i] = array[i] + "!!!"
    i++;
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = [];

  do {
      array.push("I love the Beatles!")
      number += 1
    } while (number < 15)
  return array
}