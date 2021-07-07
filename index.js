function theBeatlesPlay(musicians, instruments) {
  var beatles = [] ;
  
  for (var i = 0; i < 4; i++) {
   beatles.push(`${musicians[i]} plays ${instruments[i]}`) ;
   }
   
   return beatles ;
}


function johnLennonFacts(array) {
  var i = 0 ;
  while (i < array.length) {
    array[i] = array[i] + "!!!" ;
    i++ ;
  }
  
  return array ;
}


function iLoveTheBeatles(num) {
  var arr = [] ;
  do {
    arr.push("I love the Beatles!") ;
    num++ ;
  } while (num < 15) ;
  return arr ;
}