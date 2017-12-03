function theBeatlesPlay(musicians, instruments) {
  var array = []

  for ( var i = 0; i< musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }

  return array
}



function johnLennonFacts(array) {
  var newArr = []
  var n = 0;
  while ( n < array.length) {
    newArr.push(array[n] + "!!!")
    n++
  }

  return newArr
}


function iLoveTheBeatles(n){
  var array = []
  do{
    array.push("I love the Beatles!")
    n++
  } while(n< 15)

  return array
}
