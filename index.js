function theBeatlesPlay(musicians,instruments){

  var i = 0
  var x = []
  for (i=0; i < musicians.length; i++){
      x.push(`${musicians[i]} plays ${instruments[i]}`)


}
  return x

}

function johnLennonFacts(facts){
  var i = 0
  var x = []

  while(i < facts.length){
  x.push(facts[i] + "!!!")
  i++
}
return x
}

function iLoveTheBeatles(n){

  var a = []
  do{
    a.push( "I love the Beatles!")
    n++
  }
  while(n < 15)
  return a

}
