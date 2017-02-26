function theBeatlesPlay(arrayM, arrayI) {
  var myArray = [];
  var i;
  for (i = 0; i < arrayM.length; i++) {
    myArray[i] = `${arrayM[i]} plays ${arrayI[i]}`
  }
  return myArray;
}

function johnLennonFacts(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + "!!!"
  }
  return array
}

function iLoveTheBeatles(number) {
  var my_array = []

  do {
    my_array[number] = "I love the Beatles!"
  }
  while (number < 15)
}
