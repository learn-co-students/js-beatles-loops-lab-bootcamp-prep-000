function theBeatlesPlay(array1, array2){
  var array3 = []
  for (var i = 0; i < array1.length; i++){
    array3.push(`${array1[i]} plays ${array2[i]}`)
  }
  return array3
}
function johnLennonFacts(array){
  var n = 0
  var array2 = []
  while (n < array.length){
    //console.log(`${array[n]}`+"!!!")
    array2.push(`${array[n]}`+"!!!")
    n++
  }
  return array2
}

function iLoveTheBeatles(num){
  var array = []
  do{
    array.push("I love the Beatles!")
    num++
    //console.log("I love the beatles!")
  }while (num < 15)
  return array
}
