function theBeatlesPlay(musicians, instruments){
  var array = []
  for(var i = 0; i <= musicians.length-1; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array){
  var i = 0
  while(array.length != i){
    array[i]=`${array[i]}!!!`
    i++
  }
  return array
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}
