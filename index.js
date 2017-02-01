
function theBeatlesPlay(musicians, instruments){
  var array = []

  for(var i = 0; i < musicians.length; i++){
     array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var counter = 0
  while(facts.length > counter){
      facts[counter] += ("!!!")
      counter++
  }
  return facts;
}

function iLoveTheBeatles(num){
  var emptyArray =[]
  do{
    emptyArray.push("I love the Beatles!")
    num++;
  }while(num < 15)
  return emptyArray
}
