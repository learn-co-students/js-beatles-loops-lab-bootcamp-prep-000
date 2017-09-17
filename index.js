function theBeatlesPlay(musicians, instruments){
  var out = []
  for(var i = 0; i<musicians.length; i++){
    out.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return out
}

function johnLennonFacts(array){
  for(var i = 0; i<array.length; i++){
    array[i] += '!!!'
  }
  return array
}

function iLoveTheBeatles(n){
  var out = []
  do{
    out.push("I love the Beatles!")
  }
  while((n++)<15)
}
