function theBeatlesPlay(musicians, instruments){
  var myArr = []
  for (var i = 0; i < musicians.length; i++){
    myArr.push(musicians[i] + " plays " + instruments[i])
  }return myArr  
}

function johnLennonFacts(facts){
var myArr = []
var i = 0
  while (i < facts.length){
    myArr.push(facts[i] + "!!!")
    i++
  }return myArr
}

function iLoveTheBeatles(n){
  var myArr = []
  do {
    myArr.push("I love the Beatles!")
    --n
  }while (n<15 && n>=0)
  return myArr
}