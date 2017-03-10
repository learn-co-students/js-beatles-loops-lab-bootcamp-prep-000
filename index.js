function theBeatlesPlay (musicArray, instrumentArray) {
  var newArr = []
  for (var i = 0; i < musicArray.length; i++) {
    newArr.push(musicArray[i] + " plays " + instrumentArray[i])
  }
  return newArr
}

function johnLennonFacts (array) {
  var counter = 0
  while (counter<array.length) {    
    array[counter] = array[counter] + "!!!";
    counter++
  }
  return array
}

function iLoveTheBeatles (num) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    num++
  }
  while (num<15)
  return arr
}