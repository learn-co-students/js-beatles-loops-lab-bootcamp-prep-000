function theBeatlesPlay(musicians,instruments){
  var array = []

  for(var i=0; i<4; i++){
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}

function johnLennonFacts(facts){
  var factsarray = []
  let i = facts.length-1
  while(i>=0){
    factsarray[i] = `${facts[i]}!!!`
    i--
  }
  return factsarray
}

function iLoveTheBeatles(number){
  var beatles = []
  do {
    if (number>15){
      beatles[0]=`I love the Beatles!`
    } else {
      beatles[number]=`I love the Beatles!`
      number--
    }
  } while (number>=0 && number<15);

  return beatles
}
