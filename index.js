function theBeatlesPlay(musiciansArray,instrumentsArray) {
  var array=[]
  for(var i=0; i<musiciansArray.length; i++){
    array[i]=`${musiciansArray[i]} plays ${instrumentsArray[i]}`
  }
  return array
}

function johnLennonFacts(facts){
  var i=0
  while (i<facts.length){
    facts[i++] += "!!!"
  }
  return facts
}

function iLoveTheBeatles(num){
  var array=[]
  do {
    array.push("I love the Beatles!")
    num++

  } while(num<15);

  return array
}
