function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i ++ ){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
} 

function johnLennonFacts(array){
  var i = 0
  var newArray = []
  while (i <= array.length-1) {
      newArray[i] = (array[i]  + "!!!")
      i++
    }
    return newArray
}

function iLoveTheBeatles(n){
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}