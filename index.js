function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for (let i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr;
}

function johnLennonFacts(array) {
  var n = 0
  var newArr = [];
  while (n < array.length) {
    newArr.push(array[n] + "!!!")
    n++
  }
  return newArr;
}

function iLoveTheBeatles(n) {
  var newArr = []
  if (n < 15) {
    do {
        newArr.push("I love the Beatles!")
        n++
      }
     while (n < 15)
   } else {
        newArr.push("I love the Beatles!")
        return newArr
      }
      return newArr
  }
