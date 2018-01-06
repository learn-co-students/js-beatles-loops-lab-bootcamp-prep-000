function theBeatlesPlay (musicians, instruments){
  var empty = []
  for (var i=0; i<musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i]
    empty.push(string)
  }
  return empty
}

function johnLennonFacts (facts){
  let i = 0;
  var factArray = []
while (i<facts.length){
  factArray.push(facts[i] + "!!!")
  i++
}
return factArray
}

function iLoveTheBeatles (number){
  var empty = []
  do {  
        empty.push("I love the Beatles!")
        number++
    } while(number<15)
    return empty
}