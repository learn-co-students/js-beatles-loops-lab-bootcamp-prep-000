function theBeatlesPlay(musicians, instruments){
  let arr =[]
  for (var i = 0; i<musicians.length; i++) {
   arr.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return arr
}

function johnLennonFacts(array){
  var newFacts = []
  var i = 0
  while (i<array.length) {
    newFacts.push(array[i] + "!!!")
  i++}
  return newFacts 
}

function iLoveTheBeatles(n) {
  let arr = []
  do{
    arr.push("I love the Beatles!");
    n++
  }
  while (n<15);
  return arr;
}