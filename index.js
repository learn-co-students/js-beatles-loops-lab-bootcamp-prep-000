function theBeatlesPlay(musicianList, instrumentList){
 var beatleFacts = []
  for(var i = 0; i < musicianList.length; i++){
    beatleFacts.push(`${musicianList[i]} plays ${instrumentList[i]}`)
  }
  return beatleFacts
}

function johnLennonFacts(jlFacts){
    var i = 0
  while(i < jlFacts.length){
    jlFacts[i] = `${jlFacts[i]}!!!`
    i++
  }
  return jlFacts
}

function iLoveTheBeatles(n){
  var crowdChant = []
  do{
    crowdChant.push("I love the Beatles!")
    n++
  } while (n < 15)
  return crowdChant
}

