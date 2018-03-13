function theBeatlesPlay(musicians, instruments) {
  var arr1 = []
  for(var i = 0; i < musicians.length ; i++) {
    arr1.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr1
}

function johnLennonFacts(array) {
 var i = 0
 var arr2 = []
  while(i < array.length) {
    arr2.push(`${array[i]}!!!`)
    i++
  }
  return arr2
}

function iLoveTheBeatles(num){
  var arr3 = []
  do {
    arr3.push("I love the Beatles!")
    num ++
  } while (num < 15)
  return arr3
}